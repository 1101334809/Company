<style lang="scss" scoped>
    @import "../assets/scss/varlible";
    .service-page {
        width: 100%;
        height: 100%;
        color: #fff;
        position: absolute;
        background: #141219;
        box-sizing: border-box;
        padding: 0 70px;
        display: flex;
        align-items: center;
        background: url(../assets/services-bg.png) no-repeat #141219;
        background-size: 100% auto;
        &.animate{
            .service-info{
                span{
                    opacity: 1;
                    transform: translateX(0);
                }
                p{
                    &:first-of-type,&:last-of-type{
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
            .service-items ul{
                li{
                    div{
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
        }
        .service-info {
            display: inline-block;
            width: 30%;
            span {
                font-family: PingFangSC-Regular;
                font-size: 18px;
                opacity: 0;
                transform: translateX(-150px);
                transition: opacity 1.2s, transform 1.2s;
                transition-delay: .4s;
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
                &:first-of-type {
                    font-family: STHeitiSC-Medium;
                    font-size: 64px;
                    margin: torem(50) 0;
                    line-height: 1.2;
                    opacity: 0;
                    transform: translateX(-150px);
                    transition: opacity 1.2s, transform 1.2s;
                }
                &:last-of-type {
                    opacity: 0;
                    transform: translateX(-150px);
                    transition: opacity 1.2s, transform 1.2s;
                    transition-delay: .8s;
                    font-family: PingFangSC-Thin;
                    font-size: 12px;
                    line-height: 1.8;
                }
            }
        }
        .service-items {
            width: 70%;
            display: inline-block;
            ul {
                li {
                    width: 33.3%;
                    float: left;
                    margin-bottom: torem(40);
                    text-align: center;
                    div {
                        width: torem(194);
                        height: torem(194);
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        box-sizing: border-box;
                        border: 1px solid transparent;
                        box-shadow: 0 0 3px transparent;
                        transition:opacity 1.2s, transform 1.2s;
                        opacity: 0;
                        transform: translateY(150px);
                        i{
                            width: 1px;
                            height: 0%;
                            background: #fff;
                            position: absolute;
                            transition: height .8s;
                            &:first-of-type{
                                left: 0;
		                        bottom: 0;
                            }
                            &:last-of-type{
                                right: 0;
                                top: 0;
                            }
                        }
                        &:before,&:after {
                            width: 0%;
                            height: 1px;
                            position: absolute;
                            background: #fff;
                            transition: width .4s ease-in-out;
                            content: " ";
                        }
                        &:before {
                            left: 0;
                            top: 0;
                        }

                        &:after {
                            bottom: 0;
                            right: 0;
                        }
                        // transition: opacity 1.2s, transform 1.2s;
                        &:hover{
                            i{
                                &:first-of-type,&:last-of-type{
                                    height: 100%;
                                }
                            }
                            &:before,
                            &:after {
                                width: 100%;
                            }
                        }
                        svg {
                            font-size: torem(80);
                        }
                        span {
                            display: block;
                            line-height: 2;
                            font-size: torem(20);
                        }
                    }
                    &:nth-of-type(2) div{
                        transition-delay: .4s;
                    }
                    &:nth-of-type(3) div{
                        transition-delay: .8s;
                    }
                    &:nth-of-type(4) div{
                        transition-delay: 1.2s;
                    }
                    &:nth-of-type(5) div{
                        transition-delay: 1.6s;
                    }
                    &:nth-of-type(6) div{
                        transition-delay: 2s;
                    }
                }
            }
        }
        @media only screen and (max-width:1024px) {
            padding: 0 20px;
            display: block;
            overflow: auto;
            height: auto;
            position: relative;
            .service-info,.service-items{
                width: 100%;
                margin: torem(100) 0 torem(50);
                float: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .service-items{
                margin: 0;
                ul li{
                    width: 50%;
                }
            }
        }
    }
</style>

<template>
    <div class="service-page" :class="{'animate': showAnimate}">
        <div class="service-info">
            <span>缔造每一种可能</span>
            <p>Make<br>everything<br>possible</p>
            <p>蓝媒为客户提供细致完整、高品质的一站式全方位服务,精准创意地让客户的想法着陆为实，深度完善用户体验。</p>
        </div>
        <div class="service-items">
            <ul>
                <li>
                    <div class="item"><i></i><i></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wangyesheji"></use></svg><span>网页设计</span></div>
                </li>
                <li>
                    <div class="item"><i></i><i></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-pinpaituiguang"></use></svg><span>品牌推广</span></div>
                </li>
                <li>
                    <div class="item"><i></i><i></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-yingshipaishe"></use></svg><span>影视拍摄</span></div>
                </li>
                <li>
                    <div class="item"><i></i><i></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-huodongcehua"></use></svg><span>活动策划</span></div>
                </li>
                <li>
                    <div class="item"><i></i><i></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-yingxiaochuanbo"></use></svg><span>营销传播</span></div>
                </li>
                <li>
                    <div class="item"><i></i><i></i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-guanggaosheji"></use></svg><span>广告设计</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showAnimate: false
            }
        },
        mounted(){
            this.setTitle("蓝媒广告-服务");
            setTimeout(()=>{
                this.showAnimate = true;
            },500);
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
            }
        }
    }
</script>
