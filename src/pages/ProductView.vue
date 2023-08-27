<template>
    <main style="padding:30px;">
        <div style="display:flex;flex-wrap:wrap;gap:20px 20px;margin-bottom: 30px;" v-show="!showDataChange">
            <CatCard v-for="cat in catList" ref="catList" :key="cat.id" :catData="cat" @toggleChecked="setCheckedList" />
        </div>
        <button v-show="!showDataChange" @click="showDataChange = true">變更地址</button>
        <div v-show="showDataChange">
            <div>新地址：<input v-model="catNewAddress" /></div>
            <button @click="changeAddress" style="margin-right:10px">送出</button>
            <button @click="showDataChange = false">取消變更</button>
        </div>

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
                { id: 1, name: '大白', birth: '2020/10/11', des: '我是胖胖大白貓，我欺軟怕硬，最愛欺負小貓', address: 'A' },
                { id: 2, name: '紅紅', birth: '2019/4/9', des: '請叫我瘦弱紅紅，貓中一隻花，曾經也是众星拱月，直到我被絕了育QQ', address: 'B' },
                { id: 3, name: '黑仔', birth: '2022/10/29', des: '酷酷黑仔就是我，別隨便摸我，誰惹我我跟誰急', address: 'C' },
                { id: 4, name: '小黃', birth: '2023/1/23', des: '我明明毛色不黃，但不知道為什麼大家叫我小黃，可能我比較性感吧:D。大白我還在講話你不要弄我', address: 'D' },
                { id: 5, name: '阿花', birth: '2021/11/14', des: '我不喜歡別人盯著我看，因為晚上都睡不好，臉很花長了一堆痘痘', address: 'E' }
            ],
            checkedList: [],
            catNewAddress: '',
            showDataChange: false
        }
    },
    methods: {
        setCheckedList(catObj) {
            const targetIndex = this.checkedList.findIndex(item => item.id === catObj.id)
            if (targetIndex >= 0) {
                console.log(targetIndex)
                this.checkedList.splice(targetIndex, 1)
            } else {
                this.checkedList.push(catObj)
            }
        },
        changeAddress() {
            this.catList = this.catList.map(cur => {
                console.log(this.checkedList)
                if (this.checkedList.some(item => item.id === cur.id)) {
                    return { ...cur, address: this.catNewAddress }
                }
                return cur
            })
            this.checkedList.forEach(cur => {
                this.$refs.catList.forEach((item) => {
                    item.cardChecked = []
                })
            })
            this.checkedList = []
            this.showDataChange = false
        }
    }

}
</script>