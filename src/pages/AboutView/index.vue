<template>
    <section style="display: flex;">
        <aside ref="aboutAside" class="aboutAside">
            <router-link :to="{ name: 'about' }">簡介</router-link>
            <router-link :to="{ name: 'aboutAuthor' }">作者</router-link>
            <router-link :to="{ name: 'aboutContext' }">背景</router-link>
        </aside>
        <div v-if="$route.path === '/about'" style="padding:30px">你現在在關於簡介頁哦！</div>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    mounted() {
        // 這一段用來設置aside的高度
        const headerHeight = document.querySelector('header').offsetHeight
        this.$refs.aboutAside.style.height = `calc(100vh - ${headerHeight}px)`
    },
    data() {
        return {}
    }
}
</script>

<style>
.aboutAside {
    display: flex;
    flex-direction: column;
    background-color: rgb(250, 243, 231);
    padding: 8px 0;
}

.aboutAside a {
    text-decoration: none;
    padding: 15px 30px;
    color: darkgoldenrod;
}

.aboutAside a:hover {
    background-color: rgb(246, 234, 214);
}

.aboutAside .router-link-exact-active {
    border-right: 3px solid rgb(204, 183, 151);
}
</style>