<script setup lang="ts">
import type { BaseTheme, themes } from 'artivue'

const props = withDefaults(defineProps<{
  theme?: BaseTheme
}>(), {
  theme: undefined,
})

const {
  className,
} = useThemeLayer(1, props.theme)
</script>

<template>
  <div :class="className" un-artivue="surface-var" un-border="~ artivue-border" un-rounded="lg">
    <slot />
  </div>
</template>
