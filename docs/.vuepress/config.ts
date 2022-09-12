import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import theme from "./config/theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { gitPlugin } from '@vuepress/plugin-git'
import { pwaPlugin } from "vuepress-plugin-pwa2";

export default defineUserConfig({
  alias: {
    "@NewFont": path.resolve(__dirname, "./components/NewFont.vue"),
    "@Clock": path.resolve(__dirname, "./components/Clock.vue"),
    "@Reward": path.resolve(__dirname, "./components/Reward.vue"),
    "@Footer": path.resolve(__dirname, "./components/Footer.vue"),
  },
  lang: "zh-CN",
  title: "小段要努力学习！",
  description: "一个以 vuepress-theme-hope 主题搭建的博客",

  base: "/",
  theme,
  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 你的选项
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      // 允许搜索 Frontmatter 中的 `tags`
      // getExtraFields: (page) => page.frontmatter.tags ?? [],

      // 设置最大搜索数
      maxSuggestions: 10,
    }),
    gitPlugin({
      // 配置项
      contributors: false
    }),
    pwaPlugin(),
  ],
});

