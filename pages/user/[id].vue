<template>
    <div>
        <h1>User Detail {{ id }}</h1>
        <button @click="navigateTo('/')">Go to Home</button>
    </div>
</template>

<script setup lang="ts">
const id = useRoute().params.id
</script>

<style scoped>

</style>