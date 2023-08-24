<template>
    <section>
        <div style="margin-bottom:15px">性別：
            <label style="margin-right:10px"><input type="radio" name="sex" value="male" v-model="settingData.sex">男</label>
            <label><input type="radio" name="sex" value="female" v-model="settingData.sex">女</label>
        </div>
        <div style="margin-bottom:15px">地址：<input v-model="settingData.address"></div>
        <div style="margin-bottom:15px">手機：<input v-model="settingData.phone"></div>
        <div style="margin-bottom:15px">電子郵箱：<input v-model="settingData.email"></div>
        <div>
            <button @click="emitSettingData" style="margin-right:10px" :disabled="btnDisabled">送出</button>
            <button @click="cancelSetting">取消變更</button>
        </div>
    </section>
</template>

<script>
import { objSameCompare, objAllValueValid } from '../assets/util'

export default {
    props: ['originData'],
    data() {
        return {
            settingData: JSON.parse(JSON.stringify(this.originData))
        }
    },
    computed: {
        btnDisabled() {
            const hasChange = !objSameCompare(this.originData, this.settingData)
            const validValues = objAllValueValid(this.settingData)
            console.log('改變了', hasChange, validValues)
            return !(hasChange && validValues)
        }
    },
    methods: {
        emitSettingData() {
            this.$emit('getSettingData', this.settingData)
        },
        cancelSetting() {
            this.$emit('cancelSetting')
        }
    }

}
</script>