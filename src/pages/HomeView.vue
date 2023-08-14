<template>
    <div>
        <FormData @addTopic="addTopicToList" />
        <h2>選擇標題</h2>
        <div style="display: flex; flex-wrap: wrap;gap: 20px;">
            <TopicCard v-for="item in topicsList" :topicData="item" />
        </div>
    </div>
</template>

<script>
import TopicCard from '../components/TopicCard.vue'
import FormData from '../components/FormData.vue'

export default {
    components: {
        TopicCard,
        FormData
    },
    data() {
        return {
        }
    },
    computed: {
        topicsList() {
            return this.$store.state.topicsList
        }
    },
    methods: {
        addTopicToList(topicData) {
            this.$store.commit('addTopicToList', topicData)
        }
    }
}
</script>

<style scoped></style>