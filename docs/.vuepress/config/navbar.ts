import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/home",
  {
    text: "分类",
    icon: "category",
    link: "/category/",
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "关于我",
    icon: "people",
    link: "/views/about/",
  },
]);
