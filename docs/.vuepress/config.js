import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "首页",
  description: " ",
  lang: "zh-CN",
  port: 8081,
  dest: "public",

  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '开发必看',
        link: '/explain/',
      },
      {
        text: '加签流程',
        link: '/guide/',
      },
      {
        text: '功能',
        prefix: '/features/',
        children: [
          "free-login.md",
          "member.md",
          "point.md",
          "balance.md",
        ]
      },
      {
        text: '收银台',
        link: '/pay_station/',
      }
    ],
  }),
});
