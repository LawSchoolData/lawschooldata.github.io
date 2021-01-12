export default {
  "title": "LSData",
  "tagline": "Making the law school application process suck a little bit less since 2019",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "lawschooldata",
  "projectName": "lawschooldata.github.io",
  "themeConfig": {
    "navbar": {
      "title": "LSData",
      "logo": {
        "alt": "LSData",
        "src": "img/logo.svg",
        "href": "https://www.lawschooldata.org/",
        "target": "_self"
      },
      "items": [
        {
          "to": "/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2021 LSData.",
      "links": []
    },
    "googleAnalytics": {
      "trackingID": "UA-132877936-3",
      "anonymizeIP": true
    },
    "algolia": {
      "appId": "4OL8WYDIQB",
      "apiKey": "b7604fd2262e7c5169603c2fc810e42d",
      "indexName": "lsdata",
      "searchParameters": {},
      "contextualSearch": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/dinan/IdeaProjects/lsdata_docs/sidebars.js",
          "routeBasePath": "/"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/home/dinan/IdeaProjects/lsdata_docs/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-blog",
      {
        "id": "second-blog",
        "routeBasePath": "blog-staging",
        "path": "./second-blog"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};