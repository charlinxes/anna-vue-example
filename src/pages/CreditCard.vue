<template>
    <main v-if="!showConfirm" style="padding: 30px;">
        <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 5px;">信用卡卡號</div>
            <el-input v-model="creditNo" placeholder="請輸入信用卡卡號" :class="{ error: creditNo && creditNo.length !== 16 }" />
            <div v-show="creditNo && creditNo.length !== 16" style="font-size:10px; color:red; position:absolute;">
                請輸入正確的格式
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 5px;">到期年份</div>
            <el-select v-model="creditExpYear" placeholder="請選擇年份">
                <el-option v-for="item in yearList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div style="margin-bottom: 20px;">
            <div style="margin-bottom: 5px;">到期月份</div>
            <el-select v-model="creditExpMonth" placeholder="請選擇月份">
                <el-option v-for="item in monthList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div>
            <el-button type="primary" round :disabled="btnDisabled" @click="showConfirm = true">確認</el-button>
        </div>
    </main>
    <main v-else style="padding: 30px;">
        <div style="margin-bottom: 16px;">
            <div style="margin-bottom: 5px;">信用卡卡號</div>
            <div>{{ creditNo }}</div>
        </div>
        <div style="margin-bottom: 16px;">
            <div style="margin-bottom: 5px;">到期年份</div>
            <div>{{ creditExpYear }}</div>
        </div>
        <div style="margin-bottom: 16px;">
            <div style="margin-bottom: 5px;">到期月份</div>
            <div>{{ creditExpMonth }}</div>
        </div>
        <div>
            <el-button type="primary" round @click="showConfirm = false">回去</el-button>
        </div>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'
const creditNo = ref('')
const monthList = ref([
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' }
])
const yearList = ref([])
const creditExpYear = ref('')
const creditExpMonth = ref('')
const showConfirm = ref(false)

const btnDisabled = computed(() => {
    if (creditNo.value && creditExpYear.value && creditExpMonth.value) {
        if (creditNo.value.length !== 16) return true
        const currentYear = new Date().getFullYear()
        const currentMonth = new Date().getMonth() + 1
        if (creditExpYear.value == currentYear && creditExpMonth.value < currentMonth) return true
    } else {
        return true
    }
})

generateYearList()


function generateYearList() {
    const currentYear = new Date().getFullYear()
    for (let i = 0; i < 5; i++) {
        yearList.value.push({ value: `${currentYear + i}`, label: `${currentYear + i}` })
    }
}


</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
    background-color: rgb(240, 246, 248);
}

.error {
    &:deep(.el-input__wrapper) {
        box-shadow: 0 0 0 1px red inset;
    }
}
</style>