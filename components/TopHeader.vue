<script lang="ts" setup>
const localeRoute = useLocaleRoute()
const { className } = useThemeLayer(1)

const navRoutes = [{
  name: 'Blog',
  path: localeRoute('/blog'),
}, {
  name: 'Settings',
  path: localeRoute('/settings'),
}]
</script>

<template>
  <header :class="className" un-fixed un-z="30" un-inset="t-0 x-0" un-text="artivue-text-alt-3" un-bg="artivue-surface-bg/95" un-backdrop-blur="6" un-border="b artivue-surface-border" un-flex un-items="center" un-justify="between" un-h="12 md:16">
    <div un-flex un-items="center" un-p="x4" un-h="full">
      <NuxtLink :to="localeRoute('/')" un-text="artivue-text" un-transition="colors" un-duration="300">
        <MyLogo un-w="24 md:36" />
      </NuxtLink>
    </div>

    <div un-p="x4" un-flex un-items="center" un-gap="4 md:8">
      <NuxtLink v-for="route in navRoutes" :key="route.path" un-font="600 md:900" un-whitespace="nowrap" un-tracking="widest" un-uppercase un-text="base md:4xl artivue-text-alt-2 hover:artivue-text-alt-1" :to="route.path" active-class="text-artivue-text! text-glow" un-transition="[text-shadow,color,background-color]" un-duration="300">
        {{ route.name }}
      </NuxtLink>
    </div>
  </header>
</template>

<style>
.text-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.7);
}
</style>
