<template>
    <main style="padding:30px;display:flex;flex-wrap:wrap;gap:20px 20px">
        <CatCard v-for="cat in catList" :catData="cat" />
    </main>
</template>

<script>
import CatCard from '../components/CatCard.vue'

export default {
    components: {
        CatCard
    },
    created() {
        this.catList = this.catList.map((cat) => {
            const catBirth = new Date(cat.birth)
            const ageYear = this.$dayjs(Date.now()).diff(catBirth, 'year')
            const ageMonth = this.$dayjs(Date.now()).diff(catBirth, 'month')
            const ageMsg = ageYear > 0 ? `${ageYear} 歲` : `${ageMonth} 個月大`
            return {
                ...cat,
                age: ageMsg
            }
        })
    },
    data() {
        return {
            catList: [
                { name: '大白', birth: '2020/10/11', des: '我是胖胖大白貓，我欺軟怕硬，最愛欺負小貓' },
                { name: '紅紅', birth: '2019/4/9', des: '請叫我瘦弱紅紅，貓中一隻花，曾經也是众星拱月，直到我被絕了育QQ' },
                { name: '黑仔', birth: '2022/10/29', des: '酷酷黑仔就是我，別隨便摸我，誰惹我我跟誰急' },
                { name: '小黃', birth: '2023/1/23', des: '我明明毛色不黃，但不知道為什麼大家叫我小黃，可能我比較性感吧:D。大白我還在講話你不要弄我' },
                { name: '阿花', birth: '2021/11/14', des: '我不喜歡別人盯著我看，因為晚上都睡不好，臉很花長了一堆痘痘' }
            ]
        }
    },
    methods: {
    }

}
</script>