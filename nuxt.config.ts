// https://nuxt.com/docs/api/configuration/nuxt-config
// import * as AntD from 'ant-design-vue'
// import { addComponent } from '@nuxt/kit'

export default defineNuxtConfig({
  plugins: ['@/plugins/antds'],
  // modules: [
  //     async function (options, nuxt) {
  //         for (const key in AntD) {
  //             if (['version', 'install'].includes(key)) continue
  //             await addComponent({
  //                 filePath: 'ant-design-vue',
  //                 name: `A${key}`,
  //                 export: key
  //             })
  //         }
  //     },
  // ]
})
