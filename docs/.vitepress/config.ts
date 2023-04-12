import { defineConfig } from 'vitepress';
// import sidebar from './sidebar/index';

export default defineConfig({
  outDir: '../dist',
  lang: 'en-US',
  title: 'warbler-cli',
  description: 'Command line interface for rapid JavaScript development',
  lastUpdated: true,
  appearance: 'dark',
  themeConfig: {
    siteTitle: 'warbler-cli',
    nav: [],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '最近更新',
    socialLinks: [],
    sidebar: getSideBar(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present warbler',
    },
  },
});

function getSideBar() {
  return [
    {
      text: '快速开始',
      link: '/',
    },
    {
      text: '命令指南',
      items: [
        { text: 'warbler', link: '/guide/command/warbler' },
        { text: 'init', link: '/guide/command/init' },
        { text: 'config', link: '/guide/command/config' },
      ],
    },
    {
      text: '配置参考',
      link: '/guide/settings',
    },
  ];
}
