// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'lijiayang',
  tagline: 'Do not be afraid of loneliness',
  url: 'https://xyljy.top',
  baseUrl: '/blog/', 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ljyws', // Usually your GitHub org/user name.
  projectName: 'xyljy', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  plugins: ['@docusaurus/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'ljyws',
    locales: ['ljyws'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: '',
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'HOME',
            position: 'left',
            label: 'BLOG',
          },
          {
            href: 'https://github.com/ljyws',
            label: 'GitHub',
            position: 'left',
          },
        ],
      }, 
      prism: { 
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['rust'],
      }, 
      colorMode: {
        respectPrefersColorScheme: true
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BWG0DEIDEP',
    
        // Public API key: it is safe to commit it
        apiKey: 'd3f9fff64e1510e7299229fb32996203',
    
        indexName: 'ljyws',
      }
    }),
};

module.exports = config;
