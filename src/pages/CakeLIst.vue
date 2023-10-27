<template>
    <div class="content_big">
        <div class="left">
            <div class="menu">
                <div class="title">甜點類別</div>
                <div class="list">
                    <li><a href="###">所有甜點 (45)</a></li>
                    <li><a href="###">本日精選 (10)</a></li>
                    <li><a href="###">人氣精選 (26)</a></li>
                    <li><a href="###">新品上市 (12)</a></li>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="product">
                <img src="https://hexschool.github.io/flexImgUrl/10/pic1.png" alt="">
                <div class="product1">
                    <div class="name">焦糖甜甜圈</div>
                    <div class="nt">NT$ 450</div>
                </div>
                <a href="">加入購物車</a>
            </div>

            <div class="product">
                <img src="https://hexschool.github.io/flexImgUrl/10/pic2.png" alt="">
                <div class="product1">
                    <div class="name">蔓越莓戚風蛋糕</div>
                    <div class="nt">NT$ 550</div>
                </div>
                <a href="">加入購物車</a>
            </div>

            <div class="product">
                <img src="https://hexschool.github.io/flexImgUrl/10/pic3.png" alt="">
                <div class="product1">
                    <div class="name">藍莓提拉米蘇</div>
                    <div class="nt">NT$ 300</div>
                </div>
                <a href="">加入購物車</a>
            </div>

            <div class="product">
                <img src="https://hexschool.github.io/flexImgUrl/10/pic1.png" alt="">
                <div class="product1">
                    <div class="name">焦糖甜甜圈</div>
                    <div class="nt">NT$ 450</div>
                </div>
                <a href="">加入購物車</a>
            </div>

            <div class="product">
                <img src="https://hexschool.github.io/flexImgUrl/10/pic2.png" alt="">
                <div class="product1">
                    <div class="name">蔓越莓戚風蛋糕</div>
                    <div class="nt">NT$ 550</div>
                </div>
                <a href="">加入購物車</a>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.content_big {
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
    padding: 30px;
    gap: 0 30px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
    }
}

.left {
    width: 300px;
    flex-shrink: 0;

    @media (max-width: 1024px) {
        width: 100%;
        margin: 0 auto;
    }
}

.menu {
    text-align: center;
}

.title {
    background-color: #37523d;
    font-size: 24px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    padding-top: 20px;
    padding-bottom: 20px;

}

.list {
    @media (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}

.list li {
    list-style: none;
    font-size: 24px;
    font-weight: bold;
    color: #37523d;
    border: 0.5mm solid #e7eeea;

    @media (max-width: 1024px) {
        width: 25%;
    }

    @media (max-width: 576px) {
        width: 50%;
    }
}

.list a {
    display: block;
    text-decoration: none;
    color: #37523d;
    padding: 10% 8% 10% 8%;
}


.list a:hover {
    background-color: #e7eeea;
}


.right {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 70%;

    @media (max-width: 1024px) {
        gap: 30px;
        max-width: none;
    }
}



.product {
    width: 300px;

    @media (max-width: 1024px) {
        width: calc(50% - 15px);
    }

    @media (max-width: 576px) {
        width: 100%;
    }
}

.product1 {
    display: flex;
}


.name {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #37523d;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    border: 0.5mm solid #e7eeea;
}

.nt {
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #37523d;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    border: 0.5mm solid #e7eeea;
}


.product a {
    display: block;
    text-decoration: none;
    color: #37523d;
    list-style: none;
    font-size: 24px;
    font-weight: bold;
    background-color: #e7eeea;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}


.product a:hover {
    background-color: #37523d;
    color: #e7eeea;
}

img {
    display: block;

    @media (max-width: 1024px) {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: bottom;
    }
}
</style>