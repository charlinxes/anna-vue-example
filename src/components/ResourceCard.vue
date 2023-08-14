<template>
    <div class="card">
        <h2>{{ cardVal.titleVal }}</h2>
        <p>{{ cardVal.desVal }}</p>
        <button @click="deleteCard">刪除</button>
    </div>
</template>

<script>
export default {
    emits: ['deleteCard'],
    props: ['cardVal', 'index'],
    methods: {
        deleteCard() {
            this.$emit('deleteCard', this.index)
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid black;
}
</style>