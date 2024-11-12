import { defineNuxtPlugin } from '#app'
import CoreUI from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'  // Import CIcon từ @coreui/icons-vue
import * as icons from '@coreui/icons' // Import toàn bộ biểu tượng từ @coreui/icons

export default defineNuxtPlugin((nuxtApp) => {
  // Sử dụng CoreUI như một plugin
  nuxtApp.vueApp.use(CoreUI)

  // Đăng ký CIcon component toàn cục từ @coreui/icons-vue
  nuxtApp.vueApp.component('CIcon', CIcon)

  // Cung cấp các biểu tượng để sử dụng trong component
  nuxtApp.vueApp.provide('icons', icons)
  nuxtApp.vueApp.config.globalProperties.$icons = icons
})
