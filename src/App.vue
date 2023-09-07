<template>
    <header>
        <nav>
            <router-link :to="{ name: 'home' }">首頁</router-link>
            <router-link :to="{ name: 'about' }">關於</router-link>
            <router-link :to="{ name: 'personal' }">個人</router-link>
            <router-link :to="{ name: 'setting' }">設定</router-link>
            <router-link :to="{ name: 'product' }">商品</router-link>
            <router-link :to="{ name: 'questionnaire' }">問卷</router-link>
        </nav>
        <div class="login" @click="log">{{ $store.state.isLogin ? '登出' : '登入' }}</div>
    </header>
    <router-view></router-view>
</template>

<script>
export default {
    created() {
        if (JSON.parse(sessionStorage.getItem('isLogin'))) {
            this.$store.commit('login')
        }
    },
    data() {
        return {}
    },
    methods: {
        log() {
            if (this.$store.state.isLogin) {
                this.$store.commit('logout')
                sessionStorage.setItem('isLogin', 'false')
                this.$store.commit('clearFlightCache')
                this.$router.push({ name: "home" });
            } else {
                this.$router.push({ name: 'login' })
            }
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(244, 233, 233);
    padding: 0 20px;
}

nav {
    display: flex;
    gap: 0 10px;
}

a {
    padding: 20px;
    text-decoration: none;
    color: rgb(179, 80, 9);
    border-bottom: 3px solid transparent;
}

.login {
    cursor: pointer;
    color: rgb(65, 65, 65);
}

nav .router-link-active {
    color: rgb(255, 153, 0);
    border-bottom: 3px solid rgb(255, 153, 0);
}
</style>
