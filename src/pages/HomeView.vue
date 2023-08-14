<template>
    <header>
        <h1>RememberMe</h1>
    </header>
    <main>
        <nav>
            <button @click="activeBlock = 'StoredResources'">Stored Resources</button>
            <button @click="activeBlock = 'AddResource'">Add Resource</button>
        </nav>
        <div v-if="activeBlock === 'StoredResources'">
            <ResourceCard v-for="(card, index) in resourceCards" :cardVal="card" :index="index" @deleteCard="deleteCard" />
        </div>
        <div v-else-if="activeBlock === 'AddResource'">
            <ResourceForm @emitFormVal="getFormVal" />
        </div>
    </main>
</template>

<script>
import ResourceCard from '../components/ResourceCard.vue'
import ResourceForm from '../components/ResourceForm.vue'

export default {
    components: {
        ResourceCard,
        ResourceForm
    },
    data() {
        return {
            activeBlock: 'StoredResources',
            resourceCards: []
        }
    },
    methods: {
        getFormVal(obj) {
            this.resourceCards.push(obj)
            this.activeBlock = 'StoredResources'
        },
        deleteCard(idx) {
            this.resourceCards.splice(idx, 1)
        }
    }
}
</script>

<style scoped></style>
