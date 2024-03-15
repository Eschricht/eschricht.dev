<script setup lang="ts">
const route = useUnlocalizedPath()
const localePath = useLocalePath()
</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }" :path="route">
      <NuxtLink :to="localePath('/blog')" un-inline="flex" un-items="center" class="group" un-gap="1" un-m="b-6">
        <span un-inline="block" un-i="carbon-chevron-left" un--translate="group-hover:(x-1)" un-scale="group-hover:140" un="transition-transform" un-duration="200" /> <span>Go back</span>
      </NuxtLink>

      <div>
        <div un-max-w="prose" un-m="x-auto b-4" un-inline="block">
          <BlogTitle v-if="doc.title" :title="doc.title" />
          <BlogDate v-if="doc.date" :date="doc.date" />
        </div>
      </div>

      <img v-if="doc.imgSrc" un-rounded="xl" un-transition un-duration="400" class="el-img" un-object-contain :src="doc.imgSrc" alt="blog-image" un-w="400px" un-aspect="2/1">

      <ContentRenderer :value="doc" un-prose="~" un-m="x-auto" tag="article" />
    </ContentDoc>
  </div>
</template>
