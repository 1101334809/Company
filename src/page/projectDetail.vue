<style lang="scss" scoped>
    @import "../assets/scss/varlible";
    .project-detail {
        width: 100%;
        // height: 100%;
        // position: absolute;
        padding-top: 1px;
        color: #4a4a4a;
        background: #fafafa;
        box-sizing: border-box; // padding: torem(150) torem(75) torem(120);
        .pro-header {
            font-family: 'Roboto-Light';
            font-size: 12px;
            margin: torem(150) torem(75) 0 torem(75);
            span {
                margin-right: torem(70);
                &.active {
                    font-family: 'Roboto-Medium';
                    color: #000;
                    &::after {
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
        .pro-info {
            width: 100%;
            background: #fafafa;
            box-sizing: border-box;
            padding: 0 torem(75);
            .info-con {
                width: 100%;
                height: 100%;
                position: relative;
                .close-btn {
                    position: absolute;
                    left: torem(15);
                    top: torem(40);
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    &:before,
                    &:after {
                        content: "";
                        height: 4px;
                        width: 30px;
                        position: absolute;
                        background-color: #4a4a4a;
                    }
                    &:before {
                        top: 0;
                        left: 0;
                        transform: rotate(45deg) translateY(18px);
                    }
                    &:after {
                        bottom: 0;
                        left: 0;
                        transform: rotate(-45deg) translateY(-18px);
                    }
                }
                .info {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    box-sizing: border-box; // padding-top: torem(50);
                    padding-bottom: 120px;
                    .info-left {
                        width: torem(167);
                        margin: torem(230) torem(92) 0 torem(30);
                        span {
                            font-size: torem(24);
                            &:first-of-type {
                                font-family: 'PingFangSC-Regular';
                                opacity: 0;
                                transform: translateX(-150px);
                                transition: opacity .8s, transform .8s;
                                &::before {
                                    content: "";
                                    height: 2px;
                                    width: 20px;
                                    margin-bottom: 5px;
                                    margin-left: 2px;
                                    display: block;
                                    background: #4a4a4a;
                                }
                            }
                            &:last-of-type {
                                margin-top: torem(178);
                                font-family: 'Roboto-Light';
                            }
                        }
                        p {
                            font-size: torem(12);
                            font-family: 'PingFangSC-Thin';
                            margin-top: torem(33);
                            opacity: 0;
                            transform: translateX(-150px);
                            transition: opacity .8s, transform .8s;
                        }
                    }
                    .info-right {
                        flex: 1;
                        height: 100%;
                        overflow: auto;
                        img {
                            &:first-of-type {
                                margin-top: 100px;
                            }
                            &:not(:first-of-type) {
                                margin-top: 80px;
                            }
                            &:last-of-type {
                                margin-bottom: 100px;
                            }
                        }
                    }
                }
                .video {
                    width: 100%;
                    margin: 0 auto;
                    height: 100%;
                    box-sizing: border-box;
                    padding: torem(100) 0 torem(210);
                    .video-box {
                        width: 100%;
                        height: 100%;
                        background: #000;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        video {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
                &.show .info .info-left {
                    span:first-of-type,
                    p {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
            @media only screen and (max-width:1024px) {
                padding: torem(70) 20px;
                .info-con {
                    .close-btn {
                        top: -20px;
                        &:before,
                        &:after {
                            content: "";
                            height: 2px;
                            width: 20px;
                        }
                        &:before {
                            transform: rotate(45deg) translateY(20px);
                        }
                        &:after {
                            transform: rotate(-45deg) translateY(-20px);
                        }
                    }
                    .info {
                        .info-left {
                            width: torem(167);
                            margin: torem(20) torem(30) 0 0;
                            span {
                                &:last-of-type {
                                    margin-top: torem(150);
                                    font-size: torem(16);
                                }
                            }
                            p {
                                margin-top: torem(60);
                            }
                        }
                        .info-right {
                            margin-top: torem(20);
                        }
                    }
                    .video {
                        height: 80%;
                        width: 100%;
                        padding-top: torem(100);
                        .video-box {
                            height: 100%; // width: 100%;
                            video {
                                // height: 216px;
                                height: auto;
                            }
                        }
                    }
                }
            }
        }
        .page-arrow {
            position: absolute;
            right: torem(70);
            bottom: torem(70);
            z-index: 2;
            width: 35px;
            height: 35px;
            border-radius: 100%;
            border: 1px solid #979797; // position: relative;
            display: block;
            cursor: pointer;
            margin-top: torem(15);
            outline: none;
            &.pre-arrow {
                bottom: torem(150);
            }
            i {
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
                height: 26px;
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
                left: 14px;
            }
            &.pre-arrow:after {
                top: 5px;
            }
            &.next-arrow:after {
                bottom: 5px;
            }
            &:hover {
                border-color: #fff;
                background: blue;
                i {
                    color: blue;
                }
                &:before,
                &:after {
                    background-color: #fff;
                }
            }
        }
        @media only screen and (max-width:1024px) {
            // padding: torem(70) 20px;
            .pro-header {
                margin: torem(70) 20px 0;
                span {
                    margin-right: torem(25);
                }
            }
            .page-arrow {
                right: 20px;
                bottom: 40px;
                transform: scale(.8);
                &.pre-arrow {
                    bottom: 80px;
                }
            }
        }
    }
</style>

<template>
    <div class="project-detail">
        <header class="pro-header">
            <span v-for="(type,index) in types" :key="index" v-text="type" :class="{'active':info.type==type}"></span>
        </header>
        <div class="pro-info">
            <div class="info-con" :class="{'show':isShow}">
                <span class="close-btn" @click="closeSelf"></span>
                <div class="info" v-if="info.type!='VIDEO'">
                    <div class="info-left">
                        <div class="des">
                            <span v-text="info.name"></span>
                            <p v-text="info.desc"></p>
                            <span v-text="info.date"></span>
                        </div>
                    </div>
                    <div class="info-right">
                        <div class="img-list">
                            <img v-for="(item,index) in info.source" :key="index" :src="'./static/project/'+item" alt="index">
                        </div>
                    </div>
                </div>
                <div class="video" v-if="info.type=='VIDEO'">
                    <div class="video-box">
                        <video :src="'./static/project/'+info.source" controls></video>
                    </div>
                </div>
            </div>
        </div>
        <span slot="button-prev" @click="prePage" class="page-arrow pre-arrow" v-show="activeIndex!==0"><i>上一个项目</i></span>
        <span slot="button-next" @click="nextPage" class="page-arrow next-arrow" v-show="activeIndex!==projects.length-1"><i>下一个项目</i></span>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    export default {
        name: "projectDetail",
        data() {
            return {
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
                }, {
                    id: "02",
                    num: 2,
                    name: "视频播放",
                    desc: "",
                    category: "企业宣传/商业推广",
                    desImg: "pro-02.png",
                    source: "pro-2-01.mp4",
                    date: "2015/05",
                    type: "VIDEO"
                }, {
                    id: "03",
                    num: 3,
                    name: "AK<br>服装花絮",
                    desc: "",
                    category: "创意拍摄/花絮",
                    desImg: "pro-03.png",
                    source: "pro-3-01.mp4",
                    date: "2017/05",
                    type: "VIDEO"
                }, {
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
                }, {
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
                info: {
                    id: "",
                    num: 0,
                    name: "",
                    desTitle: "",
                    desc: "",
                    category: "",
                    desImg: "",
                    source: [""],
                    date: "",
                    type: ""
                },
                activeIndex: -1,
                isShow: false
            }
        },
        mounted() {
            if (this.$route.params.hasOwnProperty("id")) {
                const tempId = this.$route.params.id;
                if (tempId) {
                    // console.log("success:"+tempId);
                    this.info = this.projects[tempId - 1];
                    console.log(this.info);
                    this.activeIndex = tempId - 1;
                    setTimeout(()=>{
                        this.isShow = true;
                    },200);
                }
            }
            document.body.className = "";
        },
        methods: {
            closeSelf() {
                this.$router.push({
                    name: "project",
                    query: {
                        id: this.$route.params.id
                    }
                });
            },
            prePage() {
                if (this.activeIndex == 0) return;
                this.activeIndex = this.activeIndex - 1;
                this.$router.push({
                    name: "projectInfo",
                    params: {
                        id: this.activeIndex + 1
                    }
                })
                window.scrollTo(0,0);
                this.info = this.projects[this.activeIndex];
            },
            nextPage() {
                if (this.activeIndex == this.projects.length - 1) return;
                this.activeIndex = this.activeIndex + 1;
                this.$router.push({
                    name: "projectInfo",
                    params: {
                        id: this.activeIndex + 1
                    }
                })
                window.scrollTo(0,0);
                this.info = this.projects[this.activeIndex];
            }
        }
    }
</script>