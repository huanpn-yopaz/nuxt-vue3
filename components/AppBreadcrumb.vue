<script setup>
import { ref } from 'vue'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/vue';
import { route } from "ziggy-js"
import { router } from "@inertiajs/vue3";
const breadcrumbs = ref([]);
const routeName = route().current();
switch (routeName) {
    case 'admin.dashboard':
        breadcrumbs.value = [
            { name: 'ダッシュボード', path: '/admin/dashboard', active: true },
        ];
        break;
    case 'admin.account-admin.index':
        breadcrumbs.value = [
            { name: '管理者一覧', path: '/admin/account-admin', active: true },
            // { name: 'List', path: '/admin/account-admin', active: true },
        ];
        break;
    case 'admin.account-admin.create':
        breadcrumbs.value = [
            { name: '管理者登録', path: '/admin/account-admin', active: true },
            // { name: 'Create', path: '/admin/account-admin/create', active: true },
        ];
        break;
    case 'admin.account-admin.edit':
        breadcrumbs.value = [
            { name: '管理者編集', path: '/admin/account-admin', active: true },
            // { name: `Edit`, active: true },
        ];
        break;
    case 'admin.user.index':
        breadcrumbs.value = [
            { name: 'ユーザー一覧', path: '/admin/user', active: true },
            // { name: 'List', path: '/admin/user', active: true },
        ];
        break;
    case 'admin.user.create':
        breadcrumbs.value = [
            { name: 'ユーザー新規登録', path: '/admin/user', active: true },
            // { name: 'Create', path: '/admin/user/create', active: true },
        ];
        break;
    case 'admin.user.edit':
        breadcrumbs.value = [
            { name: 'ユーザー編集', path: '/admin/user', active: true },
            // { name: `Edit`, active: true },
        ];
        break;
    case 'admin.fish.index':
        breadcrumbs.value = [
            { name: '魚類一覧', path: '/admin/fish', active: true },
            // { name: 'List', path: '/admin/fish', active: true },
        ];
        break;
    case 'admin.fish.create':
        breadcrumbs.value = [
            { name: '魚類登録', path: '/admin/fish', active: true },
            // { name: 'Create', path: '/admin/fish/create', active: true },
        ];
        break;
    case 'admin.fish.edit':
        breadcrumbs.value = [
            { name: '魚類編集', path: '/admin/fish', active: true },
            // { name: `Edit`, active: true },
        ];
        break;
    case 'admin.fishing-point.index':
        breadcrumbs.value = [
            { name: '釣りポイント一覧', path: '/admin/fishing-point', active: true },
            // { name: 'List', path: '/admin/fishing-point', active: true },
        ];
        break;
    case 'admin.fishing-point.create':
        breadcrumbs.value = [
            { name: '釣りポイント登録', path: '/admin/fishing-point', active: true },
            // { name: 'Create', path: '/admin/fishing-point/create', active: true },
        ];
        break;
    case 'admin.fishing-point.edit':
        breadcrumbs.value = [
            { name: '釣りポイント編集', path: '/admin/fishing-point', active: true },
            // { name: `Edit`, active: true },
        ];
        break;
    case 'admin.fishing-point.map':
        breadcrumbs.value = [
            { name: 'Map Fishing Point', path: '/admin/fishing-point', active: true },
            // { name: `Edit`, active: true },
        ];
        break
    case 'admin.voyage.index':
        breadcrumbs.value = [
            { name: 'voyage list', path: '/admin/voyage', active: true },
            // { name: 'List', path: '/admin/voyage', active: true },
        ];
        break;
    case 'admin.voyage.show':
        breadcrumbs.value = [
            { name: 'history voyage show', path: '/admin/voyage', active: true },
            // { name: `Edit`, active: true },
        ];
        break;
    case 'admin.voyage.create':
        breadcrumbs.value = [
            { name: 'voyage create', path: '/admin/voyage', active: true },
            // { name: 'Create', path: '/admin/voyage/create', active: true },
        ];
        break;
    case 'admin.voyage.edit':
        breadcrumbs.value = [
            { name: 'voyage edit', path: '/admin/voyage', active: true },
            // { name: `Edit`, active: true },
        ];
        break;
    default:
        breadcrumbs.value = [
            { name: 'Home', path: '/', active: true }
        ];
}
</script>

<template>
  <CBreadcrumb class="my-0">
    <CBreadcrumbItem
      v-for="item in breadcrumbs"
      :key="item.path"
      :href="item.active ? '' : item.path"
      :active="item.active"
      @click.prevent="!item.active && item.path && router.get(item.path)"
    >
      {{ item.name }}
    </CBreadcrumbItem>
  </CBreadcrumb>
</template>
