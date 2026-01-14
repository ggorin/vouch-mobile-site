# Interactive Tools & Calculators Research

## Research Overview
This document provides detailed research on five key interactive tools/calculators for the Vouch marketing website. Each tool addresses customer pain points in the phone plan decision-making process.

---

## 1. Phone Compatibility Checker

### Purpose
Determine whether a customer's existing phone is compatible with the AT&T network before switching to Vouch.

### How It Works
Users provide their phone's **IMEI number** (unique 15-digit device identifier) or phone model to check compatibility against AT&T's network requirements.

**Finding IMEI:**
- Dial `*#06#` on the phone
- Go to Settings > General > About (iPhone)
- Check phone documentation or SIM slot area
- Printed on device box or receipt

### Compatibility Requirements

#### Network Technology
- **Network Type:** AT&T uses GSM (Global System for Mobile Communications)
  - Compatible phones must be GSM-enabled
  - CDMA phones (older Verizon/Sprint devices) are NOT compatible

#### LTE Bands (Critical for 4G/Broadband speeds)
AT&T supports 11 LTE bands. **Primary bands for compatibility:**
- **Band 2** (1900 MHz)
- **Band 4** (AWS 1700/2100 MHz)
- **Band 5** (850 MHz)
- **Band 12/17/29** (700 MHz - core bands, heavily relied upon)
- **Band 30, 32, 66** (additional coverage)

**Note:** Bands 12 and 29 are supersets of band 17, so supporting band 12 or 29 covers band 17 coverage.

#### 5G NR Bands (Next-generation speeds)
AT&T supports 6 5G NR bands:
- **Band n5** (850 MHz low-band) - best coverage, furthest reach, better building penetration
- **Band n77** (3700 MHz mid-band C-Band) - balance of coverage and capacity
- **Band n260** (39 GHz mmWave) - highest speeds, shortest range
- **Band n261** (28 GHz mmWave) - highest speeds, shortest range

**Recommendation:** At minimum, phones should support LTE bands 12/17 and at least one 5G band (n5 or n77) for future-proofing.

### Common Incompatibilities
- Older CDMA phones from Verizon, Sprint, or Boost Mobile
- Phones from international carriers with no GSM support
- Certain budget phones from small manufacturers without band support
- Devices blacklisted/reported stolen (checked via IMEI database)

### Third-Party Tools (Competitor Research)
Several platforms offer IMEI checking services:

| Tool | Features | URL |
|------|----------|-----|
| IMEI.info | 110M+ IMEI database, warranty info, simlock status | https://www.imei.info/ |
| IMEI.org | Unlock status, carrier lock checks, iPhone iCloud lock | https://imei.org/ |
| IMEICheck.com | Device status, blacklist, simlock, specs, warranty | https://imeicheck.com/ |
| doctorSIM | Anonymous checks, secondhand device verification | https://www.doctorsim.com/ |
| Swopsmart | AT&T-specific IMEI validation, blacklist detection | https://www.swopsmart.com/check-att-imei |
| T-Mobile Compatibility | Native check for T-Mobile (reference for design) | https://www.t-mobile.com/resources/bring-your-own-phone |

### Data Sources
- [AT&T Frequency Band Documentation](https://www.frequencycheck.com/carriers/at-t-united-states)
- [AT&T Official Device List PDF](https://www.att.com/scmsassets/support/wireless/devices-working-on-att-network.pdf)
- [PhoneArena LTE Band Reference](https://www.phonearena.com/news/Cheat-sheet-which-4G-LTE-bands-do-AT-T-Verizon-T-Mobile-and-Sprint-use-in-the-USA_id77933)

---

## 2. Savings Calculator

### Purpose
Show customers how much they'll save by switching from their current carrier to Vouch's unlimited plans.

### Industry Baseline Pricing (2026)

#### Overall Average
- **Average U.S. cell phone bill:** $141/month
- **Average family plan:** $244/month

#### Single-Line Plans by Major Carrier
| Carrier | Average Monthly Cost | Notes |
|---------|---------------------|-------|
| T-Mobile | $50-60 | Competitive baseline |
| AT&T | ~$65 | Vouch's underlying network |
| Verizon | ~$70 | Premium pricing |
| MVNO Average | ~$77 | Already discounted vs. major carriers |

#### Plan Type Pricing Ranges
- **Prepaid plans:** $25-60/month
- **Postpaid plans:** $70-100/month
- **Unlimited plans:** $80-120/line

### Factors Affecting Customer Savings
1. **Number of lines** - Family plans have different per-line costs
2. **Current plan type** - Postpaid vs. prepaid
3. **Data needs** - Unlimited vs. limited plans
4. **Device financing** - Many carriers bundle device costs
5. **Taxes and fees** - Regional variation (can add 10-20% to bill)
6. **Promotional discounts** - Limited-time offers reduce actual price
7. **Autopay discounts** - Carriers often reduce bill with autopay enrollment

### Calculator Features to Include
- Input current monthly bill (or select carrier + plan type)
- Input number of lines
- Monthly savings estimate
- Annual savings calculation
- Payback analysis if switching involves device costs
- Comparison breakdown (what you pay for, what you save on)

### Marketing Angles
- **Annual savings:** Family of 4 could save $500-1000/year
- **Break-even point:** Switch costs recovered in 1-2 months for most users
- **Hidden savings:** No device financing, less contract penalties

### Reference Sources
- [T-Mobile Average Bill Report](https://www.t-mobile.com/dialed-in/wireless/average-phone-bill-per-month)
- [SuperMoney 2026 Guide](https://www.supermoney.com/what-is-the-average-cell-phone-bill-for-one-person)
- [WhistleOut Overspending Report](https://www.whistleout.com/CellPhones/Guides/mobile-overspending-report)

---

## 3. Data Usage Calculator

### Purpose
Help customers determine if their usage fits Vouch's data plans and estimate monthly data needs.

### Typical Monthly Usage by User Profile

| User Type | Monthly Data | Primary Activities |
|-----------|--------------|-------------------|
| Light user | 5-10 GB | Email, messaging, light web browsing |
| Moderate user | 15-30 GB | Social media, music streaming, video calls |
| Heavy user | 50-100+ GB | Video streaming, gaming, remote work |
| Very Heavy user | 150-300+ GB | 4K streaming, multiple users/household |

### Hourly Data Consumption by Activity

#### Video Streaming (Most Data-Intensive)
- **Standard Definition (480p):** ~1 GB/hour
- **HD (720p):** ~1-1.5 GB/hour
- **Full HD (1080p):** ~1.5-3 GB/hour
- **4K Ultra HD:** ~7-8 GB/hour

**Example:** Binge-watching Netflix 4 hours daily in 1080p ≈ 180 GB/month

#### Music Streaming
- **Spotify/Apple Music/YouTube Music:** ~20-25 hours per 1 GB
  - Typical use: 1-2 GB/month for moderate listeners
  - Heavy use: 3-5 GB/month

#### Social Media (Highly Variable)
- **General scrolling:** ~100-200 MB/hour (depends on video autoplay)
- **TikTok:** ~840 MB/hour (short-form video-heavy)
- **Instagram:** ~100-150 MB/hour
- **Facebook:** ~50-100 MB/hour
- **Daily 1-hour usage:** ~1.5 GB/month

#### Video Calling
- **Zoom, FaceTime, Skype:** ~150-300 MB/hour
- **Daily 30-min calls:** ~2.25-4.5 GB/month

#### Web Browsing
- **General browsing:** ~50-70 MB/hour
- **Heavy browsing:** ~100+ MB/hour

#### Online Gaming
- **Typical mobile game:** ~40-150 MB/hour
- **High-performance games:** ~150-500 MB/hour

#### Email
- **Text emails:** Minimal (~1-5 MB/100 emails)
- **Emails with attachments:** Variable (5-50 MB+ each)

### Usage Calculation Examples

**Scenario 1: Moderate Family User**
- 2 hours social media daily: 4 GB/month
- 30 min music streaming daily: 1.5 GB/month
- 1 hour video streaming daily: 45 GB/month
- Miscellaneous browsing: 5 GB/month
- **Total: ~55 GB/month**

**Scenario 2: Business Professional**
- 2 hours video calls daily: 9 GB/month
- Email with attachments: 2 GB/month
- Web browsing and research: 5 GB/month
- Music streaming background: 1 GB/month
- **Total: ~17 GB/month**

**Scenario 3: Light User**
- Email and messaging: 1 GB/month
- Occasional web browsing: 2 GB/month
- Music streaming: 0.5 GB/month
- Social media light use: 2 GB/month
- **Total: ~5.5 GB/month**

### Calculator Features
- Input daily activities with time spent
- Select streaming quality (SD/HD/4K)
- Automatic monthly estimate
- Comparison to Vouch plan limits
- Recommendations for suitable plan tier
- Visual breakdown of usage by category

### Research Sources
- [Saily Data Usage Calculator](https://saily.com/data-usage-calculator/)
- [OmniCalculator Data Usage Tool](https://www.omnicalculator.com/everyday-life/data-usage)
- [BroadbandNow Data Needs Guide](https://broadbandnow.com/guides/how-much-data-do-i-need)
- [WhistleOut Internet Usage Guide](https://www.whistleout.com/Internet/Guides/Internet-usage-guide)

---

## 4. Coverage Checker

### Purpose
Verify AT&T network coverage availability in the customer's area by ZIP code or address before switching.

### How Coverage Checking Works

#### Coverage Data Sources
Two main types of coverage data:
1. **Verified Coverage** - Actual tested signal strength and speed (limited areas)
2. **Estimated Coverage** - Predictive models based on tower location and terrain

Coverage typically includes:
- Voice call availability
- 4G LTE data availability
- 5G data availability
- Signal strength estimates (good/fair/poor)
- Download speed predictions

#### Data Points Displayed
- Indoor vs. outdoor coverage (signal penetration varies)
- Coverage type breakdown (voice only vs. data capable)
- 5G availability status
- Network congestion information (some tools)
- Speed test data (some tools)

### Coverage API Options

| Service | API Type | Features | Cost Model |
|---------|----------|----------|-----------|
| CoverageCom | REST API | Address/lat-long lookup, coverage tiles, custom datasets | Commercial |
| HERE Maps | Coverage API | Mapbox vector tiles integration | Commercial |
| CoverageCom Tiles | Vector Tiles | Embeddable coverage maps | Commercial |

#### CoverageCom Specifics (Most Practical for Implementation)
- Checks coverage by address, city, ZIP code, or coordinates
- Provides verified and estimated coverage maps
- Available for all major carriers
- Can be integrated into websites/apps
- Offers custom dataset downloads

### Competitor Coverage Tools (Reference)

| Tool | Approach | URL |
|------|----------|-----|
| SignalChecker | ZIP code lookup for all carriers | https://www.signalchecker.com/ |
| CoverageCom | Interactive map with address search | https://coveragemap.com/ |
| CellMapper | Crowdsourced tower + coverage map | https://www.cellmapper.net/map |
| T-Mobile Coverage Map | Carrier-native tool (reference design) | https://www.t-mobile.com/coverage-map |
| AT&T Coverage Map | Official AT&T maps | https://www.att.com/5g/coverage-map/ |

### Implementation Considerations
- **Data Freshness:** Coverage data updates monthly at best, quarterly more typical
- **Accuracy Limits:** Predicted coverage can have ±1 block error margin in cities
- **Real-world Performance:** Actual speed depends on congestion, terrain, weather
- **Integration Approach:**
  - Embed interactive map with ZIP code search
  - Show coverage categories (5G, LTE, Voice only)
  - Color-code coverage quality (excellent/good/fair/poor)
  - Add disclaimer about estimates vs. verified data

### SEO Benefit
Coverage checker drives long-tail search traffic:
- "AT&T coverage in [ZIP code]"
- "5G coverage in [city]"
- "Phone signal check [address]"

### Sources
- [CoverageCom API Documentation](https://coveragemap.com/)
- [SignalChecker ZIP Code Tool](https://www.signalchecker.com/)
- [HERE Cellular Coverage API](https://www.here.com/docs/bundle/map-attributes-api-developer-guide/page/topics/cellular-coverage.html)

---

## 5. Phone Unlock Status Checker

### Purpose
Verify whether a customer's current phone is carrier-unlocked and eligible for use on Vouch's AT&T network.

### Phone Lock Status Explanations

#### Carrier Lock
- **Definition:** Phone tied to a specific carrier and cannot be used on other networks without unlocking
- **Common for:** Subsidized phones purchased from carriers with contracts
- **Lock Duration:** Typically 24 months from purchase
- **Bypass:** Contact carrier customer service for unlock eligibility

#### SIM Lock vs. Network Lock
- **SIM Lock:** Physical SIM card locked to carrier (older technology)
- **Network Lock:** IMEI locked to carrier network (modern approach)

#### Blacklist/Stolen Device Status
- **Definition:** Phone reported stolen or involved in fraud; blocked from activation
- **Database:** National blacklist maintained across carriers
- **Clearance:** Requires proof of ownership from carrier

### Unlock Eligibility Requirements

**Typical carrier unlock policies:**
1. Account in good standing (no outstanding balance)
2. Phone fully paid off (no device financing balance)
3. Minimum time on network (usually 24 months)
4. No active contract
5. Phone not reported stolen/blacklisted

### Third-Party IMEI Checker Databases

| Tool | Database Size | Key Features | URL |
|------|---------------|--------------|-----|
| IMEI.info | 110M+ checked | Warranty, simlock, blacklist, carrier check | https://www.imei.info/ |
| IMEI.org | Carrier-specific | Unlock status, iPhone iCloud lock, carrier lock | https://imei.org/check-imei/unlock |
| IMEICheck.com | Comprehensive | Device status, blacklist, specs, warranty | https://imeicheck.com/ |
| doctorSIM | International DB | Anonymous checks, secondhand verification | https://www.doctorsim.com/ |
| SICKW.com | Multi-format | IMEI, MEID, SERIAL, ESN checking | https://sickw.com/ |

### How Unlock Checking Works
1. User provides IMEI (or finds via `*#06#`)
2. Tool queries carrier databases
3. Results show:
   - Current carrier lock status
   - Blacklist status
   - Activation eligibility
   - Unlock eligibility requirements

### Implementation Approach

**Vouch Unlock Checker could:**
- Accept IMEI input
- Query AT&T compatibility + unlocked status
- Show quick eligibility assessment
- Link to carrier unlock instructions if locked
- Display blacklist status warning
- Suggest next steps for activation

### SEO Keywords
- "Check if phone is unlocked"
- "IMEI unlock status checker"
- "Is my phone carrier locked?"
- "Phone unlock eligibility"

### Sources
- [IMEI.info Unlock Status](https://imei.org/check-imei/unlock)
- [doctorSIM Phone Checks](https://www.doctorsim.com/us-en/phone-checks/)
- [T-Mobile BYOP Eligibility Check](https://www.t-mobile.com/resources/bring-your-own-phone)

---

## Competitor Feature Comparison

### WhistleOut Features
- **Plan comparison:** Filter by price, data, network, speeds, discounts
- **Multi-line support:** Shopping for family vs. single line
- **New vs. BYOP:** Accounts for device costs
- **Data needs selector:** Guides users to appropriate plan
- **Average bill data:** Shows regional/carrier pricing

**Reference:** https://www.whistleout.com/CellPhones

### Clark Howard Features
- **Plan Finder tool:** Free personalized recommendations
- **100+ plans in database:** Covers all major carriers and MVNOs
- **Plan reviews:** Expert analysis from financial advisor
- **Savings analysis:** Emphasis on beating industry average
- **BYOP guidance:** Dedicated section on bringing own phones

**Reference:** https://clark.com/phone-plan-finder/

### Key Takeaways for Vouch
1. **Comparison tools** should be simple and fast (under 2 minutes)
2. **Real data** beats generic estimates (use actual Vouch pricing)
3. **Multiple input methods** (manual entry, select from dropdown, model search)
4. **Visual results** (charts, tables, color coding)
5. **Clear next steps** (CTA to switch, contact support link)
6. **Mobile-first design** (most comparisons happen on phones)
7. **Transparency** (show all fees, taxes when possible)

---

## Implementation Priority

### High Priority (Drives Conversions)
1. **Savings Calculator** - Direct ROI, easy to build, high engagement
2. **Phone Compatibility Checker** - Removes switching friction, quick wins
3. **Coverage Checker** - Addresses "Will it work here?" concern

### Medium Priority (Nice to Have)
4. **Data Usage Calculator** - Helps customers choose right plan tier
5. **Unlock Status Checker** - Lower engagement, but improves customer confidence

### Low Priority (Future Enhancement)
- Detailed band compatibility visualization
- Real-time speed test integration
- Device trade-in value estimator

---

## Data & API Requirements

### Vouch Proprietary Data Needed
- Vouch plan pricing and features
- Vouch coverage area (identical to AT&T, but branded)
- Vouch feature matrix (unlimited data, no throttling, etc.)

### Third-Party APIs/Data
- IMEI compatibility database (third-party provider)
- Coverage data API (CoverageCom or similar)
- Carrier unlock database (if implementing unlock checker)
- ZIP code to geolocation mapping

### No Real-Time APIs Required
- Savings calculator: Static data
- Data usage calculator: Static data
- Compatibility checker: Can use cached IMEI database

---

## Recommended Next Steps

1. **Validate demand** - Survey existing customers on which tools matter most
2. **Prototype top priority** - Build savings calculator as MVP
3. **Integrate data sources** - Connect to IMEI checker and coverage API
4. **Measure usage** - Track engagement, conversion impact
5. **Iterate** - Based on analytics, add/refine tools
6. **Marketing alignment** - Use tools in paid campaigns to drive traffic

