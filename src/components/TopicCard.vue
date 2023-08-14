<template>
    <div style="border: 1px solid black; width: 20%;display:flex;flex-direction:column;align-items:center;padding: 30px">
        <h3 style="margin:0;">{{ topicData.title }}</h3>
        <p>{{ topicData.des }}</p>
        <button @click="navToTopicView">查看更多</button>
    </div>
</template>

<script>

export default {
    props: ['topicData'],
    data() {
        return {

        }
    },
    methods: {
        navToTopicView() {
            this.$router.push({ name: 'topic', params: { id: this.topicData.id } })
        }
    }
}
</script>

<style scoped></style>