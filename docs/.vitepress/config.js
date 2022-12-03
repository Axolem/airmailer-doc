export default {
  title: "Airmailer",
  description: "An awesome docs template built by me",
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
      { icon: "twitter", link: "" },
      { icon: "discord", link: "" },
    ],

    sidebar: {
      "/pages/": [
        {
          items: [
            {
              text: "Section A",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section B",
              collapsible: false,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section C",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
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
