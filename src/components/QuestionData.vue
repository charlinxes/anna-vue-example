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

const props = defineProps(['questionData', 'checkOptions'])
const emits = defineEmits(['emitCheckOption'])
const inputRef = ref([])

const checkItem = props.checkOptions.find((cur) => {
    return cur.topic === props.questionData.topic
})

onMounted(() => {
    if (checkItem) {
        inputRef.value.find((ele) => ele.value === checkItem.checkOption.value).checked = true
    }
})


function emitCheckOption(option) {
    emits('emitCheckOption', { ...props.questionData, checkOption: option })
}

</script>