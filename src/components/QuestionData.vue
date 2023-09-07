<template>
    <section style="border: 1px solid #ccc; padding: 20px">
        <p style="margin-top: 0;">{{ questionData.topic }}：</p>
        <div v-for="option in questionData.options">
            <label>
                <input type="radio" :name="option.name" :value="option.value" @change="emitCheckOption(option)" />
                {{ option.display }}
            </label>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['questionData'])
const emits = defineEmits(['emitCheckOption'])

function emitCheckOption(option) {
    emits('emitCheckOption', { ...props.questionData, checkOption: option })
}

</script>