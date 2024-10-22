import Aura from '@primevue/themes/aura';
import {definePreset} from "@primeuix/styled";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  modules: [
    '@primevue/nuxt-module'
  ],

  css: [
    './assets/styles/global.css',
  ],

  primevue: {
    options: {
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '{indigo.50}',
              100: '{indigo.100}',
              200: '{indigo.200}',
              300: '{indigo.300}',
              400: '{indigo.400}',
              500: '{indigo.500}',
              600: '{indigo.600}',
              700: '{indigo.700}',
              800: '{indigo.800}',
              900: '{indigo.900}',
              950: '{indigo.950}'
            },
            formField: {
              paddingX: '1rem',
              paddingY: '1rem',
            },
            myButton: {
              paddingX: '2rem',
              paddingY: '1rem',
            },
            colorSchema: {
              light: {
                formField: {
                  hoverBorderColor: '{primary.color}',
                }
              },
              dark: {
                formField: {
                  hoverHoverColor: '{primary.color}',
                },
                surface: {
                  50: '{red.50}',
                  100: '{red.100}',
                  200: '{red.200}',
                  300: '{red.300}',
                  400: '{red.400}',
                  500: '{red.500}',
                  600: '{red.600}',
                  700: '{red.700}',
                  800: '{red.800}',
                  900: '{red.900}',
                  950: '{red.950}'
                }
              }
            },
          },
          components: {
            button: {
              paddingX: '{my.button.padding.x}',
              paddingY: '{my.button.padding.y}'
            }
          }
        }),
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    }
  }
})
