<template>
    <section style="border: 1px solid #ccc; padding: 20px">
        <p style="margin-top: 0;">{{ questionData.topic }}：</p>
        <div v-for="option in questionData.options">
            <label>
                <input type="radio" ref="inputRef" :name="option.name" :value="option.value"
                    @change="emitCheckOption(option)" />
                {{ option.display }}
            </label>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['questionData', 'checkList'])
const emits = defineEmits(['emitCheckOption'])
const inputRef = ref([])

onMounted(() => {
    // inputRef.value 陣列包含當前問題的所有選項的單選框 <input type="radio">
    // props.checkList 陣列包含已經選中的選項
    // 邏輯：在 inputRef.value 中找出目標的元素，將其勾選
    const targetInput = inputRef.value.find((elem) => {
        return props.checkList.find((checkOpt) => elem.value === checkOpt.value)
    })
    if (targetInput) targetInput.checked = true

})

function emitCheckOption(option) {
    emits('emitCheckOption', option, props.questionData.topic, props.questionData.order)
}

</script>