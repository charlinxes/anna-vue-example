<template>
    <h2 @click="increment">我是介紹A的頁面</h2>
    <div>state:{{ countA }}</div>
    <div>getters:{{ $store.getters['countingAModule/doubleCount'] }}</div>

    <h2 @click="$store.commit('countingAModule/countingBModule/increment')">我是介紹B的頁面</h2>
    <div>state:{{ countB }}</div>
    <div>getters:{{ $store.getters['countingAModule/countingBModule/doubleCount'] }}</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    created() {
        console.log(this.countA)
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            countA: state => state.countingAModule.count,
            countB: state => state.countingAModule.countingBModule.count,
        }),
        // ...mapMutations('countingAModule/countingBModule', [
        //     'increment',
        // ])
    },
    methods: {
        ...mapMutations('countingAModule', [
            'increment',
        ]),
    }
}
</script>

<style scoped></style>