/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'dothttp',
  tagline: 'http dsl',
  url: 'https://docs.dothttp.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rocket.svg',
  organizationName: 'cedric05',
  projectName: 'dothttp-docs',
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
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          label: 'playground',
          to: "https://cedric05.github.io/dothttp-playground/", position: 'left'
        },
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
          title: 'Quick links',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            }, {
              label: 'Features',
              to: 'docs/features',
            }, {
              label: 'Extension',
              to: 'docs/extension',
            },
            {
              label: 'playground',
              to: "https://cedric05.github.io/dothttp-playground/"
            }
          ],
        },

        {
          title: 'Github',
          items: [
            {
              label: 'dothttp-core',
              to: 'https://github.com/cedric05/dothttp',
            }, {
              label: 'vscode-extension',
              to: 'https://github.com/cedric05/dothttp-runner',
            }, 
            {
              label: "http echo",
              to: "https://github.com/cedric05/dothttp-curlify"
            },
            {
              label: "dothttp-playground",
              to: "https://github.com/cedric05/dothttp-playground"
            }
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'contact us',
              to: 'mailto:prasanth@dothttp.dev',
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
