---
home: true
layout: Blog
icon: home
title: 博客主页
# 是否在首页文档列表中显示
article: false
# 是否在侧边栏显示
index: true
# 是否在时间轴里显示
timeline: false
# heroImage: /logo.svg
heroText: 星河的博客
heroFullScreen: true
# tagline: 你可以在这里放置你的口号与标语
projects:
  - icon: project
    name: 学生管理系统
    desc: SSM 技术搭建的学生管理系统(由于服务器比较小，暂未启动)
    link: https://studentmanage.xinghe.fit

  - icon: project
    name: 农产品销售管理系统
    desc: SSM 技术搭建的农产品销售管理系统
    link: https://ncpxs.xinghe.fit

  - icon: project
    name: 论坛项目
    desc: springboot + es 搭建的项目(由于服务器比较小，暂未启动)
    link: https://lt.xinghe.fit/

  - icon: project
    name: 用户中心项目
    desc: 项目详细描述
    link: https://user-center.xinghe.fit/

  - icon: project
    name: 若依管理系统项目
    desc: 若依系统搭建的项目(由于服务器比较小，暂未启动)
    link: https://ruoyi.xinghe.fit/

  - icon: project
    name: 人脸识别项目
    desc: 一个人脸识别的测试项目
    link: https://face.xinghe.fit/

  - icon: project
    name: 支教经历分享平台
    desc: 一个分享支教经历的测试项目
    link: https://zhijiao.xinghe.fit/

  - icon: project
    name: 项目支撑管理系统
    desc: 管理项目和人员的项目(由于服务器比较小，暂未启动)
    link: https://projectmanage.xinghe.fit/

  - icon: link
    name: 浏览器主页项目
    desc: Html + CSS + JavaScript 搭建的自定义浏览器主页项目
    link: https://search.xinghe.fit

  - icon: link
    name: 仿羊了个羊小游戏
    desc: 仿羊了个羊小游戏
    link: https://xyx.xinghe.fit

  - icon: link
    name: 敲木鱼
    desc: 在线敲木鱼
    link: https://muyu.xinghe.fit

  - icon: link
    name: 网盘挂载
    desc: 网盘挂载
    link: https://pan.xinghe.fit
# footer: <div style="color:#F08047">我的客栈已营业：<span id="htmer_time"></span></div>
---

<!-- <script setup lang="ts">
    // 运行时间统计
    function secondToDate(second) {
        if (!second) {
            return 0;
        }
        var time = new Array(0, 0, 0, 0, 0);
        if (second >= 365 * 24 * 3600) {
            time[0] = parseInt(second / (365 * 24 * 3600));
            second %= 365 * 24 * 3600;
        }
        if (second >= 24 * 3600) {
            time[1] = parseInt(second / (24 * 3600));
            second %= 24 * 3600;
        }
        if (second >= 3600) {
            time[2] = parseInt(second / 3600);
            second %= 3600;
        }
        if (second >= 60) {
            time[3] = parseInt(second / 60);
            second %= 60;
        }
        if (second > 0) {
            time[4] = second;
        }
        return time;
    }

    function setTime() {
        /*此处为网站的创建时间*/
        var create_time = Math.round(new Date(Date.UTC(2022, 1, 17, 22, 18, 33)).getTime() / 1000);
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        var currentTime = secondToDate((timestamp - create_time));
        var currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天' +
            currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] +
            '秒';
        document.getElementById("htmer_time").innerHTML = currentTimeHtml;
    }
    setInterval(setTime, 1000);
</script> -->