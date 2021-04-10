/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'dothttp',
  tagline: 'http dsl',
  url: 'https://dcos.dothttp.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rocket.svg',
  organizationName: 'endeavour', // Usually your GitHub org/user name.
  projectName: 'dothttp', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'dothttp',
      logo: {
        alt: 'dothttp',
        src: 'img/rocket.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/cedric05/dothttp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dothttp`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cedric05/dothttp-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/cedric05/dothttp-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
