import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "鳝鱼の文档",
  description: "一个VitePress文档网站",
  ignoreDeadLinks: true,
  markdown: {
       container: {
          tipLabel: '提示',
          warningLabel: '警告',
          dangerLabel: '危险',
          infoLabel: '信息',
          detailsLabel: '详细信息'
       }
    },
  notFound: '/404',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/zcsfish/zcsfish.github.io/edit/main/:path'
      text: '编辑文本'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zcsfish/zcsfish.github.io' }
    ]
  }
})
