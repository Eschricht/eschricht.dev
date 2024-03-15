import type { plugin } from 'artivue'

export type ArtivueOptions = NonNullable<Parameters<NonNullable<typeof plugin['install']>>[1]>

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    artivue: ArtivueOptions
  }
}

export {}
