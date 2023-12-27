import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind';
export default defineConfig({
  plugins: [
    pagefindPlugin({
      locales: {
        root:{
          btnPlaceholder: '搜索',
          placeholder: '搜索文档',
          emptyText: '空空如也',
          heading: '共: {{searchResult}} 条结果',
          // 搜索结果不展示最后修改日期日期
          showDate: false
        },
      },
      // customSearchQuery: chineseSearchOptimize,
      customSearchQuery(input){
        // 将搜索的每个中文单字两侧加上空格
        return input.replace(/[\u4e00-\u9fa5]/g, ' $& ')
        .replace(/\s+/g,' ')
        .trim();
      },
      forceLanguage:'zh-cn',
      excludeSelector:['img','a.header-anchor'],
      resultOptimization: false,
      filter(searchItem, idx, originArray) {
        return !searchItem.route.includes('404') 
      },
    }),
    Components({
      dirs: ['.vitepress/theme/components'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })]
    }),
  ],
  ssr: { noExternal: ['@arco-design/web-vue'] },
  resolve: {
    alias: {
      'mermaid': 'mermaid/dist/mermaid.esm.mjs',
    },
  },
});
