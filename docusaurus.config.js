module.exports = {
  title: 'LSData',
  tagline: 'Making the law school application process suck a little bit less since 2019',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lawschooldata', // Usually your GitHub org/user name.
  projectName: 'lawschooldata.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'LSData',
      logo: {
        alt: 'LSData',
        src: 'img/logo.svg',
        href: 'https://www.lawschooldata.org/',
        target: '_self',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} LSData.`,
    },
    googleAnalytics: {
      trackingID: 'UA-132877936-3',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      appId: '4OL8WYDIQB',
      apiKey: 'b7604fd2262e7c5169603c2fc810e42d',
      indexName: 'lsdata',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'second-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'blog-staging',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './second-blog',
      },
    ],
  ],
};
