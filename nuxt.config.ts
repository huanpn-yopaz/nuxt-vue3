// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["@coreui/coreui/dist/css/coreui.min.css"],
  modules: ['@pinia/nuxt'],
  plugins: ["~/plugins/coreui.js"]
});
