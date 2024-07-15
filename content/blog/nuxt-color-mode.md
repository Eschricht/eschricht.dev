---
title: 'Nuxt Color Mode'
description: '@eschricht/nuxt-color-mode - An alternative to @nuxtjs/color-mode'
date: '2024/07/14'
---

Nuxt has an awesome official module for handling color modes named `@nuxtjs/color-mode`.

It supports custom color modes as well as `'system'` color mode, which fetches the preferred system color scheme, which is fetched from the browser API. The selected color mode is persisted in the browsers local storage.

There are 2 main issues with this:

1. Fetching system color scheme from the Browser API means that server side rendered content won't match the client and may result in quick flashes or worse... hydration render mismatches (the server isn't aware of the client browser color scheme)
2. Local storage values isn't available on the server - again, that might cause a quick flash / hydration mismatches.

As much as I love the official module, those two are deal breakers for me. So I did some research...

## The `sec-ch-prefers-color-scheme` header

It turns out that there's an experimental request header called `sec-ch-prefers-color-scheme`. Basically, it requests the preferred system scheme from the client, if available. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme)

So I started to experiment with the header in a Nuxt project and it worked like a charm! At least in a Chromium desktop environment... But it's better than nothing!

That's when I decided to try to create my very own Nuxt Color Mode module.

## Introducing `@eschricht/nuxt-color-mode`

[My module](https://www.npmjs.com/package/@eschricht/nuxt-color-mode) utilizes the header mentioned above to pass the system color scheme from client to server and instead of storing the selected color mode in local storage, it is stored as a cookie (which is also passed to the server). The result is a more SSR friendly module!

It has a similar API as the official module (not 1:1 though) so it is quite easy to migrate.

Try it out!
`npx nuxi module add @eschricht/nuxt-color-mode`

## Caveats

As mentioned, the header is an experimental one and has currently limited browser support. Example: It won't work on Safari. The module fetches the system theme from the browser API as a fallback (which will cause similar issues as the official module).

So use with caution!
