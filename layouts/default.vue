<script setup lang="ts">
import { CContainer } from '@coreui/vue'
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppSidebar from '~/components/AppSidebar.vue'

</script>

<template>
  <App>
    <div>
      <AppSidebar />
      <div class="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div class="body flex-grow-1">
          <CContainer
              :fluid="true"
          >
            <NuxtPage />
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  </App>
</template>
