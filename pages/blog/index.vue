<script setup lang="ts">
import type { MarkdownParsedContent, QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

interface BlogParsedContent extends MarkdownParsedContent {
  title: string
  date: string
  imgSrc?: string
}

const query: QueryBuilderParams = {
  path: '/blog',
  sort: [{ date: -1 }],
  where: [{ title: { $exists: true }, date: { $exists: true } }],
}

const localePath = useLocalePath()

const { data } = await useAsyncData('blog-entries', () => queryContent<BlogParsedContent>(query).find())
</script>

<template>
  <div>
    <ul v-if="data">
      <li v-for="item in data" :key="item._id" un-m="b-6">
        <NuxtLink :to="localePath(item._path ?? '')" un-inline="flex" un-items="center" un-gap="4">
          <img v-if="item.imgSrc" :src="item.imgSrc" un-transition un-duration="400" un-object-contain alt="blog-image" un-flex="shrink-0" un-rounded="md" un-w="120px" un-aspect="2/1">

          <div>
            <BlogTitle :title="item.title" />
            <BlogDate :date="item.date" />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
