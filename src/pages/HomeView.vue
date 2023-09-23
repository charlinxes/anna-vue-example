<template>
    <section style="padding:30px">
        <main>
            <div><img class="picA" src="../assets/images/picA.jpg" alt="picA"></div>
            <div><img class="picB" src="../assets/images/picB.png" alt="picB"></div>
            <div><img class="picC" src="../assets/images/picC.png" alt="picC"></div>
        </main>
        <div style="margin-top: 350px; width: 100px; text-align:center;">
            <button @click="resetFlowerPosition">回來</button><button @click="flowerMove">衝啊</button>
            <p v-for="(flower, index) in flowerList" class="flowerItem" ref="flower">{{ flower }}</p>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.flowerMove()
    },
    data() {
        return {
            flowerList: ['红玫瑰', '康乃馨', '郁金香', '水仙花', '文竹蝴蝶兰', '麒麟草', '紫丁香', '风铃草']
        }
    },
    methods: {
        flowerMove() {
            this.$refs.flower.forEach((cur, idx) => {
                const time = 200 * (idx + 1)
                setTimeout(() => {
                    const val = 20 * (idx + 1)
                    cur.style.transform = `translateX(${val}px)`
                }, time)
            })
        },
        resetFlowerPosition() {
            this.$refs.flower.forEach((cur, idx) => {
                const time = 200 * (idx + 1)
                setTimeout(() => {
                    const val = 20 * (idx + 1)
                    cur.style.transform = `translateX(0px)`
                }, time)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    main {
        position: relative;

        &:hover img:not(:hover) {
            transform: scale(0.9);
            transform-origin: center;
        }

        img {
            box-sizing: content-box;
            display: block;
            width: 200px;
            position: absolute;
            padding: 30px;
            transition: all .2s;

            &:hover {
                transform: scale(1.2);
                z-index: 2;
                border: 5px solid rgb(238, 238, 183);
            }

            &.picA {
                left: 0;
                top: 10px;
            }

            &.picB {
                left: 205px;
                top: 0;
            }

            &.picC {
                top: 155px;
                left: 100px;
            }
        }
    }

    .flowerItem {
        padding: 20px 0;
        margin: 0;
        transition: all .5s;

        &:not(:last-child) {
            border-bottom: 2px solid rgb(250, 211, 217);
        }

        &::first-letter {
            font-size: 1.5rem;
            font-weight: bold;
            color: brown;
        }
    }
}
</style>

