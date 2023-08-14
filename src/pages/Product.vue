<template>
    <h2>我是商品的頁面</h2>
    <p>商品介紹brabra</p>
    <p>商品id：{{ id }}</p>
    <button @click="$store.commit('addShopData', { id: id })">加入購物車</button>
</template>

<script>
export default {
    created() {
        // 用id去發送請求
        const id = this.id
        console.log('route', this.id)
    },
    beforeRouteLeave() {
        console.log('我是product的beforeRouteLeave')
    },
    beforeRouteUpdate() {
        console.log('我是beforeRouteUpdate')
    },
    props: ['id'],
    data() {
        return {
        }
    }
}
</script>

<style scoped></style>