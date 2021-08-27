new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.craftcms.com/commerce/api/v2/",
    "https://docs.craftcms.com/",
    "https://docs.craftcms.com/commerce/api/v3/",
    "https://docs.craftcms.com/api/v2/",
    "https://docs.craftcms.com/api/v3/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "https://craftcms.com/docs/sitemap.xml**",
    "https://craftcms.com/docs/sitemap.xml**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.craftcms.com/**"],
  schedule: "at 11:40 on Tuesday",
  actions: [
    {
      indexName: "craftcms",
      pathsToMatch: ["https://docs.craftcms.com/commerce/api/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content: ".theme-default-content p, .theme-default-content li",
            lvl0: {
              selectors: "span.site-name",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            lang: "",
            version: {
              defaultValue: ["v2"],
            },
            tags: {
              defaultValue: ["commerce", "api", "en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "craftcms",
      pathsToMatch: ["https://docs.craftcms.com/commerce/api/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content: ".theme-default-content p, .theme-default-content li",
            lvl0: {
              selectors: "span.site-name",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            lang: "",
            version: {
              defaultValue: ["v3"],
            },
            tags: {
              defaultValue: ["commerce", "api", "en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "craftcms",
      pathsToMatch: ["https://docs.craftcms.com/api/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content: ".theme-default-content p, .theme-default-content li",
            lvl0: {
              selectors: "span.site-name",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            lang: "",
            version: {
              defaultValue: ["v2"],
            },
            tags: {
              defaultValue: ["craftcms", "api", "en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "craftcms",
      pathsToMatch: ["https://docs.craftcms.com/api/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".table-of-contents";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h1",
            content: ".theme-default-content p, .theme-default-content li",
            lvl0: {
              selectors: "span.site-name",
              defaultValue: "Documentation",
            },
            lvl2: ".theme-default-content h2",
            lvl3: ".theme-default-content h3",
            lvl4: ".theme-default-content h4",
            lvl5: ".theme-default-content h5",
            lang: "",
            version: {
              defaultValue: ["v3"],
            },
            tags: {
              defaultValue: ["craftcms", "api", "en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    craftcms: {
      attributesForFaceting: ["type", "lang", "tags", "version"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.page_rank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});