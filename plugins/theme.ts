import { themes } from 'artivue'

export default defineNuxtPlugin(() => {
  const {
    setBaseTheme,
    theme: defaultTheme,
    isDark: isDarkTheme,
  } = useBaseTheme()
  const {
    'sec-ch-prefers-color-scheme': prefersColorScheme,
  } = useRequestHeaders(['Sec-Ch-Prefers-Color-Scheme'])
  const darkClassAttr = computed(() => isDarkTheme.value ? 'dark' : 'light')

  useHead({
    htmlAttrs: {
      class: darkClassAttr,
    },
  })

  const isDark = prefersColorScheme ? ref(prefersColorScheme === 'dark') : usePreferredDark()

  const customTheme = useTheme()

  if (customTheme.value === undefined)
    defaultTheme.value = isDark.value ? { ...themes.dark } : { ...themes.light }
  else
    setBaseTheme(customTheme.value)
})
