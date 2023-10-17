<template>
    <div style="padding: 30px;display: flex;align-items: center;">
        <el-button type="success" @click="addNewCard">添加卡片</el-button>
        <el-button type="danger" @click="sortCard">更改排序</el-button>
        <span style="margin-left: 10px">{{ sortOrder }}</span>
        <el-icon v-if="sortOrder === '升序'">
            <SortUp />
        </el-icon>
        <el-icon v-else="sortOrder === '降序'">
            <SortDown />
        </el-icon>
        <el-select v-model="filterTag" style="margin-left: 10px" placeholder="過濾項目">
            <el-option v-for="item in filterOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
    <el-row style="padding: 30px;" :gutter="16">
        <TransitionGroup name="list">
            <el-col v-for="(card, idx) in filterCardList" :key="card" :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div style="padding: 14px">
                        <span>我是第{{ card.id }}個</span><el-tag style="margin-left: 10px;" :type="card.id % 2 ===
                            0 ? 'success' : 'warning'">{{ card.id % 2 ===
        0 ? '偶數' : '奇數' }}</el-tag>
                        <div class="bottom">
                            生成時間：
                            <time class="time">{{ card.currentTime.toLocaleString('zh-TW') }}</time>
                        </div>
                        <div style="text-align: end">
                            <el-button type="danger" :icon="Delete" circle @click="delCard(card.id)" />
                        </div>

                    </div>
                </el-card>
            </el-col>
        </TransitionGroup>
    </el-row>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Delete } from '@element-plus/icons-vue'
const cardList = ref([])
const sortOrder = ref('升序')
const filterTag = ref('')
const filterOptions = ref([
    {
        value: '',
        label: '無'
    },
    {
        value: 'odd',
        label: '奇數'
    },
    {
        value: 'even',
        label: '偶數'
    }
])
let idx = 0

function addNewCard() {
    cardList.value.push({ id: idx, currentTime: new Date() })
    idx += 1
}

function delCard(id) {
    const idx = cardList.value.findIndex((item) => {
        return item.id === id
    })
    cardList.value.splice(idx, 1)
}

function sortCard() {
    if (sortOrder.value === '升序') {
        cardList.value.sort((a, b) => {
            return b.currentTime - a.currentTime
        })
        sortOrder.value = '降序'
    } else {
        cardList.value.sort((a, b) => {
            return a.currentTime - b.currentTime
        })
        sortOrder.value = '升序'
    }
}

const filterCardList = computed(() => {
    switch (filterTag.value) {
        case '':
            return cardList.value
        case 'even':
            return cardList.value.filter((item) => {
                return item.id % 2 === 0
            })
        case 'odd':
            return cardList.value.filter((item) => {
                return item.id % 2 !== 0
            })
    }
})


</script>

<style lang="scss" scoped>
.time {
    display: block;
    font-size: 12px;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-leave-active {
    position: absolute;
}

::v-deep .el-col {
    margin-bottom: 16px;
}
</style>