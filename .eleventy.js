const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

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
