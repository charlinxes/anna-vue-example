<template>
    <main class="catCard" :class="{ checked: cardChecked[0] }" style="color: rgb(112, 50, 6);" @click="toggleChecked">
        <h4 style="margin:0">
            {{ catData.name }}
            <input type="checkbox" class="pointer-events:none" :value="catData.name" v-model="cardChecked">
        </h4>
        <div style="display:flex;margin: 16px 0 8px">
            <p style="flex-shrink: 0;width:50px;">年齡：</p>
            <p>{{ catData.age }}</p>
        </div>
        <div style="display:flex;margin: 16px 0 8px">
            <p style="flex-shrink: 0;width:50px;">描述：</p>
            <p>{{ catData.des }}</p>
        </div>
        <div style="display:flex">
            <p style="flex-shrink: 0;width:50px;">住址：</p>
            <p>{{ catData.address }}</p>
        </div>
    </main>
</template>

<script>
export default {
    props: ['catData'],
    data() {
        return {
            cardChecked: []
        }
    },
    methods: {
        toggleChecked() {
            if (this.cardChecked[0]) {
                this.cardChecked.splice(0, 1)
            } else {
                this.cardChecked.push(this.catData.name)
            }
            this.$emit('toggleChecked', this.catData)
        }
    }

}
</script>

<style>
.catCard {
    width: 350px;
    border: 1px solid rgb(179, 80, 9);
    padding: 40px;
    border-radius: 100px;
    transition: all 1s cubic-bezier(0.01, 0.31, 0.74, 0.66);
    box-shadow: 0 3px 3px rgb(142, 63, 7);
    background-color: rgb(251, 250, 248)
}

.catCard.checked {
    background-color: rgb(243, 233, 220)
}

.catCard input {
    accent-color: rgb(142, 63, 7);
}

.catCard:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 3px rgb(133, 60, 7);
}

p {
    margin: 0;
}
</style>