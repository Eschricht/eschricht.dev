---
title: 'Artivue'
description: 'Artivue'
date: '2024/03/14'
imgSrc: 'https://artivue.eschricht.dev/og-image.png'
---

# Introducing Artivue!

I just released an early draft of a Vue plugin named [artivue](https://artivue.eschricht.dev)!
The plugin aims to help you effortlessly create beautiful themes to your Vue / Nuxt applications.

Artivue is actually used on this very website with the `@artivue/nuxt` module. Have a look at the [settings](/settings) page and change the look and feel of this webpage!

## Why?

When starting new projects, creating themes and optimizing colors and CSS can be fun... The first 2 times.

We use [linear](https://linear.app/) for issue tracking at work and I got curious about the dynamic themes in the user preferences of the application. I only needed to change 6 color variables (bg / text, sidebar bg / text, accent bg / text) and the entire application adapts based on those 6 variables, such as input fields, card elements etc.

I think their "theming engine" is powered by [Styled Components](https://styled-components.com/) or similar for React (not 100% sure, I just did a quick investigation in the dev tools). I have previously worked with Styled Components and it is indeed a powerful tool but still requires quite a lot of CSS-tinkering from the developers. But I went ahead to see if Vue had anything similar and yes, [it does](https://github.com/styled-components/vue-styled-components) but it's not actively maintained (4 years ago) - so that was a no-go for me.

That's when I decided to create something myself.

## How?

The plugin accepts 4 color variables (surface bg / text and accent bg / text). From that configuration, Artivue creates tints and shades with the aid of [colord](https://colord.omgovich.ru/) and outputs a bunch of variables which is converted to a string of CSS variables within a CSS class.
The CSS is injected to the application by [unhead](https://unhead.unjs.io/).

The injected CSS variables can be used to your own liking but I also created a [UnoCSS preset](https://artivue.eschricht.dev/integrations/unocss.html) which omits a lot of custom CSS tinkering.

But it doesn't stop there. The CSS variables is used for your base style of the application. But most often we also want to create layers (or nuances) of the base style such as card elements, headers, side bars, etc. Otherwise we end up with a very flat application.

To solve this, the plugin is provided with a composable to add layers named `useThemeLayer`. The composable (optionally) accepts a multiplier for the layer where default is set to 1.

Usage:

```ts
const {
  // This has to be placed on the element where the theme should start overriding
  className,
  // A computed which tells if the theme is dark or not
  isDark,
  // A computed containing the generated theme config
  theme,
  // The generated full theme configuration
  generatedTheme
} = useThemeLayer()
```

Example - the `Card` component below uses `useThemeLayer()`:

```vue
<template>
  <Card>
    <Card>
      <Card>
        <Card>
          Hello
        </Card>
      </Card>
    </Card>
  </Card>
</template>
```

Becomes:

::Card{ class="p-4" }
:::Card{ class="p-4" }
::::Card{ class="p-4" }
:::::Card{ class="px-4" }
Hello
:::::
::::
:::
::

Not only that, it is also possible to completely override the base theme! To do this, we simply pass a theme as the second argument.
In the example below, the theme config passed to the `Card` component is passed to the composable - `useThemeLayer(props.theme)`

```vue
<template>
  <Card
    :theme="{
      accent: { background: '#2b6be3', text: '#fff' },
      surface: { background: '#2c5963', text: '#fff' },
    }"
  >
    <Card>
      <Card
        :theme="{
          accent: { background: '#2b6be3', text: '#fff' },
          surface: { background: '#3e2b46', text: '#fff' },
        }"
      >
        <Card> Hello </Card>
      </Card>
    </Card>
  </Card>
</template>
```

::Card{ class="p-4" :theme='{ "accent": { "background": "#2b6be3", "text": "#fff" }, "surface": { "background": "#2c5963", "text": "#fff" } }' }
:::Card{ class="p-4" }
::::Card{ class="p-4" :theme='{ "accent": { "background": "#2b6be3", "text": "#fff" }, "surface": { "background": "#3e2b46", "text": "#fff" } }' }
:::::Card{ class="px-4" }
Hello
:::::
::::
:::
::

This can be useful when you want a different tone on a part of your page such as side menus, toasts etc.

There is also a wrapper component, `ThemeLayer`, that wraps this composable and passes the returned values as slot props:

```vue
<template>
  <ThemeLayer v-slot="{ className, isDark }">
    <div :class="className">
      The theme is {{ isDark ? 'dark' : 'light' }}
      <div />
    </div>
  </ThemeLayer>
</template>
```

By default, this component add any DOM elements but it's also possible to let it render an element or component by the `is` prop. This will place `className` on the element for you:

```vue
<template>
  <ThemeLayer is="div" v-slot="{ isDark }">
    The theme is {{ isDark ? 'dark' : 'light' }}
  </ThemeLayer>
</template>
```

The cherry on the top is the `useBaseTheme` composable. This composable lets you change the theme whenever you need to - such as when a user clicks a dark-mode switcher.

```typescript
const {
  // A function to change the base theme config
  setBaseTheme
  // A computed which tells if the current base theme is dark or not
  isDark
  // A ref containing the base theme configuration
  theme
  // The generated full theme configuration
  generatedTheme
} = useBaseTheme()

function toggleDark() {
  setBaseTheme(isDark.value ? theme.light : theme.dark)
}
```

## Final words

As I mentioned in the beginning of this post - this is an early draft and breaking changes will probably occur in the coming months.
If you find any issues with it or have suggestions, I would really appreciate if you would take the time and [report it](https://github.com/Eschricht/artivue/issues)

Read the [docs](https://artivue.eschricht.dev) if you want to know more!

Installation instructions:

```bash
# Vue plugin
pnpm add artivue

# UnoCSS preset
pnpm add -D @artivue/unocss

# Nuxt Module
pnpm add artivue @artivue/nuxt
```
