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
    children: [
      {
        text: "Java",
        icon: "java",
        collapsable: true,
        prefix: "Java/",
        link: "/views/interview/java/",
        children: [
          {
            text: "并发编程",
            collapsable: true,
            prefix: "并发编程/",
            children: "structure",
          },
          {
            text: "基础",
            collapsable: true,
            prefix: "基础/",
            children: "structure",
          },
          {
            text: "集合",
            collapsable: true,
            prefix: "集合/",
            children: "structure",
          },
          {
            text: "新特性",
            collapsable: true,
            prefix: "新特性/",
            children: "structure",
          },
          {
            text: "IO",
            collapsable: true,
            prefix: "IO/",
            children: "structure",
          },
          {
            text: "JVM",
            collapsable: true,
            prefix: "JVM/",
            children: "structure",
          }
        ],
      },
      {
        text: "常用框架",
        icon: "iframe",
        collapsable: true,
        prefix: "framework/",
        // link: "/views/interview/framework/",
        children: "structure"
      },
      {
        text: "计算机基础",
        icon: "computer",
        collapsable: true,
        prefix: "CS-basic/",
        // link: "/views/interview/CS-basic/",
        children: [
          {
            text: "操作系统",
            icon: "caozuoxitong",
            collapsable: true,
            prefix: "opearting-system/",
            children: "structure"
          },
          {
            text: "计算机网络",
            icon: "wangluo",
            collapsable: true,
            prefix: "network/",
            children: [
              "计算机网络",
              {
                text: "重要知识点",
                icon: "star",
                collapsable: true,
                prefix: "重要知识点/",
                children: "structure"
              }
            ]
          },
        ]
      }
    ],
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
        children: "structure"
      },
      {
        text: "Spring",
        icon: "spring",
        collapsable: true,
        prefix: "Spring/",
        children: "structure"
      },
      {
        text: "MyBatis-Plus",
        icon: "mybatisplus",
        collapsable: true,
        prefix: "MyBatis-Plus/",
        children: "structure"
      },
      {
        text: "项目",
        icon: "project",
        collapsable: true,
        prefix: "Project/",
        children: "structure"
      },
      {
        text: "Elasticsearch",
        icon: "elasticsearch",
        collapsable: true,
        prefix: "Elasticsearch/",
        children: "structure"
      },
    ],
  },
]);
