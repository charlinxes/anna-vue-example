<template>
    <h2>我是AboutView的頁面</h2>
    <button @click="navToIntroduce">導去作者關於頁面</button>
    <router-view></router-view>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log('我是關於頁面的beforeRouteEnter')
        next()
    },
    methods: {
        navToIntroduce() {
            this.$router.push({ name: 'aboutAuthor' })
        }
    }
}
</script>

<style scoped></style>