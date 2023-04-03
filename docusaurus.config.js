// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MlWizardry',
  tagline: 'Unleash the magic of machine learning.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mlwizardry.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'librewave', // Usually your GitHub org/user name.
  projectName: 'mlwizardry', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/librewave/mlwizardry/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-23JPNTRXGH',
          anonymizeIP: true,
        },  
        sitemap: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'cookie',
        content:
          '当サイトでは、利便性向上を目的とし、Cookieを使用しています。<a href="/cookie">詳細をご覧</a>ください。',
        backgroundColor: 'rgb(65, 146, 217)',
        textColor: 'white',
        isCloseable: true,
      },      
      navbar: {
        title: 'MlWizardry',
        logo: {
          alt: 'MlWizardry Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/librewave/mlwizardry',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
