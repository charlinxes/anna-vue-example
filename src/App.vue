<template>
    <h1>這裡是根元件App.vue</h1>
    <router-link :to="{ name: 'home' }">首頁</router-link>
    <router-link :to="{ name: 'about' }" style="margin-left:20px">關於</router-link>
    <router-link :to="{ name: 'introduce' }" style="margin-left:20px">介紹</router-link>
    <router-link :to="{ name: 'product', params: { id: '123' } }" style="margin-left:20px">商品頁123</router-link>
    <router-link :to="{ name: 'product', params: { id: '456' } }" style="margin-left:20px">商品頁456</router-link>
    <router-link :to="{ name: 'aboutAuthor' }" style="margin-left:20px">作者關於頁</router-link>

    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active {
    color: red;
}
</style>