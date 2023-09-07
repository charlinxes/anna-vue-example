<template>
    <main style="padding:30px;">
        <section v-show="!showAnswer">
            <button v-for="(tab, index) in tabs" class="tab-button" :class="{ active: currentTab === index }"
                @click="currentTab = index">
                {{ tab }}
            </button>
            <QuestionData v-for="(question, index) in questionList" v-show="currentTab === index" :questionData="question"
                @emitCheckOption="getCheckOption" />
            <div style="margin: 20px 0;">已選擇 {{ checkOptions.length + '/' + questionList.length }}</div>
            <div><button :disabled="checkOptions.length < questionList.length" @click="checkAnswer">確認答案</button></div>
        </section>
        <section v-show="showAnswer">
            <div v-for="option in checkOptions" style="margin-bottom: 20px"> {{ option.topic + '：' +
                option.checkOption.display }} </div>
            <div><button @click="showAnswer = false">返回</button></div>
        </section>
    </main>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import QuestionData from '../components/QuestionData.vue'
import nzh from "nzh/hk";

const currentTab = ref(0)
const tabs = ref([])
const checkOptions = ref([])
const showAnswer = ref(false)
const questionList = ref([
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
        topic: '您有無性經驗',
        order: 2,
        options: [
            { name: 'sexualExp', value: 'true', display: '有' },
            { name: 'sexualExp', value: 'false', display: '無' }
        ]
    },
    {
        topic: '您可否接受婚前性行為',
        order: 3,
        options: [
            { name: 'premaritalSex', value: 'true', display: '可以' },
            { name: 'premaritalSex', value: 'false', display: '不可' }
        ]
    }
])

onBeforeMount(() => {
    questionList.value.forEach((cur) => {
        tabs.value.push(`問題${nzh.encodeS(cur.order)}`)
    })

})



function getCheckOption(option) {
    const index = checkOptions.value.findIndex((cur) => {
        return cur.checkOption.name === option.checkOption.name
    })
    if (index >= 0) {
        checkOptions.value.splice(index, 1)
    }
    checkOptions.value.push(option)
}

function checkAnswer() {
    checkOptions.value.sort((a, b) => { return a.order - b.order })
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