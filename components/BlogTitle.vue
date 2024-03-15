<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'N/A',

})
</script>

<template>
  <h2 un-text="4xl" un-font="bold" un-uppercase un-whitespace="nowrap">
    {{ title || 'N/A' }}
  </h2>
</template>
