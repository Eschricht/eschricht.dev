---
title: 'Hello World'
description: 'This is a test of @nuxt/content'
date: '2024/02/27'
---

## Welcome to my blog!

:tada: **More specifically my first post!** :tada:

My name is Johannes Eschricht. I'm a software engineer living in southern Sweden.
This website / blog was created so that I can play around with [Nuxt](https://nuxt.com) and [@nuxt/content](https://content.nuxt.com/).

Yesterday I created an animated SVG signature, heavily inspired by the animated SVG logo crated by [Anthony Fu](https://antfu.me/posts/animated-svg-logo):
::MyLogo{class="max-w-sm my-8"}
::

I'm quite happy with it. In fact, so happy that I made it the official logo for this website!

I'm planning on adding a more personal touch to it later on. The current signature is more or less a copy paste from Anthony's blog post. You should definitely check out his other work if you're interested in web development!

The animation of the SVG signature is created by adding a long stroke above it as a mask. That stroke is animated by adding animations to stroke dashes(!), specifically the properties `stroke-dasharray` and `stroke-dashoffset`:

```css
@media (prefers-reduced-motion) {
  path {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@keyframes write {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 350px;
  }
  70% {
    stroke-dasharray: 350px 0;
  }
  /* Moving back */
  75% {
    stroke-dasharray: 350px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 350px;
  }
}

.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 350px 0;
  animation: write 10s ease forwards infinite;
  transform-origin: center;
  stroke: #fff;
  animation-delay: 0s;
  opacity: 1;
}
```

Anyway, thanks for reading this far!

For those of you who are interested in what tech stack is powering this website (at the time of writing this):

- [Nuxt](https://nuxt.com) - Vue framework
- [UnoCSS](https://unocss.dev) - CSS Engine, which by default has Tailwind-like utilities (and a lot more, check it out!)
- [Nuxt Content](https://content.nuxt.com/) - A Nuxt module to create content / pages by markdown files. This blog post is powered by this
- [Nuxt i18n](https://i18n.nuxtjs.org/) - A Nuxt module to handle internationalization
