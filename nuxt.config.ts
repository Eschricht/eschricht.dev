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
  ],

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
      langs: ['vue', 'javascript', 'typescript', 'md', 'json', 'css'],
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
})
