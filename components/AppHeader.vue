<script setup>
import { onMounted, ref } from 'vue'
import { useColorModes } from '@coreui/vue'
import AppHeaderDropdownAccnt from '~/components/AppHeaderDropdownAccnt.vue'
import { useSidebarStore } from '@/stores/sidebar'
import { CHeader, CHeaderNav, CHeaderToggler } from "@coreui/vue/dist/esm/components/header/index.js";
import { CContainer } from "@coreui/vue/dist/esm/components/grid/index.js";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from "@coreui/vue/dist/esm/components/dropdown/index.js";
import CIcon from "@coreui/icons-vue";

const headerClassNames = ref('mb-4 p-0')
const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')
const sidebar = useSidebarStore()

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'mb-4 p-0'
    }
  })
})
</script>

<template>
  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <CHeaderToggler style="margin-inline-start: -14px" @click="sidebar.toggleVisible()">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderNav class="ms-auto">

      </CHeaderNav>
      <CHeaderNav>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CIcon v-if="colorMode === 'dark'" icon="cil-moon" size="lg" />
            <CIcon v-else-if="colorMode === 'light'" icon="cil-sun" size="lg" />
            <CIcon v-else icon="cil-contrast" size="lg" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem :active="colorMode === 'light'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('light')">
              <CIcon class="me-2" icon="cil-sun" size="lg" /> ライトモード
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'dark'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('dark')">
              <CIcon class="me-2" icon="cil-moon" size="lg" /> ダークモード
            </CDropdownItem>
            <CDropdownItem :active="colorMode === 'auto'" class="d-flex align-items-center" component="button"
              type="button" @click="setColorMode('auto')">
              <CIcon class="me-2" icon="cil-contrast" size="lg" /> 自動変更
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75" />
        </li>
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
    </CContainer>
    <CContainer class="px-4" fluid>
    </CContainer>
  </CHeader>
</template>
<style>
.wrapper {
  padding-left: var(--cui-sidebar-occupy-start, 0);
}
</style>