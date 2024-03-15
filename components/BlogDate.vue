<script setup lang="ts">
const props = defineProps<{
  date: string
}>()

const formattedDate = useDateFormat(props.date, 'YYYY-MM-DD')
const timeAgo = useTimeAgo(formattedDate.value)
</script>

<template>
  <p v-tooltip="{ content: formattedDate, delay: 300 }" un-text="gray-500" un-inline="block">
    {{ timeAgo }}
  </p>
</template>
