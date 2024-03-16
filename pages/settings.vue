<script lang="ts" setup>
import { type BaseTheme, themes, useBaseTheme } from 'artivue'

const {
  theme: defaultTheme,
  isDark: isCurrentDark,
} = useBaseTheme()

const keys = ['surfaceColor', 'surfaceTextColor', 'accentColor', 'accentTextColor'] as const

const keyMap: Record<typeof keys[number], string> = {
  surfaceColor: 'Surface Color',
  surfaceTextColor: 'Surface Text Color',
  accentColor: 'Accent Color',
  accentTextColor: 'Accent Text Color',
}

const customTheme = useTheme()

const themeKeys = Object.keys(themes).filter(_theme => _theme !== 'DEFAULT') as Array<keyof typeof themes>

function onSelectingTheme(themeName: keyof typeof themes) {
  defaultTheme.value = { ...themes[themeName] }
}

watch(defaultTheme, (dt) => {
  customTheme.value = { ...dt }
})
</script>

<template>
  <div>
    <p>Theme Settings</p>

    <div un-inline="flex" un-flex="wrap" un-gap="4">
      <label v-for="key in keys" :key="key">
        <p un-text="xs">{{ keyMap[key] }}</p>
        <label un-artivue="input" un-p="x-2" un-inline="flex" un-items="center" un-gap="2" un-w="fit">
          <input v-model="defaultTheme[key]" un-h="1.5em" un-bg="transparent" type="color">
          <span un-text="artivue-text-alt-3 sm">{{ defaultTheme[key] }}</span>
        </label>
      </label>
    </div>

    <p un-text="sm" un-m="t-1">
      Is {{ isCurrentDark ? 'dark' : 'light' }}
    </p>

    <p un-text="xs" un-m="t-4 b-1">
      Presets
    </p>
    <div un-m="b-4" un-inline="flex" un-flex="wrap" un-gap="4">
      <button v-for="theme in themeKeys" :key="theme" un-artivue-button="~ solid" un-p="l-0" un-flex="~" un-overflow="hidden" un-gap="1em" @click="onSelectingTheme(theme)">
        <div un-h="full" un-border="r artivue-action">
          <div :style="{ background: themes[theme].surfaceColor }" un-p="2" un-w="2em" un-h="full">
            <div :style="{ background: themes[theme].accentColor }" un-h="2" un-rounded="md" />
          </div>
        </div>
        <div un-capitalize>
          {{ theme }}
        </div>
      </button>
    </div>

    <div un-m="y-8">
      <Card un-p="2" un-text="sm">
        <h2 un-text="2xl">
          Themes powered by Artivue
        </h2>
        <p un-m="b-4">
          Examples
        </p>
        <p un-m="b-1">
          Solid
        </p>
        <div un-inline="flex" un-gap="4" un-m="b-4">
          <button un-artivue="button button-solid">
            Normal
          </button>

          <button un-artivue="button button-solid button-accent">
            Accent
          </button>
        </div>

        <p un-m="b-1">
          Outlined
        </p>
        <div un-inline="flex" un-gap="4" un-m="b-4">
          <button un-artivue="button button-outline">
            Normal
          </button>

          <button un-artivue="button button-outline button-accent">
            Accent
          </button>
        </div>

        <p un-m="b-1">
          Text
        </p>
        <div un-inline="flex" un-gap="4" un-m="b-4">
          <button un-artivue="button button-text">
            Normal
          </button>

          <button un-artivue="button button-text button-accent">
            Accent
          </button>
        </div>

        <p un-m="b-1">
          Input
        </p>
        <div un-inline="flex" un-gap="4">
          <input un-artivue="input" un-p="l-2">
        </div>
      </Card>
    </div>
  </div>
</template>
