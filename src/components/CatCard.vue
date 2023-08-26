<template>
    <main class="catCard">
        <h4 style="margin:0">{{ catData.name }}</h4>
        <p>年齡：{{ catData.age }}</p>
        <p>描述：{{ catData.des }}</p>
    </main>
</template>

<script>
export default {
    props: ['catData'],
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    }

}
</script>

<style>
.catCard {
    width: 350px;
    height: 200px;
    border: 1px solid black;
    padding: 40px;
    border-radius: 100px
}
</style>