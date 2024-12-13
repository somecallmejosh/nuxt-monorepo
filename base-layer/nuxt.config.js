export default defineNuxtConfig({
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],

  modules: ['@nuxt/ui'],
});