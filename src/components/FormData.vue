<template>
    <div>標題：</div>
    <input type="text" placeholder="請輸入標題" v-model="titleVal">
    <div>描述：</div>
    <input type="text" placeholder="請輸入描述" v-model="desVal">
    <div style="margin-top: 10px">
        <button :disabled="btnDisable" @click="addTopic">生成主題</button>
    </div>
</template>

<script>
export default {
    emits: ['addTopic'],
    computed: {
        btnDisable() {
            if (this.titleVal && this.desVal) {
                return false
            } else {
                return true
            }
        }
    },
    data() {
        return {
            titleVal: '',
            desVal: '',
        }
    },
    methods: {
        addTopic() {
            const topicObj = {
                title: this.titleVal,
                des: this.desVal,
                id: Date.now()
            }
            this.$emit('addTopic', topicObj)
            this.titleVal = ''
            this.desVal = ''
        }
    }
}
</script>