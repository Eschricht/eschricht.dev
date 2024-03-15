import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { animatedUno } from 'animated-unocss'
import { presetArtivue } from '@artivue/unocss'
import extractorMdc from '@unocss/extractor-mdc'

export default defineConfig<Theme>({
  content: {
    filesystem: [
      'content/**/*.md',
    ],
  },

  extractors: [
    extractorMdc(),
  ],

  presets: [
    presetUno(),
    presetIcons({
      collections: {
        nortic: {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.827 158.827"><path fill="currentColor" d="M98.373 8.764c-5.724 0-11.447 1.073-16.098 2.146-3.577.716-8.585 2.862-11.447 3.578-3.577 2.146-6.439 2.861-8.227 5.008v-4.293c0-1.789-2.147-3.577-5.008-3.577H4.65C1.79 11.626 0 13.414 0 15.203v32.195c3.577 0 7.512 3.577 7.512 7.512v48.292c.218 4.235-3.276 7.73-7.512 7.512v35.414c0 1.789 1.789 3.577 4.65 3.577h54.016c2.862 0 4.65-1.788 4.65-3.577V65.284c0-8.586 7.512-15.382 17.17-15.382 8.586 0 16.098 6.796 16.098 14.308v82.276c0 1.788 1.789 3.577 4.65 3.577h52.943c2.861 0 4.65-1.789 4.65-3.577V67.788c0-20.033-5.008-34.699-15.74-45.43A77.625 77.625 0 0 0 98.373 9.121Z" /></svg>',
        },
      },
    }),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetTypography({
      cssExtend: () => ({
        'pre,code': {
          background: 'rgba(var(--artivue-surface-dark), 1)',
          color: 'rgba(var(--artivue-text-alt-1), 1)',
        },
        'code': {
          'padding': '0.25rem',
          'border-radius': '0.25rem',
        },
        'pre code': {
          padding: '0',
          background: 'none',
        },
        'pre': {
          padding: '0.8rem 1.2rem',
        },
        'code::before,code::after': {
          display: 'none',
        },
        'a': {
          'color': 'rgba(var(--artivue-accent))',
          'text-decoration': 'underline',
        },

        'h1 a, h2 a, h3 a, h4 a, h5 a': {
          'color': 'inherit',
          'text-decoration': 'none',
        },

        'h1::before, h2::before, h3::before, h4::before, h5::before': {
          'content': '""',
          'display': 'block',
          'height': '4em',
          'margin-top': '-4em',
          'visibility': 'hidden',
        },

        'h1 a::before, h2 a::before, h3 a::before, h4 a::before, h5 a::before': {
          'content': '"\\00a0 "',
          'float': 'left',
          'margin-left': '-1.2em',
          'padding-right': '0.2em',
          'width': '1.2em',
        },

        'h1 a:hover::before, h2 a:hover::before, h3 a:hover::before, h4 a:hover::before, h5 a:hover::before': {
          'content': '"#"',
          'float': 'left',
          'margin-left': '-1.2em',
        },
      }),
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: [{
          name: 'Montserrat',
          weights: [200, 300, 400, 600, 700, 900],
        }, {
          name: 'Montserrat',
          italic: true,
          weights: [200, 300, 400, 600, 700, 900],
        }, 'Montserrat fallback', 'Montserrat override'],
      },
    }),
    animatedUno(),
    presetArtivue(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],

  theme: {
    colors: {
      surface: '#030303',
    },
  },

  shortcuts: [
    ['input', 'pl-2 bg-dark-900 py-1 text-white rounded-md border border-dark-300'],
    ['btn', 'bg-teal-500 text-white px-4 py-1 font-bold border border-teal-500 rounded-md hover:bg-teal-600'],
  ],

})
