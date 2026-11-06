import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type DefaultTheme } from 'vitepress'

const root = fileURLToPath(new URL('..', import.meta.url))
const docsDir = join(root, 'docs')

/* ---------- sidebar generated from the docs tree ---------- */

function heading(file: string) {
  return readFileSync(file, 'utf8').match(/^#\s+(.+)$/m)?.[1]?.trim()
}

// `order` in frontmatter sorts siblings; ties fall back to the file name.
function readOrder(file: string) {
  if (!existsSync(file)) return Number.POSITIVE_INFINITY
  const block = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const value = block?.[1].match(/^order:\s*(-?\d+)\s*$/m)
  return value ? Number(value[1]) : Number.POSITIVE_INFINITY
}

function sortByOrder(dir: string, rels: string[]) {
  return rels
    .map((rel) => ({ rel, order: readOrder(join(dir, rel)) }))
    .sort((a, b) => a.order - b.order || a.rel.localeCompare(b.rel))
    .map((item) => item.rel)
}

function pageLink(rel: string) {
  return `/docs/${rel.replace(/\.md$/, '').replace(/\/index$/, '/')}`
}

function pageItem(rel: string) {
  return { text: heading(join(docsDir, rel)) ?? basename(rel, '.md'), link: pageLink(rel) }
}

function walk(dir: string, prefix = ''): string[] {
  const found: string[] = []
  const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name
    if (entry.isDirectory()) found.push(...walk(join(dir, entry.name), rel))
    else if (entry.name.endsWith('.md')) found.push(rel)
  }
  return found
}

// Top-level entries become sidebar groups or links, ordered by their own
// frontmatter so the numbering lives next to the page it describes.
function buildDocsSidebar(): DefaultTheme.SidebarItem[] {
  const files = walk(docsDir)
  const entries = readdirSync(docsDir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .flatMap((entry) => {
      if (entry.isDirectory()) {
        const prefix = `${entry.name}/`
        const indexRel = `${prefix}index.md`
        const hasIndex = existsSync(join(docsDir, indexRel))
        const items = sortByOrder(
          docsDir,
          files.filter((rel) => rel.startsWith(prefix) && rel !== indexRel)
        )
        if (!items.length) return []
        return [
          {
            order: readOrder(join(docsDir, indexRel)),
            item: {
              text: hasIndex ? (heading(join(docsDir, indexRel)) ?? entry.name) : entry.name,
              ...(hasIndex ? { link: pageLink(indexRel) } : {}),
              collapsed: false,
              items: items.map(pageItem)
            }
          }
        ]
      }
      if (!entry.name.endsWith('.md') || entry.name === 'index.md') return []
      return [{ order: readOrder(join(docsDir, entry.name)), item: pageItem(entry.name) }]
    })
    .sort((a, b) => a.order - b.order || a.item.text.localeCompare(b.item.text))

  return [
    { text: '概览', link: '/docs/' },
    ...entries.map((entry) => entry.item)
  ]
}

/* ---------- site config ---------- */

export default defineConfig({
  lang: 'zh-CN',
  title: 'Craft233 文档站',
  description: 'Craft233 Minecraft 服务器文档',
  cleanUrls: true,
  outDir: 'dist',
  sitemap: { hostname: 'https://docs.craft233.cn' },

  head: [
    ['link', { rel: 'icon', href: 'https://res.neokoni.ink/craft233/img/craft233_logo_64.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Craft233 文档站' }],
    ['meta', { property: 'og:description', content: 'Craft233 Minecraft 服务器文档' }]
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  themeConfig: {
    nav: [
      { text: '文档', link: '/docs/' },
      { text: '状态监测', link: 'https://status.craft233.cn' },
      { text: '主站', link: 'https://www.craft233.cn' }
    ],

    sidebar: {
      '/docs/': buildDocsSidebar()
    },

    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    editLink: {
      pattern: 'https://github.com/Craft233MC/documentation/edit/main/:path',
      text: '在 GitHub 编辑此页'
    },
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '回到顶部',

    footer: {
      copyright: '© 2023-2026 Craft233. All rights reserved.',
      message: `<a href="https://icp.gov.moe/?keyword=20232336" target="_blank">萌ICP备20232336号</a><br>
                <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2024074700号-4</a><br>
                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51130402000151" target="_blank">川公网安备51130402000151号</a>`
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Craft233MC/documentation' }]
  }
})
