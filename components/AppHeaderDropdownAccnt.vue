<script setup lang="ts">
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownDivider
} from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { ref } from 'vue';
const avatar = ref<string>('https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg')

</script>

<template>
  <CDropdown
    placement="bottom-end"
    variant="nav-item"
  >
    <CDropdownToggle
      class="py-0 pe-0"
      :caret="false"
    >
      <CAvatar
        :src="avatar"
        size="md"
      />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <!-- <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold mb-2 rounded-top"
      >
        Account
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-bell" /> Updates
        <CBadge
          color="info"
          class="ms-auto"
        >
          {{ itemsCount }}
        </CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-envelope-open" /> Messages
        <CBadge
          color="success"
          class="ms-auto"
        >
          {{ itemsCount }}
        </CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-task" /> Tasks
        <CBadge
          color="danger"
          class="ms-auto"
        >
          {{ itemsCount }}
        </CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-comment-square" /> Comments
        <CBadge
          color="warning"
          class="ms-auto"
        >
          {{ itemsCount }}
    </CBadge>
      </CDropdownItem> -->
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold my-2"
      >
      設定
      </CDropdownHeader>  
        <CDropdownItem>
            <CIcon icon="cil-user" />
            プロファイル
        </CDropdownItem>
      <!-- <CDropdownItem>
        <CIcon icon="cil-settings" /> Settings
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-dollar" /> Payments
        <CBadge
          color="secondary"
          class="ms-auto"
        >
          {{ itemsCount }}
        </CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-file" /> Projects
        <CBadge
          color="primary"
          class="ms-auto"
        >
          {{ itemsCount }}
        </CBadge>
      </CDropdownItem> -->
      <CDropdownDivider />
      <!-- <CDropdownItem>
        <CIcon icon="cil-shield-alt" /> Lock Account
      </CDropdownItem> -->
      <CDropdownItem class="cursor-pointer">
        <CIcon icon="cil-lock-locked" /> ログアウト
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>
<style scoped>
.text-decoration{
    text-decoration: none;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
