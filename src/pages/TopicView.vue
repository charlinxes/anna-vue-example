<template>
    <div>
        <div>標題：{{ topicData.title }}</div>
        <div>描述：{{ topicData.des }}</div>
    </div>
</template>

<script>
export default {
    created() {
        this.topicData = this.$store.state.topicsList.find((cur) => {
            return cur.id == this.$route.params.id
        })
    },
    data() {
        return {
            topicData: null
        }
    }
}
</script>