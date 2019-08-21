<style lang="scss" scoped>
    @import "../assets/scss/varlible";
    .pro-info {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: 1;
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
                top: torem(140);
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
                box-sizing: border-box;
                // padding-top: torem(50);
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
                        &:last-of-type{
                            margin-top: torem(178);
                            font-family: 'Roboto-Light';
                        }
                    }
                    p{
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
                    img{
                        &:first-of-type{
                            margin-top: 100px;
                        }
                        &:not(:first-of-type){
                            margin-top: 80px;
                        }
                        &:last-of-type{
                            margin-bottom: 100px;
                        }
                    }
                    
                }
            }
            .video{
                width: 100%;
                margin: 0 auto;
                height: 100%;
                box-sizing: border-box;
                padding: torem(180) 0;
                .video-box{
                    width: 100%;
                    height: 100%;
                    background: #000;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    video{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
            &.show .info .info-left{
                span:first-of-type,p{
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }
        @media only screen and (max-width:1024px) {
            padding: torem(70) 20px;
            .info-con{
                .close-btn{
                    top: -20px;
                    &:before,
                    &:after {
                        content: "";
                        height: 2px;
                        width: 20px;
                    }
                    &:before{
                        transform: rotate(45deg) translateY(20px);
                    }
                    &:after{
                        transform: rotate(-45deg) translateY(-20px);
                    }
                }
                .info{
                    .info-left{
                        width: torem(167);
                        margin: torem(20) torem(30) 0 0;
                        span{
                            &:last-of-type{
                                margin-top: torem(150);
                                font-size: torem(16);
                            }
                        }
                        p{
                            margin-top: torem(60);
                        }
                    }
                    .info-right{
                        margin-top: torem(20);
                    }
                }
                .video{
                    height: 80%;
                    width: 100%;
                    padding-top: torem(100);
                    .video-box{
                        height: 100%;
                        // width: 100%;
                        video{
                            // height: 216px;
                            height: auto;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
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
</template>

<script>
    export default {
        name: 'projectInfo',
        props: ["info"],
        data() {
            return {
                isShow: false
            }
        },
        mounted(){
            setTimeout(() => {
                this.isShow = true;
            },100);
        },
        methods:{
            closeSelf(){
                // console.log("this.$parent.showDetail "+this.$parent.showDetail);
                // this.$parent.showDetail = false;
                this.$emit("closeself");
            }
        }
    }
</script>