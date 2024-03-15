export function useUnlocalizedPath() {
  const route = useRoute()
  const { locale, defaultLocale } = useI18n()

  if (locale.value !== defaultLocale) {
    // Assuming the locale prefix is always at the start following the first slash
    return route.path.replace(`/${locale.value}`, '') as string
  }

  return route.path as string
}
