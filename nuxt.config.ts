// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: ['@/plugins/antds'],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  nitro: {},
  postcss: {},
  vite: {},
  webpack: {},
  routeRules: {},
  typescript: {
    strict: true,
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'], // Only the files with extensions is .vue to components
      pathPrefix: false, // Not using path to name components
    },
  ],
})
