import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '学习笔记',
  description: '中文学习笔记：Git 常用命令，以及把本地仓库接到 GitHub 的步骤。',
  base: '/learning-notes/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: 'Git 教程', link: '/notes/git/' }
    ],
    sidebar: {
      '/notes/git/': [
        {
          text: '开始',
          items: [
            { text: '教程概览', link: '/notes/git/' },
            { text: '从零到第一次推送', link: '/notes/git/first-push' }
          ]
        },
        {
          text: '常用',
          items: [
            { text: '安装 Git', link: '/notes/git/install' },
            { text: '认识 GitHub', link: '/notes/git/github' },
            { text: '命令速查', link: '/notes/git/cheatsheet' },
            { text: '连 GitHub', link: '/notes/git/connect' },
            { text: '初始化', link: '/notes/git/init' },
            { text: '同步', link: '/notes/git/sync' },
            { text: '分支', link: '/notes/git/branch' },
            { text: '日常', link: '/notes/git/daily' },
            { text: '撤销', link: '/notes/git/undo' },
            { text: 'JetBrains IDE', link: '/notes/git/ide' }
          ]
        },
        {
          text: '不常用',
          items: [
            { text: '改历史', link: '/notes/git/history' },
            { text: '排障', link: '/notes/git/troubleshoot' },
            { text: '工作区', link: '/notes/git/worktree' },
            { text: '其它', link: '/notes/git/other' }
          ]
        }
      ]
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/keythree/learning-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: 'Git 管本地版本，GitHub 负责托管与协作。',
      copyright: '学习笔记'
    }
  }
})
