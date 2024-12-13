export default defineNuxtConfig({
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
});
