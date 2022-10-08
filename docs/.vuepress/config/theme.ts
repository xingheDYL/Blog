import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";


export default hopeTheme({
  hostname: "https://xingheblog.dyl.fit",

  author: {
    name: "DYL",
    url: "https://xinghe.dyl.fit",
  },

  // iconAssets: "iconfont",
  iconAssets: "//at.alicdn.com/t/c/font_3642624_zbbwe8jsq98.css",

  // 支持全屏
  fullscreen: true,

  logo: "/img/avatar.png",

  repo: "xingheDYL/Blog",
  docsDir: "docs",
  docsBranch: "master",

  // 导航栏
  navbar: navbar,
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Repo", "Outlook", "Search"],
  },

  // 侧边栏
  sidebar: sidebar,
  // sidebar: "heading",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    orange: "#fb9b5f",
  },

  // 自动切换颜色模式
  // darkmode: "auto",

  displayFooter: true,
  footer: '<a href="https://beian.miit.gov.cn" target="_blank"> 皖ICP备2021015742号</a>',
  copyright: "Copyright © 2022 DYL",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    timeline: "记录自己的点点滴滴",
    avatar: "/img/avatar.png",
    roundAvatar: true,
    description: "星河的博客",
    intro: "/views/about/",
    medias: {
      Email: "mailto:1329749225@qq.com",
      Gitee: "https://gitee.com/xinghedyl",
      GitHub: "https://github.com/xingheDYL",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1329749225&site=qq&menu=yes",
    },
  },

  // 加密文章
  encrypt: {
    config: {
      // "/views/guide/encrypt.html": ["123456"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: false,
      article: "/views/"
    },

    copyCode: { 
      showInMobile: true 
    },
    
    copyright: {
      global: true,
      author: "DYL",
      triggerWords: 50
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://blog-comment-jg6yct95f-xinghedyl.vercel.app/",

    },

    mdEnhance: {
      enableAll: false,
      // 支持上下角标
      sub: true,
      sup: true,
      // 支持任务列表
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      // 幻灯片
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      // 支持标记
      mark: true,
      // 支持自定义容器
      container: true,
      // 支持自定义对齐
      align: true,
    },
  },
});
