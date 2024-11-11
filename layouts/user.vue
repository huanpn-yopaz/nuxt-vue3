<template>
    <Header></Header>
    <div>
        <h1>Menu User Layout</h1>
        <NuxtLink to="/user">Users</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtPage />
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
</script>

<style scoped>
.router-link-exact-active {
    color: red
}
</style>