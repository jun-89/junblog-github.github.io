import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';
import { algoliaSearchOptions } from './search/algolia-search';
import { localSearchOptions } from './search/local-search';

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: '/logo.png',
  outline: {
    level: 'deep', // 右侧大纲标题层级
    label: '目录', // 右侧大纲标题文本配置
  },
  darkModeSwitchLabel: '切换日光/暗黑模式',
  sidebarMenuLabel: '文章',
  returnToTopLabel: '返回顶部',
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // // 搜索配置（二选一）
  // search: {
  //   provider: 'algolia',
  //   options: algoliaSearchOptions,
  //   // 本地离线搜索
  //   // provider: 'local',
  //   // options: localSearchOptions
  // },
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    icpRecordCode: '豫ICP备2023021681号-1', // ICP备案号
    publicSecurityRecordCode: '暂无', // 联网备案号
    copyright: `Copyright © 2023-${new Date().getFullYear()} jingjun` // 版权信息
  }
}