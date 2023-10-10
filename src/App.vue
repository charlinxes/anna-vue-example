<template>
    <header>
        <nav>
            <div class="navButtonContainer" @click="showLink = !showLink">
                <div class="navButton"></div>
            </div>
            <ul :class="{ display: showLink }" @click="showLink = !showLink">
                <li><router-link :to="{ name: 'home' }">首頁</router-link></li>
                <li><router-link :to="{ name: 'about' }">關於</router-link></li>
                <li><router-link :to="{ name: 'personal' }">個人</router-link></li>
                <li><router-link :to="{ name: 'setting' }">設定</router-link></li>
                <li><router-link :to="{ name: 'product' }">商品</router-link></li>
                <li><router-link :to="{ name: 'questionnaire' }">問卷</router-link></li>
                <li><router-link :to="{ name: 'creditCard' }">信用卡變更</router-link></li>
                <li><router-link :to="{ name: 'todoList' }">卡片列表</router-link></li>
            </ul>
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
        return {
            showLink: false,
        }
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

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(244, 233, 233);
    padding: 0 20px;
    position: relative;

    @media(max-width: 768px) {
        height: 61.2px;
    }

    .navButtonContainer {
        border-radius: 100px;
        border: 1px solid black;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media(min-width: 769px) {
            display: none;
        }

        .navButton {
            height: 2px;
            width: 20px;
            background-color: black;
            position: relative;

            &::before,
            &::after {
                content: '';
                height: 2px;
                width: 20px;
                background-color: black;
                position: absolute;
            }

            &::before {
                top: -7px;
            }

            &::after {
                top: 7px;
            }
        }
    }

    ul {
        display: flex;
        gap: 0 10px;
        list-style-type: none;
        padding-left: 0;
        margin: 0;

        @media(max-width: 768px) {
            position: absolute;
            flex-direction: column;
            left: -100px;
            top: 61.2px;
            background-color: rgb(244, 233, 233);
            width: 100px;
            text-align: center;
            transition: left .5s;

            &.display {
                left: 0;
            }
        }


        a {
            display: block;
            padding: 20px;
            text-decoration: none;
            color: rgb(179, 80, 9);
            border-bottom: 3px solid transparent;

            @media(max-width: 768px) {
                border-bottom: none;
                padding: 15px 20px;

                &:hover {
                    color: rgb(255, 153, 0);
                    background-color: rgb(244, 224, 224);
                }
            }



            &.router-link-active {
                color: rgb(255, 153, 0);
                border-bottom: 3px solid rgb(255, 153, 0);

                @media(max-width: 768px) {
                    border-bottom: none;
                }
            }
        }
    }

    .login {
        cursor: pointer;
        color: rgb(65, 65, 65);
    }
}
</style>
