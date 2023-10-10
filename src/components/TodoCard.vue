<template>
    <el-card class="box-card">
        {{ props.cardData.display }}
        <div>生成時間： <span style="font-size: 12px">{{ timeForDisplay }}</span> </div>
    </el-card>
</template>

<script setup>
import { datePickerProps } from 'element-plus';
import { ref } from 'vue'

const props = defineProps(['cardData'])
const timeForDisplay = ref('')

timeForDisplay.value = `${new Date(props.cardData.time).getFullYear()}/${new Date(props.cardData.time).getMonth() + 1}/${new Date(props.cardData.time).getDate()} ${new Date(props.cardData.time).getHours()}:${new Date(props.cardData.time).getMinutes()}:${String(new Date(props.cardData.time).getSeconds()).padStart(2, '0')}`

</script>

<style lang="scss" scoped>
.box-card {
    width: 250px;
    margin: 20px 0;
}
</style>