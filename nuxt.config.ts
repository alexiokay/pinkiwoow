import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";
import { IntlifyModuleOptions } from "@intlify/nuxt3";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@intlify/nuxt3",
    "@nuxt/image-edge",
  ],

  build: {
    transpile: ["swiper", "@googlemaps/js-api-loader", "@headlessui/vue"],
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/portfolio"],
    },
  },

  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)

    "/**": { ssr: true },
    "/cart": { ssr: false },
    // Static page generated on-demand once (SSG - or at least mighty close) { static: true },

    // Render these routes on the client (SPA) { ssr: false },
  },
  intlify: {
    localeDir: "locales",
    vueI18n: {
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "id", "ja", "ko", "pl", "de", "zh"],
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "PinkiWoow - Extra Custooms, Giga Fun",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          hid: `description`,
          name: "description",
          content: "PinkiWoow - Upgrade your strawberry business with us",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "images/pinkiwoow.ico" },
      ],
    },
  },

  buildModules: ["@pinia/nuxt"],

  css: ["@/assets/css/styles.css"],

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },

  runtimeConfig: {
    public: {
      stripePrices: {
        strawtote: "1",
        strawbox: "2",
        strawshop: "1",
        strawstore: "1",
      },
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      cwd: process.cwd(),
      BASE_URL: process.env.BASE_URL,
      STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
    },
  },
});
