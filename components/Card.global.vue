<script setup lang="ts">
import type { Theme } from 'artivue'

const props = withDefaults(defineProps<{
  theme?: Theme
}>(), {
  theme: undefined,
})

const {
  className,
} = useThemeLayer(props.theme)
</script>

<template>
  <div :class="className" un-artivue="surface" un-border="~ artivue-surface-border" un-rounded="lg">
    <slot />
  </div>
</template>
