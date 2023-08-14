<template>
    <p>Title</p>
    <p><input type="text" :value="titleVal" @input="titleVal = $event.target.value" /></p>
    <p>Description</p>
    <textarea name="" id="" cols="30" rows="10" :value="desVal" @input="desVal = $event.target.value"></textarea>
    <p>Link</p>
    <p><input type="text" :value="linkVal" @input="linkInput" :class="{ 'unValid': !validation }" /></p>
    <p v-if="!validation" style="color: red">請重新輸入</p>
    <button @click="emitFormVal" :disabled="!validation">Add Resource</button>
</template>

<script>
export default {
    emits: ['emitFormVal'],
    data() {
        return {
            titleVal: '',
            desVal: '',
            linkVal: '',
            validation: true
        }
    },
    methods: {
        linkInput($event) {
            this.linkVal = $event.target.value
            if (this.linkVal.includes('.com')) {
                this.validation = true
            } else {
                this.validation = false
            }
        },
        emitFormVal() {
            const emitObj = {
                titleVal: this.titleVal,
                desVal: this.desVal,
                linkVal: this.linkVal
            }
            this.$emit('emitFormVal', emitObj)
        }
    }
}
</script>

<style scoped>
.unValid {
    border: 3px solid red;
}
</style>