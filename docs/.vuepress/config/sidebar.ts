import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "使用案例",
    collapsable: true,
    icon: "guide",
    prefix: "/views/guide/",
    children: "structure",
  },
  {
    text: "算法",
    collapsable: true,
    icon: "algorithm",
    prefix: "/views/algorithm/",
    link: "/views/algorithm/",
    children: "structure",
  },
  {
    text: "面试",
    icon: "note",
    collapsable: true,
    prefix: "/views/interview/",
    link: "/views/interview/",
    children: "structure",
  },
  {
    text: "笔记",
    icon: "note2",
    collapsable: true,
    prefix: "/views/notes/",
    link: "/views/notes/",
    children: [
      {
        text: "MySQL",
        icon: "mysql",
        collapsable: true,
        prefix: "MySQL/",
        children: "structure",
      }
    ],
  },
]);
