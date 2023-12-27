import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的分类',
    items: [
      { text: '问题', link: '/container/issues/index', activeMatch: '/container/issues/' },
    ],
    activeMatch: '/container/'
  },
  {
    text: 'JavaScript',
    items: [
      { text: 'javascript', link: '/javascriptNote/javascript/index', activeMatch: '/javascriptNote/javascript/' },
      { text: 'es6', link: '/javascriptNote/es6/index', activeMatch: '/javascriptNote/es6/' }
    ],
    activeMatch: '/javascriptNote/'
  },
  {
    text: 'Vue',
    items: [
      { text: 'vue概述', link: '/vueNote/basic/index', activeMatch: '/vueNote/basic/' }
    ],
    activeMatch: '/vueNote/'
  },
  {
    text: 'Node',
    items: [
      { text: 'node概述', link: '/nodeNote/basic/index', activeMatch: '/nodeNote/basic/' }
    ],
    activeMatch: '/nodeNote/'
  },
];