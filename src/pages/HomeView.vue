<template>
    <h2>我是HomeView的頁面</h2>
    <button @click="navToAbout">導去關於頁面</button>
    {{ $store.state.count }}
    {{ $store.getters.doubleCount }}
</template>

<script>
export default {
    created() {
        console.log('this.$route', this.$route)
        console.log('this.$router', this.$router)
    },
    beforeRouteLeave() {
        console.log('我是beforeRouteLeave')
    },
    methods: {
        navToAbout() {
            this.$router.push({ name: 'about' })
        }
    }
}
</script>

<style scoped></style>