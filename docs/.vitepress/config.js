import { defineConfig } from "vite";

export default defineConfig({
  title: "Airmailer",
  description: "An awesome docs template built by me",
  lang: "en-UK",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn-newg.sirv.com/airmailer/dash/vite.svg",
      },
    ],
    [
      "meta",
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
    ["meta", { name: "theme-color", content: "#3c8772" }],
    [
      "script",
      {
        async: "async",
        src: "/scripts/faq.js",
        type: "application/javascript",
      },
    ],
    [
      "script",
      {
        async: "async",
        src: "/scripts/feedback.js",
        type: "application/javascript",
      },
    ],
  ],
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    //logo: "/logo.svg",
    siteTitle: "Airmailer",
    nav: [
      { text: "Docs", link: "/pages/docs/" },
      { text: "Github", link: "https://github.com/" },
      { text: "Login", link: "https://app.airmailer.co.za" },
    ],
    socialLinks: [
      { icon: "youtube", link: "" },
      { icon: "discord", link: "https://discord.gg/FYCFCT6Y" },
    ],
    editLink: {
      pattern: "https://github.com/Axolem/airmailer-doc/blob/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: {
      "/pages/": [
        {
          text: "Getting Started",
          collapsible: true,
          items: [
            {
              text: "Introduction",
              link: "/pages/docs/#how-does-airmailer-work",
            },
            { text: "Creating an app", link: "/pages/docs/create-app.md" },
            {
              text: "Creating a template",
              link: "/pages/docs/create-template.md",
            },
          ],
        },
        {
          text: "SDK",
          collapsible: false,
          items: [
            { text: "Installation", link: "/pages/docs/sdk/#installation" },
            {
              text: "Usage Example",
              link: "/pages/docs/sdk/usage/",
            },
          ],
        },
        {
          text: "API End-points",
          collapsible: true,
          items: [
            {
              text: "Send Email",
              link: "/pages/docs/api-end-points/#end-points",
            },
            {
              text: "Get last email",
              link: "/pages/docs/api-end-points/last-email/",
            },
            {
              text: "Verify Email",
              link: "/pages/docs/api-end-points/verify/",
            },
          ],
        },
        {
          text: "User Guides",
          collapsible: true,
          items: [
            {
              text: "Send Email",
              link: "/pages/docs/user-guides/send/",
            },
            {
              text: "Verify Email",
              link: "/pages/docs/user-guides/verify/",
            },
          ],
        },
      ],
    },
    footer: {
      message: "",
      copyright: `Copyright © ${new Date().getFullYear()} Airmailer`,
    },
    algolia: {
      appId: "PO2B8R09PI",
      apiKey: "ac8b3f64dbef671748b559a4b1d37d1c",
      indexName: "airmailer-co",
    },
  },
});
