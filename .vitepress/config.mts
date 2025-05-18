import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
function getPath (str: string) {
  return "/docs" + str
} 

export default defineConfig({
  lang: 'zh_CN',
  title: "Craft233文档站",
  description: "Craft233",
  head: [['link', { rel: 'icon', href: 'https://res.neokoni.ink/craft233/img/craft233_logo_64.png' }]],
  outDir: 'dist',
  sitemap: {
    hostname: 'https://example.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档目录📄',
        link: getPath('/'),
      },
      {
        text: '进服帮助🌟',
        link: getPath('/readyForJoin'),
        collapsed: true,
        items: [
          { text: '安装游戏🎮', link: getPath('/readyForJoin/installGame') },
          { text: '准备账号🌏', link: getPath('/readyForJoin/setupAccount') },
          { text: '正式进入🧭', link: getPath('/readyForJoin/joinServer') }
        ]
      },
      {
        text: '指令及功能🧩',
        link: getPath('/commandAndFunctions'),
        collapsed: true,
        items: [
          { text: '杂项', link: getPath('/commandAndFunctions/chore') },
          { text: '高级成就', link: getPath('/commandAndFunctions/advancedAchievements') },
          { text: '基岩版玩家支持', link: getPath('/commandAndFunctions/bedrockPlayerSupport') },
          { text: '单方块生存', link: getPath('/commandAndFunctions/oneblock') },
          { text: 'CoreProtect', link: getPath('/commandAndFunctions/coreProtect') },
          { text: 'GSit', link: getPath('/commandAndFunctions/gsit') },
          { text: 'HuskHomes家', link: getPath('/commandAndFunctions/huskHomes') },
          { text: 'QuickShop箱子商店', link: getPath('/commandAndFunctions/quickShop') },
          { text: 'Light系插件', link: getPath('/commandAndFunctions/lightPlugins') },
          { text: '服务器商店', link: getPath('/commandAndFunctions/shop') },
        ]
      },
      {
        text: '常见问题🤔',
        link: getPath('/FAQ'),
        items: []
      },
    ],

    footer: {
      copyright: '© 2023-2025 Craft233. All rights reserved.',
      message: `<a href="https://icp.gov.moe/?keyword=20232336" target="_blank">萌ICP备20232336号</a><br>
                <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2024074700号-1</a><br>
                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51130402000151" target="_blank">川公网安备51130402000151号</a>`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Craft233MC/documentation' }
    ]
  }
})
