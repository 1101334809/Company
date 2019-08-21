<template>
    <div class="home-page">
        <swiper :options="swiperOption" ref="mySwiper" style="height: 100%;">
            <!-- slides -->
            <swiper-slide class="banner banner-1">
                <video autoplay muted loop style="width: 100%">
                    <source  src="../assets/banner/banner01_bg_01.mp4">
                </video>
                <div>
                    <span :class="{'animate':isActive(0)}">EXPLORING THE VISUAL AESTHETICS</span>
                    <p :class="{'animate':isActive(0)}">UI·WEB <br>VIS <br>VIDEO</p>
                    <a class="btn" :class="{'animate':isActive(0)}">查看项目</a>
                    <span :class="{'slide-left':isActive(0)}">探寻视觉美学</span>
                </div>
            </swiper-slide>
            <swiper-slide class="banner banner-2">
                <div :class="{'animate':isActive(1)}">
                    <span :class="{'animate':isActive(1)}">视觉潮流领跑者</span>
                    <p :class="{'animate':isActive(1)}">THE VISUAL <br>TERND <br>LEADER</p>
                    <a class="btn" :class="{'animate':isActive(1)}">查看项目</a>
                </div>
                <img src="../assets/banner/banner02_img.png" alt="banner02" :class="{'animate':isActive(1)}">
            </swiper-slide>
            <swiper-slide class="banner banner-3">
                <div :class="{'animate':isActive(2)}">
                    <span :class="{'animate':isActive(2)}">用创意解决问题</span>
                    <p :class="{'animate':isActive(2)}">CREATIVE <br>APPROACH <br>TO SOLVING <br>PROBLEMS</p>
                    <a class="btn" :class="{'animate':isActive(2)}">查看项目</a>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="page-tip"><span v-text="'0'+(activeIndex+1)"></span><span></span><span>03</span></div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                    followFinger: false,
                    speed: 800,
                    mousewheel: true,
                    parallax: true,
                    effect : 'cube',
                    // loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 8000
                    },
                    on: {
                        init: () => {
                            this.init();
                        },
                        transitionStart: () => {
                            this.tranStart();
                        },
                        // transitionEnd: () => {
                        //     this.tranStart();
                        // }
                    }
                },
                activeIndex: -1
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted() {
            this.setTitle("蓝媒广告-首页");
            this.activeIndex = 0;
            document.body.className = "o-hide";
        },
        methods: {
            setTitle(t) {
                document.title = t;
                var i = document.createElement('iframe');
                i.src = '//m.baidu.com/favicon.ico';
                i.style.display = 'none';
                i.onload = function () {
                    setTimeout(function () {
                        i.remove();
                    }, 9)
                }
                document.body.appendChild(i);
            },
            isActive(i) {
                return i == this.activeIndex;
            },
            init() {
                // setTimeout(()=>{
                // this.activeIndex = this.swiper.activeIndex;
                // },500);
            },
            tranStart() {
                setTimeout(() => {
                    this.activeIndex = this.swiper.activeIndex;
                }, 500);
                // console.log(this.swiper.slides.eq(0));
                // console.log(this.swiper.activeIndex);
            }
        }
    }
</script>

<style lang="scss" scoped>
    // @import "../assets/MOD20.TTF";
    @import "../assets/scss/varlible";
    .home-page {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #141219;
        .banner {
            width: 100%;
            height: 100%;
            color: #fff;
            padding: torem(130) torem(108) torem(85) torem(75);
            box-sizing: border-box;
            >div {
                width: 100%;
                height: 100%;
                padding: 1px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
                span {
                    &:first-of-type {
                        opacity: 0;
                        transform: translateX(-150px);
                        transition: opacity 1.2s, transform 1.2s;
                        transition-delay: .4s;
                        font-size: 24px;
                        // margin-top: 50px;
                        display: block;
                        &.animate {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    &:after {
                        content: "";
                        height: 3px;
                        width: 40px;
                        margin-top: 10px;
                        margin-left: 2px;
                        display: block;
                        background: #fff;
                    }
                }
                p {
                    opacity: 0;
                    transform: translateX(-150px);
                    transition: opacity 1.2s, transform 1.2s;
                    &.animate {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    font-family: Modern-Regular;
                    font-size: 120px;
                    // margin-top: 20px;
                    line-height: 1;
                    // margin-bottom: 20px;
                }
                a {
                    opacity: 0;
                    cursor: pointer;
                    transform: translateY(150px);
                    transition: opacity 1.2s, transform 1.2s;
                    // transition-delay: .8s;
                    &.animate {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    font-size: 16px;
                    display: inline-block;
                    padding: 5px 20px;
                    border: 1px solid #fff;
                    box-sizing: border-box;
                    // transition: background-color .3s,border .3s;
                    position: relative;
                    overflow: hidden;
                    height: 35px;
                    &::before,&::after{
                        content:'';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        transition: transform .4s;
                        z-index: -1;
                    }
                    &::before{
                        background-color: pink;
                        transform: translateX(-100%);
                    }
                    &::after{
                        transform: translateX(-110%);
                        background-color: rgb(216, 85, 85);
                        // transition-delay: .2s;
                    }
                    &:hover{
                        &::before{
                            transform: translateX(10%);
                        }
                        &::after{
                            transform: translateX(0);
                        }
                        // background-color: #462ef0;
                        // border: 1px solid #462ef0;
                    }
                }
            }
        }
        .banner-1 {
            // background: url(../assets/banner/banner01_bg_01.png) no-repeat center;
            // background-size: 100% 100%;
            background-color: #000;
            video{
                position: absolute;
                right:0;
                bottom: 0;
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                z-index: -9999;
            }
            >div {
                // background: url(../assets/banner/banner01_bg_02.png);
                span {
                    &:first-of-type {
                        font-family: MONOSPACE;
                    }
                    &:last-of-type {
                        position: absolute;
                        right: 143px;
                        top: 50%;
                        font-size: 24px;
                        opacity: 0;
                        transition: opacity 1.2s;
                        transition-delay: .8s;
                        &:after {
                            content: "";
                            height: 3px;
                            width: 40px;
                            margin-top: 10px;
                            display: block;
                            background: #fff;
                            transition: transform 1.2s;
                            transition-delay: 0.8s;
                        }
                        &.slide-left {
                            opacity: 1;
                            &:after {
                                transform: translateX(100px); // left: 100px;
                            }
                        }
                    }
                }
                // p {
                //     margin: 30px 0;
                // }
            }
        }
        .banner-2 {
            background-color: #141219;
            // padding: torem(200) torem(108) torem(100) torem(75);
            >div {
                // background: url(../assets/banner/banner02_bg_01.png) no-repeat;
                // background-size: auto 100%;
                // background-position: 2000px 1200px;
                // transition: background-position 1.2s;
                &.animate{
                    // background-position: right center;
                }
                span {
                    &:first-of-type {
                        margin-top: 0;
                    }
                }
                p {
                    font-size: 72px;
                    // margin: 100px 0;
                }
            }
                img{
                    position: absolute;
                    height: 100%;
                    top: 0;
                    right: 10%;
                    opacity: 0;
                    transform: translateY(300px);
                    transition: opacity .8s, transform .8s;
                    z-index: -1;
                    &.animate{
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
        }
        .banner-3 {
            background-color: #141219;
            // padding: torem(180) torem(108) torem(180) torem(75);
            >div {
                background: url(../assets/banner/banner03_bg_01.png) no-repeat;
                background-size: auto 100%;
                background-position: 2000px 1200px;
                transition: background-position 1.2s;
                &.animate{
                    background-position: right center;
                }
                span {
                    // &:first-of-type {
                    //     margin-top: torem(25);
                    // }
                }
                p {
                    font-size: 56px;
                    // margin: 70px 0;
                }
            }
        }
        .page-tip {
            position: absolute;
            bottom: torem(80);
            right: torem(75);
            text-align: center;
            z-index: 1;
            span {
                font-size: torem(12);
                display: block;
                color: #fff;
                margin-bottom: torem(10);
                &:nth-of-type(2) {
                    text-align: center;
                    &::before {
                        content: "";
                        display: inline-block;
                        width: 1px;
                        height: torem(60);
                        background: #fff;
                    }
                }
            }
        }
        @media screen and (max-width:1024px) {
            .banner{
                padding: torem(70) torem(25) torem(70);
                >div{
                    span{
                        &:first-of-type {
                            font-size: 14px;
                            margin-top: 20px;
                        }
                        &:after {
                            height: 2px;
                            width: 20px;
                            margin-top: 5px;
                            margin-left: 2px;
                        }
                    }
                    p{
                        font-size: 70px;
                    }
                }
                &.banner-1{
                    >div{
                        span {
                            &:first-of-type {
                                font-family: MONOSPACE;
                            }
                            &:last-of-type {
                                position: absolute;
                                right: 33px;
                                top: 80%;
                                font-size: 14px;
                                &:after {
                                    content: "";
                                    height: 2px;
                                    width: 20px;
                                    margin-top: 5px;
                                }
                                &.slide-left {
                                    &:after {
                                        transform: translateX(60px); // left: 100px;
                                    }
                                }
                            }
                        }
                        p{
                            font-size: 70px;
                            margin: torem(80) 0;
                        }
                    }
                }
            }
            .page-tip{
                display: none;
            }
        }
        @media screen and (max-width:414px) {
            .banner{
                >div{
                    p{
                        font-size: 60px;
                        margin: torem(80) 0;
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    .home-page {
        .swiper-container-vertical>.swiper-pagination-bullets {
            right: 70px;
            &:before {
                content: "";
                width: 10px;
                height: 10px;
                border: 1px solid #fff;
                border-radius: 100%;
                display: block;
                position: absolute;
                top: -12px;
                left: -5px;
            }
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 8px solid #fff;
                display: block;
                position: absolute;
                bottom: -10px;
                left: -4px;
            }
            .swiper-pagination-bullet {
                width: 1px;
                height: 1px;
                opacity: 1;
                margin: 25px 0;
                background: #fff;
                transition: height .8s;
                &:last-of-type:after{
                    content: "";
                    width: 0;
                    height: 0;
                    border-left: 3px solid transparent;
                    border-right: 3px solid transparent;
                    border-top: 6px solid #000;
                    display: block;
                    position: absolute;
                    z-index: 1;
                    bottom: -9px;
                    left: -2px;
                }
            }
            .swiper-pagination-bullet-active {
                height: 80px;
                // width: 1px;
                border-radius: 100%;
            }
        }
        @media only screen and (max-width:1024px) {
            .swiper-container-vertical>.swiper-pagination-bullets{
                display: none;
            }
        }
    }
</style>

