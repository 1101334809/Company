<style lang="scss" scoped>
    @import "../assets/scss/varlible";
    .project-page {
        width: 100%;
        height: 100%;
        position: absolute;
        color: #4a4a4a;
        background: #fafafa;
        box-sizing: border-box;
        // padding: torem(150) torem(75) torem(120);
        .con-box{
            display: flex;
            flex-direction: column;
        }
        .pro-header {
            font-family: 'Roboto-Light';
            font-size: 12px;
            margin: torem(150) torem(75) 0 torem(75);
            span {
                margin-right: torem(70);
                &.active {
                    font-family: 'Roboto-Medium';
                    color: #000;
                    &::after{
                        content: "";
                        display: block;
                        margin-top: 3px;
                        background: #000;
                        height: 1px;
                        width: 100%;
                    }
                }
            }
        }
        .swiper-slide-active .con{
            .con01{
                opacity: 1;
                transform: translateX(0);
            }
            .con02{
                opacity: 1;
                transform: translateY(0);
            }
            .con03{
                opacity: 1;
                transform: translateX(0);
            }
        } 
        .con {
            flex: 1;
            display: flex;
            // justify-content: center;
            align-items: center;
            margin: torem(50) torem(75);
            .con01 {
                margin-right: torem(80);
                margin-bottom: torem(150);
                opacity: 0;
                transform: translateX(-150px);
                transition: opacity .8s, transform .8s;
                h2 {
                    font-weight: normal;
                    font-size: torem(48);
                    font-family: 'PingFangSC-Thin';
                }
                span {
                    font-size: torem(14);
                    font-family: 'PingFangSC-Semibold';
                }
            }
            .con02 {
                position: relative;
                cursor: pointer;
                opacity: 0;
                transform: translateY(150px);
                transition: opacity .8s, transform .8s;
                img {
                    width: torem(400);
                    transition: transform .3s;
                    // &:hover{
                    //     transform: scale(1.2) rotate(3deg);
                    // }
                }
                svg{
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    left: 50%;
                    color: #fff;
                    font-size: torem(78);
                    transform: translate(-50%,-50%);
                }
            }
            .con03 {
                flex: 1;
                min-height: torem(560);
                position: relative;
                opacity: 0;
                transform: translateX(150px);
                transition: opacity .8s, transform .8s;
                .page-tip {
                    position: absolute;
                    top: torem(100);
                    right: 0;
                    z-index: 1;
                    text-align: center;
                    span {
                        font-size: torem(14);
                        display: block;
                        color: #4a4a4a;
                        font-family: 'Roboto-Medium';
                        margin-bottom: torem(10);
                        &:nth-of-type(2) {
                            text-align: center;
                            &::before {
                                content: "";
                                display: inline-block;
                                width: 1px;
                                height: torem(60);
                                background: #979797;
                            }
                        }
                    }
                }
                .page-index {
                    position: absolute;
                    bottom: torem(60);
                    left: torem(100);
                    span {
                        font-family: 'Roboto-Regular';
                        font-size: torem(14);
                        &:before {
                            content: "";
                            height: 1px;
                            width: torem(60);
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: torem(10);
                            background: #979797;
                        }
                    }
                    .con-date {
                        width: torem(80);
                        height: torem(24);
                        margin-top: torem(80);
                        font-family: 'Roboto-Light';
                        font-size: torem(20);
                        color: #4A4A4A;
                    }
                }
            }
        }
        .page-arrow {
            position: absolute;
            right: torem(70);
            bottom: torem(70);
            z-index: 2;
            width: 43px;
            height: 43px;
            border-radius: 100%;
            border: 1px solid #979797;
            // position: relative;
            display: block;
            cursor: pointer;
            margin-top: torem(15);
            outline: none;
            &.pre-arrow{
                bottom: torem(170);
            }
            i{
                position: absolute;
                top: 14px;
                right: 57px;
                white-space: nowrap;
                font-size: torem(14);
                font-style: normal;
                color: #4a4a4a;
                font-family: 'PingFangSC-Light';
            }
            &:before {
                content: "";
                width: 1px;
                height: 33px;
                display: block;
                margin: 5px auto;
                background: #979797;
            }
            &:after {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 100%;
                background: #979797;
                position: absolute;
                left: 18px;
            }
            &.pre-arrow:after {
                top: 5px;
            }
            &.next-arrow:after {
                bottom: 5px;
            }
            &:hover{
                border-color: #fff;
                background: blue;
                i{
                    color: #fff;
                }
                &:before,&:after{
                    background-color: #fff;
                }
            }
        }
        @media only screen and (max-width:1024px) {
            // padding: torem(70) 20px;
            .pro-header{
                margin: torem(70) 20px 0;
                span{
                    margin-right: torem(25);
                }
            }
            .con{
                display: block;
                padding-top: 0;
                margin: 0 20px;
                .con01{
                    margin: torem(20) 0;
                }
                .con02{
                    span{
                        text-align: center;
                        img{
                            width: 80%;
                        }
                    }
                }
                .con03{
                    min-height: torem(180);
                    .page-tip{
                        display: none;
                    }
                    .page-index{
                        bottom: auto;
                        top: 20px;
                        left: 0;
                        width: 100%;
                        span{
                            float: right;
                        }
                        .con-date{
                            margin-top: 0;
                        }
                    }
                }
            }
            .page-arrow{
                right: 20px;
                bottom: 40px;
                transform: scale(.8);
                &.pre-arrow{
                    bottom: 80px;
                }
            }
        }
    }
</style>

<template>
    <div class="project-page">
        <swiper :options="swiperOption" ref="mySwiper1" style="height: 100%;">
            <swiper-slide v-for="pro in projects" :key="pro.id">
                <div class="con-box">
                    <header class="pro-header">
                        <span v-for="(type,index) in types" :key="index" v-text="type" :class="{'active':pro.type==type}"></span>
                    </header>
                    <section class="con">
                        <div class="con01">
                            <h2 v-html="pro.name"></h2>
                            <span v-text="pro.category"></span>
                        </div>
                        <div class="con02" @click="showDetail"><span><img :data-src="'./static/project/'+pro.desImg" :alt="'案例'+pro.id" class="swiper-lazy"><div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div></span>
                        <svg v-show="pro.type=='VIDEO'" class="icon" aria-hidden="true"><use xlink:href="#icon-bofanganniu"></use></svg></div>
                        <div class="con03">
                            <div class="page-tip"><span v-text="pro.id"></span><span></span><span v-text="projectsLength"></span></div>
                            <div class="page-index"><span v-text="pro.id"></span>
                                <div class="con-date" v-text="pro.date"></div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- <pro-info v-if="showDetail" :info="pro" v-on:closeself="showDetail=false"></pro-info> -->
            </swiper-slide>
            <span slot="button-prev" @click="prePage" class="page-arrow pre-arrow" v-show="activeIdx!==0"></span>
            <span slot="button-next" @click="nextPage" class="page-arrow next-arrow" v-show="activeIdx!==projects.length-1"></span>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    // import proInfo from "@/components/pro-info"
    export default {　
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                    lazy: true,
                    navigation: {
                        nextEl: '.next-arrow',
                        prevEl: '.pre-arrow'
                    },
                    on: {
                        transitionStart: () => {
                            this.tranStart();
                        }
                    }
                },
                types: ["PROJECTS", "VIS", "UI", "WEB", "VIDEO"],
                projects: [{
                    id: "01",
                    num: 1,
                    name: "兴岩信息",
                    desc: "兴岩，是国内最具创新力和影响力的新锐文化传播有限公司，以创意为导向，涵盖商务及传统文化等各领域的跨界内容制作，致力于打造中国高端视觉设计，全新专业模式运作机制，以鲜活的创新实力打动市场。",
                    category: "全案品牌设计/推广设计",
                    desImg: "pro-01.png",
                    source: ["pro-1-01.png", "pro-1-02.png", "pro-1-03.png", "pro-1-04.png"],
                    date: "2015/01",
                    type: "VIS"
                },{
                    id: "02",
                    num: 2,
                    name: "视频播放",
                    desc: "",
                    category: "企业宣传/商业推广",
                    desImg: "pro-02.png",
                    source: "pro-2-01.mp4",
                    date: "2015/05",
                    type: "VIDEO"
                },{
                    id: "03",
                    num: 3,
                    name: "AK<br>服装花絮",
                    desc: "",
                    category: "创意拍摄/花絮",
                    desImg: "pro-03.png",
                    source: "pro-3-01.mp4",
                    date: "2017/05",
                    type: "VIDEO"
                },{
                    id: "04",
                    num: 4,
                    name: "乐水",
                    desTitle: "Happywater-乐水",
                    desc: "乐水Happywater是一个集媒体、互联网、餐饮人才，以白领阶层、年轻势力为主流消费群体的水果专属定制的品牌。 在乐水的委托中，要求乐水标志设计一定要体现方果的形象特征，能够围绕行业属性，与消费者互动，形成一个有趣的记忆点。我们以水果横切面形态入手.在这平面图形基础上，巧妙结合水果瓜子与外形图形设计。",
                    category: "品牌推广/标志设计",
                    desImg: "pro-04.png",
                    source: ["pro-4-01.png", "pro-4-02.png", "pro-4-03.png", "pro-4-04.png"],
                    date: "2017/05",
                    type: "VIS"
                },{
                    id: "05",
                    num: 5,
                    name: "Hlin-B",
                    desTitle: "",
                    desc: "融合了艺术家Keith Haring的标志性插画与Coach的Signature经典工艺,彰显美式风格。",
                    category: "网站建设/标志设计",
                    desImg: "pro-05.png",
                    source: ["pro-5-01.png", "pro-5-02.png", "pro-5-03.png", "pro-5-04.png", "pro-5-05.png", "pro-5-06.png"],
                    date: "2017/05",
                    type: "WEB"
                }],
                activeIdx: 0
                // showDetail: false
            }
        },
        components:{ 
            swiper, swiperSlide
            //, proInfo 
        },
        computed: {
            projectsLength() {
                return this.projects.length > 9 ? this.projects.length : "0" + this.projects.length;
            },
            swiper() {
                return this.$refs.mySwiper1.swiper
            }
        },
        mounted() {
            this.setTitle("蓝媒广告-项目");
            if (this.$route.query.hasOwnProperty("id")){
                this.activeIdx = parseInt(this.$route.query.id)-1;
                this.swiper.slideTo(this.activeIdx);
            }
            document.body.className = "o-hide";
        },
        methods:{
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
            prePage(){
                this.swiper.slideTo(this.activeIdx);
            },
            nextPage(){
                this.swiper.slideTo(this.activeIdx);
            },
            tranStart() {
                this.activeIdx = this.swiper.activeIndex;
            },
            showDetail(){
                this.$router.push({
                    name: "projectInfo",
                    params: {
                        id: this.activeIdx + 1
                    }
                })
            }
        }
    }
</script>