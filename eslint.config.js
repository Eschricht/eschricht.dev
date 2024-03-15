import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  unocss: true,
  vue: true,
  typescript: true,
  javascript: true,
  stylistic: true,
  yaml: true,
  markdown: true,
  formatters: true,
}, nuxt)
