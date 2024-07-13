import { themes } from 'artivue'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    'nuxt-module-eslint-config',
    '@nuxtjs/fontaine',
    'nuxt-typed-router',
    '@nuxtjs/supabase',
    'floating-vue/nuxt',
    '@artivue/nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  site: {
    url: 'https://eschricht.dev',
    name: 'Eschricht.dev',
    description: 'By Johannes Eschricht',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 600,
      emojis: 'noto',
      renderer: 'satori',
      component: 'NuxtSeo',
      cacheMaxAgeSeconds: 60 * 60 * 24 * 3,
    },
  },

  artivue: {
    theme: themes.midnight,
  },

  supabase: {
    redirect: false,
  },

  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      langs: ['vue', 'javascript', 'typescript', 'md', 'json', 'css', 'ts', 'bash'],
    },
  },

  i18n: {
    locales: [{
      code: 'en',
      file: 'en-US.json',
    }, {
      code: 'sv',
      file: 'sv-SE.json',
    }],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
  },

  unocss: {
    // mode: 'vue-scoped',
  },

  eslintConfig: {
    setup: false,
  },

  css: [
    '@unocss/reset/tailwind.css',
    'floating-vue/dist/style.css',
    '~/assets/css/main.css',
    '~/assets/css/tooltip.css',
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  typescript: {
    strict: true,
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-07-13',
})
