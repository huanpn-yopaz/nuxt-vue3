<template>
    <Header></Header>
    <div>
        <h1>Menu</h1>
        <NuxtLink :to="`/user/${id}`">Users</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
        <nuxt-link to="user">User</nuxt-link>
        <NuxtPage />
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
const id = ref(12)
</script>

<style scoped>
.router-link-exact-active {
    color: red
}
</style>