import { defineConfig } from 'vitepress';
import sidebar from './sidebar/index';

export default defineConfig({
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
    sidebar: sidebar.getSidebar(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present warbler',
    },
  },
});
