const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const path = require("path");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlMinifier = require("html-minifier-terser");

module.exports = async function(eleventyConfig) {
  const { default: pluginBundle } = await import("@11ty/eleventy-plugin-bundle");
  const { default: metagen } = await import("eleventy-plugin-metagen");

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginBundle);
  eleventyConfig.addPlugin(metagen);

  // Image Shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", async function(src, alt, widths = [300, 600, 1200], sizes = "100vw", attrs = {}) {
    if (!src) {
      return "";
    }
    
    // prepend src/ if it's not there, assuming src is relative to project root or src/ folder
    let inputPath = src;
    if(src.startsWith("/images/")) {
        inputPath = "src" + src;
    } else if (!src.startsWith("src/")) {
        inputPath = "src/" + src;
    }

    let metadata = await Image(inputPath, {
      widths: widths,
      formats: ["avif", "webp", "auto"],
      outputDir: "./_site/images/",
      urlPath: "/images/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
      ...attrs
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // HTML Minifier Transform
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath && outputPath.endsWith(".html")) {
      let minified = htmlMinifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });

  // Pass through static assets

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/css/");

  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // ISO date filter for sitemap
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  // Slug filter for URLs
  eleventyConfig.addFilter("slug", (str) => {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  });

  // Word count filter for schema markup
  eleventyConfig.addFilter("wordcount", (str) => {
    if (!str) return 0;
    return str.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  });

  // Flatten FAQs for schema markup
  eleventyConfig.addFilter("flattenFaqs", (faqs) => {
    const allFaqs = [];
    for (const category of Object.values(faqs)) {
      for (const faq of category) {
        allFaqs.push({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        });
      }
    }
    return allFaqs;
  });

  // Current year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Blog posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => {
      return a.date - b.date;
    });
  });

  // States collection (from data file)
  eleventyConfig.addCollection("states", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.layout === "state.njk");
  });

  // Competitors collection (from data file)
  eleventyConfig.addCollection("competitors", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.layout === "compare.njk");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
