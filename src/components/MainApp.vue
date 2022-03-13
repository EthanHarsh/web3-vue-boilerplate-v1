<template>
    <hello-metamask />
</template>

<script>
    import HelloMetamask from '@/components/HelloMetaMask.vue';
    export default {
        name: 'Main-App',
        components: {
            'hello-metamask': HelloMetamask
        }
    }
</script>

<style scoped>
</style>