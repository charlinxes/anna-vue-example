<template>
    <div style="padding: 30px;">
        <el-button type="success" @click="addCard">添加卡片</el-button>
        <el-button type="danger" @click="sortCard">更改排序</el-button>
        <span v-if="sortStatus === 'descend'" style="margin-left: 5px">升序<el-icon style="position: relative;top:2px">
                <SortUp />
            </el-icon></span>
        <span v-if="sortStatus === 'ascend'" style="margin-left: 5px">降序<el-icon style="position: relative;top:2px">
                <SortDown />
            </el-icon></span>
        <TransitionGroup name="list">
            <TodoCard v-for="card in cardList" :key="card.time" :cardData="card" />
        </TransitionGroup>
    </div>
</template>

<script setup>
import TodoCard from '../components/TodoCard.vue'
import { ref } from 'vue'

const cardList = ref([])
let index = 0
let sortStatus = ref('descend')

function addCard() {
    cardList.value.push({ display: `我是第${index}個`, time: Date.now() })
    index += 1
    console.log(cardList.value)
}

function sortCard() {
    if (sortStatus.value !== 'descend') {
        cardList.value.sort((a, b) => {
            return a.time - b.time
        })
        sortStatus.value = 'descend'
    } else {
        cardList.value.sort((a, b) => {
            return b.time - a.time
        })
        sortStatus.value = 'ascend'
    }
}
</script>

<style lang="scss" scoped>
.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}
</style>