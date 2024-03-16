<script setup lang="ts">
const {
  isDark,
  theme,
} = useBaseTheme()

defineOgImage({
  width: 1200,
  height: 600,
  emojis: 'noto',
  renderer: 'satori',
  component: 'NuxtSeo',
  cacheMaxAgeSeconds: 60 * 60 * 24 * 3,
  props: {
    theme: theme.value.accentColor,
    colorMode: isDark.value ? 'dark' : 'light',
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
