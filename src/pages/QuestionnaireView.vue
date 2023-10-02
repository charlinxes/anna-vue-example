<template>
    <section style="padding:3rem">
        <div v-show="!showAnswer">
            <div style="margin-bottom:1rem">
                <button v-for="(item, index) in questionList " @click="curItem = item.order" class="tab-button"
                    :class="{ active: curItem === index + 1 }"> 問題{{ item.order }} </button>
                <div v-for=" (item, index) in questionList" v-show="curItem === item.order" style="margin-bottom:1rem">
                    <QuestionData v-if="curItem === index + 1" :questionData="item" :checkList="checkList"
                        @emitCheckOption="getCheckOption" />
                </div>
            </div>
            <div style="margin-bottom:1rem">
                已選擇{{ checkList.length }}/{{ questionList.length }}
            </div>
            <div>
                <button :disabled="checkList.length !== questionList.length" @click="confirmAnswer">確認答案</button>
            </div>
        </div>
        <div v-show="showAnswer">
            <div v-for=" item  in  checkList ">
                <div>{{ item.topic + ':' + item.display }}</div>
            </div>
            <button @click="showAnswer = false">返回</button>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import QuestionData from '../components/QuestionData.vue'

const curItem = ref(1)
const showAnswer = ref(false)
const checkList = ref([])
const questionList = ref([])
setTimeout(() => {
    questionList.value = [
        {
            topic: '您的性別',
            order: 1,
            options: [
                { name: 'sex', value: 'male', display: '男' },
                { name: 'sex', value: 'female', display: '女' },
                { name: 'sex', value: 'others', display: '其他' }
            ]
        },
        {
            topic: '您最喜歡下面哪隻狗狗',
            order: 2,
            options: [
                { name: 'dog', value: 'dogA', display: '阿寶' },
                { name: 'dog', value: 'dogB', display: '秋葵' }
            ]
        },
        {
            topic: '您最喜歡下面哪隻貓貓',
            order: 3,
            options: [
                { name: 'cat', value: 'catA', display: '蛋捲' },
                { name: 'cat', value: 'catB', display: '短褲' },
                { name: 'cat', value: 'catC', display: '麻糊' },
                { name: 'cat', value: 'catD', display: '米香' },
                { name: 'cat', value: 'catE', display: '橘皮' },
                { name: 'cat', value: 'catF', display: '本丸' },
                { name: 'cat', value: 'catG', display: 'Yia' },
                { name: 'cat', value: 'catH', display: '丁滿' },
                { name: 'cat', value: 'catI', display: '澎澎' },
            ]
        }, {
            topic: '您最喜歡下面哪隻豬',
            order: 4,
            options: [
                { name: 'pig', value: 'pigA', display: '喬治' },
                { name: 'pig', value: 'pigB', display: '佩奇' }
            ]
        },
    ]
}, 1000)

function getCheckOption(option, order, topic) {
    const index = checkList.value.findIndex(cur => {
        return cur.order === order
    })
    if (index >= 0) {
        checkList.value.splice(index, 1)
    }
    checkList.value.push({ ...option, order: order, topic: topic })
}
function confirmAnswer() {
    checkList.value.sort((a, b) => {
        return a.order - b.order
    })
    showAnswer.value = true
}
</script>

<style>
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}
</style>