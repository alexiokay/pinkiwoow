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
        autoImports: ["defineStore", "acceptHMRUpdate", "useStore"],
      },
    ],
    "@intlify/nuxt3",
    "@nuxt/image-edge",
    "nuxt-lazy-hydrate",
    ["@funken-studio/sitemap-nuxt-3", { generateOnBuild: true }],
  ],

  sitemap: {
    hostname: "https://pinkiwoow.com",
    gzip: true,
  },

  build: {
    transpile: ["swiper", "@googlemaps/js-api-loader", "@headlessui/vue"],
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/portfolio"],
    },
  },

  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)

    "/**": { ssr: true },
    "/cart": { ssr: false },
    "/checkout": { ssr: false },
    "/public/images**": { swr: 7776000 },
    "/assets/**": { swr: 7776000 },
    "/_ipx/**": { swr: 7776000 },

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
          content: "PinkiWoow - Customized mugs, t-shirts, and more!",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "images/pinkiwoowLogo.ico" },
      ],
    },
  },

  css: ["@/assets/css/styles.css"],

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
    build: {
      cssCodeSplit: true,
    },
    optimizeDeps: {
      include: ["@googlemaps/js-api-loader"],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["per-container"].includes(tag),
    },
  },

  runtimeConfig: {
    public: {
      stripePrices: {
        test: "1",
      },
      cwd: process.cwd(),
      BASE_URL: process.env.BASE_URL,
      API_TOKEN: process.env.API_TOKEN,
      API_URL: process.env.API_URL,
      FETCH_HOST: process.env.FETCH_HOST,
    },
  },
});
