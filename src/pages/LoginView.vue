<template>
    <section style="padding:30px">
        <div style="margin-bottom: 10px; display: flex">
            <span style="width:80px;text-align: end;">用戶名：</span><input type="text" v-model="userName">
        </div>
        <div style="margin-bottom: 20px; display: flex">
            <span style="width:80px;text-align: end;">密碼：</span><input type="password" v-model="password">
        </div>
        <button style="margin-left: 80px; margin-bottom: 10px;" @click="authenticate">登入</button>
        <div v-if="showAlert" style="margin-left: 80px; color: red;">用戶名或密碼錯誤</div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
            showAlert: false
        }
    },
    methods: {
        authenticate() {
            if (this.userName === 'anna' && this.password === 'anna001114') {
                this.$store.commit('login')
                sessionStorage.setItem('isLogin', 'true')
                this.$router.push({ name: 'home' })
            } else {
                this.showAlert = true
                this.password = ''
            }
        }
    }
}
</script>

