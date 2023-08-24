<template>
    <main style="padding:30px">
        <template v-if="!showDataChange">
            <h3>我的當前設定：</h3>
            <div style="margin-bottom:20px">
                <div>性別：{{ settingData.sex === 'male' ? '男' : '女' }}</div>
                <div>地址：{{ settingData.address }}</div>
                <div>手機：{{ settingData.phone }}</div>
                <div>電子郵箱：{{ settingData.email }}</div>
            </div>
            <div><button @click="showDataChange = true">變更資料</button></div>
        </template>
        <SettingDataChange v-else :originData="settingData" @getSettingData="getSettingData"
            @cancelSetting="showDataChange = false" />
    </main>
</template>

<script>
import SettingDataChange from '../components/SettingDataChange.vue'
export default {
    components: {
        SettingDataChange
    },
    data() {
        return {
            showDataChange: false,
            settingData: {
                sex: "male",
                address: "台中市高山區大通街25號",
                phone: "0900000000",
                email: "ttt@gmail.com",
            }
        }
    },
    methods: {
        getSettingData(data) {
            this.settingData = data
            this.showDataChange = false
        }
    }

}
</script>