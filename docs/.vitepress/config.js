export default {
  title: "Airmailer",
  description: "An awesome docs template built by me",
  lang: "en-UK",
  lastUpdated: true,
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
  ],
  themeConfig: {
    //logo: "/logo.svg",
    //siteTitle: "Adocs",
    nav: [
      { text: "Docs", link: "/pages/docs/" },
      { text: "Usage Examples", link: "/pages/examples/" },
      { text: "Github", link: "https://github.com/" },
      { text: "Home", link: "" },
      { text: "Login", link: "" },
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
