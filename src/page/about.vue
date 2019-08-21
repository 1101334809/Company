<style lang="scss" scoped>
    @import "../assets/scss/varlible";
    .about-page {
        color: #fff;
        background: #141219;
        &.animate {
            .info {
                span {
                    opacity: 1;
                    transform: translateX(0);
                }
                p {
                    &:first-of-type,
                    &:last-of-type {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }
            .service-items ul {
                li {
                    div {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
        }
        .info {
            width: 100%;
            height: 728px;
            box-sizing: border-box;
            padding: 0 70px;
            background: url(../assets/about03.png) no-repeat right;
            background-size: auto 100%;
            div {
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                span {
                    font-size: 18px;
                    font-family: PingFangSC-Regular;
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
                        font-size: 48px;
                        margin: torem(30) 0 torem(80);
                        line-height: 1;
                        font-family: STHeitiSC-Medium;
                        opacity: 0;
                        transform: translateX(-150px);
                        transition: opacity 1.2s, transform 1.2s;
                    }
                    &:last-of-type {
                        opacity: 0;
                        transform: translateX(-150px);
                        transition: opacity 1.2s, transform 1.2s;
                        transition-delay: .8s;
                        width: 269px;
                        font-size: 12px;
                        line-height: 26px;
                        font-family: PingFangSC-Thin;
                    }
                }
            }
        }
        .ad{
            img{
                width: 100%;
            }
        }
        .contact {
            width: 100%; // height: torem(728);
            box-sizing: border-box;
            padding: torem(170) torem(75);
            &.show-ant{
                .address-info{
                    >span{
                        opacity: 1;
                        transform: translateX(0);
                    }
                    p{
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .form{
                    input,textarea,button{
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
            .address-info {
                // display: inline-block;
                width: 30%;
                float: left;
                >span {
                    height: torem(90);
                    font-size: torem(36);
                    font-family: 'Roboto-Light';
                    opacity: 0;
                    transform: translateX(-150px);
                    transition: opacity 1.2s, transform 1.2s;
                }
                p {
                    opacity: 0;
                    transform: translateX(-150px);
                    transition: opacity 1.2s, transform 1.2s;
                    transition-delay: .4s;
                    font-family: 'Roboto-Light';
                    font-size: torem(16);
                    line-height: 2;
                    span {
                        font-family: 'PingFangSC-Ultralight';
                    }
                }
                div {
                    margin-top: torem(50);
                    img {
                        width: torem(78);
                        height: torem(78);
                    }
                }
            }
            .form {
                float: right;
                width: 60%;
                input {
                    width: 45%;
                    color: #fff;
                    margin-bottom: torem(100);
                    background: none;
                    border: none;
                    line-height: torem(40);
                    border-bottom: 1px solid #999;
                    opacity: 0;
                    transform: translateY(100px);
                    transition: opacity 1.2s, transform 1.2s;
                    &:nth-of-type(2n+1) {
                        margin-right: 9%;
                    }
                    &:nth-of-type(n+3) {
                        margin-bottom: torem(80);
                        transition-delay: .4s;
                    }
                }
                textarea {
                    width: 100%;
                    color: #fff;
                    background: none;
                    border: none;
                    border-bottom: 1px solid #999;
                    opacity: 0;
                    transform: translateY(100px);
                    transition: opacity 1.2s, transform 1.2s;
                    transition-delay: .8s;
                }
                button {
                    color: #fff;
                    width: torem(120);
                    height: torem(40);
                    background: none;
                    margin-top: torem(70);
                    border: 1px solid #fff;
                    opacity: 0;
                    transform: translateY(100px);
                    transition: opacity 1.2s, transform 1.2s;
                    transition-delay: 1.2s;
                }
            }
        }
        @media only screen and (max-width:1024px) {
            .info {
                padding: 0 20px;
                background-position: bottom;
                background-size: 100% auto;
            }
            .contact {
                padding: torem(50) 20px;
                .address-info,
                .form {
                    width: 100%;
                    float: none;
                    overflow: hidden;
                    input {
                        width: 100%;
                        margin: torem(40) 0;
                        &:nth-of-type(2n+1) {
                            margin-right: 0;
                        }
                        &:nth-of-type(n+3) {
                            margin-bottom: torem(40);
                        }
                    }
                    button {
                        margin: torem(40) 0;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="about-page" :class="{'animate': show}">
        <div class="info">
            <div>
                <span>忘乎规则，苛求于美；像素之间，精致展现。</span>
                <p>We must forget about<br>rules and realize beauty.</p>
                <p>蓝媒，是中国最具创新力和影响力的新锐文化传播有限公司，以创意为导向，涵盖商务及传统文化等领域的跨界内容制作，致力于打造中国高端视觉设计，以鲜活的创新实力打动市场。</p>
            </div>
        </div>
        <div class="ad">
            <img src="../assets/about01.png" alt="蓝媒工作环境">
        </div>
        <div class="contact" :class="{'show-ant': showForm}">
            <div class="address-info">
                <span>SHANGHAI / CHINA</span>
                <p>
                    <span class="hanzi">中国 上海市虹口区 塘沽路309号 12楼CD座</span><br> Block CD, No. 12, No. 309, Tanggu Road, <br> Hongkou District, Shanghai, China<br>
                    <br> Phone: +21 56482575<br>
                    <br> <span>专案咨询:</span> sherab.halmo@vip.163.com<br> <span>徵才咨询:</span> sherab.halmo@vip.163.com</p>
                <div><img src="../assets/about02.png" alt="二维码"></div>
            </div>
            <div class="form">
                <input type="text" id="interested" placeholder="Interested in">
                <input type="text" id="company" placeholder="Company">
                <input type="text" id="name" placeholder="Name">
                <input type="text" id="email" placeholder="Email">
                <textarea name="message" id="message" cols="30" rows="5" placeholder="You message......"></textarea>
                <button>提交</button>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                showForm: false
            }
        },
        mounted() {
            this.setTitle("蓝媒广告-关于我们");
            setTimeout(() => {
                this.show = true;
                this.init();
            }, 500);
            document.body.className = "";
        },
        methods: {
            setTitle(t) {
                document.title = t;
                var i = document.createElement('iframe');
                i.src = '//m.baidu.com/favicon.ico';
                i.style.display = 'none';
                i.onload = function() {
                    setTimeout(function() {
                        i.remove();
                    }, 9)
                }
                document.body.appendChild(i);
            },
            init() {
                // let windowWidth = document.body.offsetWidth;
                // if(windowWidth<500)this.showForm = true;
                // else{
                    let windowHeight = document.body.offsetHeight,
                        tempOffsetTop = document.querySelector(".address-info").offsetTop,
                        minScrollTop = tempOffsetTop - windowHeight;
                    let scrollFun = (el) => {
                        // console.log(el);
                        if (window.scrollY > minScrollTop) {
                        // if(document.body.scrollTop > minScrollTop){
                            this.showForm = true;
                            window.removeEventListener("scroll", scrollFun);
                        }
                    };
                    window.addEventListener("scroll", scrollFun, {passive: true});
                // }
            }
        }
    }
</script>