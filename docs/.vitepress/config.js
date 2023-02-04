export default {
  title: "Airmailer",
  description: "An awesome docs template built by me",
  lang: "en-UK",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  editLink: {
    pattern: "https://github.com/Axolem/airmailer-doc/edit/main/docs/:path",
    text: "Edit this page on GitHub",
  },
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
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
      }
    ],
    [
      "meta",
      { name: "theme-color", content: "#3c8772" },
    ],
    [
      "script",
      {
        async: "async",
        src: "/scripts/faq.js",
        type: "application/javascript"
      }
    ],
    [
      "script",
      {
        async: "async",
        src: "/scripts/feedback.js",
        type: "application/javascript"
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
      { text: "Login", link: "https://airmailer.vercel.app/" },
    ],
    socialLinks: [
      { icon: "youtube", link: "" },
      { icon: "discord", link: "https://discord.gg/FYCFCT6Y" },
    ],

    sidebar: {
      "/pages/": [
        {
          items: [
            {
              text: "Getting Started",
              collapsible: true,
              items: [
                {
                  text: "Introduction",
                  items: [
                    { text: "#features", link: "/pages/docs/#features" },
                    { text: "#pricing", link: "/pages/docs/#pricing" },
                  ],
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
                  text: "Sending a simple email",
                  link: "/pages/docs/sdk/#sending-a-simple-email",
                },
                {
                  text: "Sending a custom email",
                  link: "/pages/docs/sdk/#sending-a-custom-email",
                },
              ],
            },
            {
              text: "API End-points",
              collapsible: true,
              items: [
                {
                  text: "End-points",
                  link: "/pages/docs/api-end-points/#end-points",
                },
                {
                  text: "Sending a simple email",
                  link: "/pages/docs/api-end-points/#sending-a-simple-email",
                },
                {
                  text: "Sending a custom email",
                  link: "/pages/docs/api-end-points/#sending-a-custom-email",
                },
              ],
            },
            {
              text: "User Guides",
              collapsible: true,
              items: [
                {
                  text: "Email Header",
                  link: "/pages/docs/user-guides/#email-header",
                },
                {
                  text: "Email body",
                  link: "/pages/docs/user-guides/#email-body",
                },
                {
                  text: "Responses",
                  link: "/pages/docs/user-guides/#responses",
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      message: "",
      copyright: `Copyright © ${new Date().getFullYear()} Airmailer`,
    },
  },
};
