<script setup>
import {useSidebarStore} from '~/stores/sidebar'
import {
    CSidebarHeader,
    CSidebarBrand,
    CSidebarFooter,
    CSidebarToggler,
    CSidebar,
    CCloseButton
} from '@coreui/vue'
import {CNavItem, CNavTitle} from "@coreui/vue/dist/esm/components/nav/index.js";
import {CSidebarNav} from "@coreui/vue/dist/esm/components/sidebar/index.js";
// import {CBadge} from "@coreui/vue/dist/esm/components/badge/index.js";

const sidebar = useSidebarStore()
</script>

<template>
    <CSidebar
        class="border-end"
        color-scheme="dark"
        position="fixed"
        :unfoldable="sidebar.unfoldable"
        :visible="sidebar.visible"
        @visible-change="(value) => sidebar.toggleVisible(value)"
    >
        <CSidebarHeader class="border-bottom justify-content-center">
            <CSidebarBrand
                v-bind="$attrs"
                as="a"
                href="/"
            >
                <img src="" alt="" height="50" width="50">
            </CSidebarBrand>
            <CCloseButton
                class="d-lg-none"
                dark
                @click="sidebar.toggleVisible()"
            />
        </CSidebarHeader>
        <CSidebarNav>
            <CNavTitle>管理者メニュー</CNavTitle>
            <CNavItem>
                <span
                   
                    class="nav-link active"
                    >
                    <i class="nav-icon"></i>
                    menu.label</span>
            </CNavItem>
        </CSidebarNav>
        <CSidebarFooter class="border-top d-none d-lg-flex">
            <CSidebarToggler @click="sidebar.toggleUnfoldable()"/>
        </CSidebarFooter>
    </CSidebar>
</template>
