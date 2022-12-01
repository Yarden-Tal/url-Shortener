// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  head: {
    titleTemplate: "%s - ASDF",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
};
