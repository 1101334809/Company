<template>
    <div id="app" :class="{'not-scroll':showMenu,'black-app':isProj&&!showMenu}">
        <menu class="menu" :class="{'show':showMenu}">
            <ul>
                <li>
                    <span @click="toPage('home')" :class="{'animate animate01':showMenu}"></span>
                </li>
                <li>
                    <span @click="toPage('project')" :class="{'animate animate01':showMenu}"></span>
                </li>
                <li>
                    <span @click="toPage('services')" :class="{'animate animate01':showMenu}"></span>
                </li>
                <li>
                    <span @click="toPage('about')" :class="{'animate animate01':showMenu}"></span>
                </li>
            </ul>
        </menu>
        <header class="header">
            <a @click="toPage('home')" class="logo"><svg class="icon" :class="{'black-logo':this.isProj&&!showMenu}" aria-hidden="true"><use xlink:href="#icon-logo"></use></svg></a>
            <span class="menu-btn" :class="{'close-btn':showMenu}" @click="showMenu=!showMenu"><i></i></span>
        </header>
        <router-view/>
        <footer class="footer">
            &copy; 2018  BLUE MEDIA · Creative approach to solving problems·
        </footer>
    </div>
</template>

<script>
    import "./assets/iconfont.js"
    export default {
        name: 'App',
        data() {
            return {
                showMenu: false
            }
        },
        computed: {
            isProj() {
                if(this.$route.name)
                    return this.$route.name.indexOf("project") != -1;
                else return false;
            }
        },
        methods: {
            toPage(pageName) {
                this.$router.push({
                    name: pageName
                });
                this.showMenu = false;
            }
        },
        before: (to, from, next) => {
            console.log("asdasdf");
            this.showMenu = false;
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/reset";
    @import "./assets/scss/varlible";
    .o-hide{
        overflow: hidden;
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100%;
        position: relative;
        &.not-scroll {
            overflow: hidden;
            height: 100%;
        }
        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }
        .menu {
            width: 100%;
            height: 100%;
            background: #000;
            position: fixed;
            z-index: 3;
            transform: scale(0);
            transform-origin: right top;
            transition: .6s;
            // backface-visibility: hidden;
            // perspective: 1000;
            &.show{
                transform: scale(1);
            }
            ul {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                li {
                    cursor: pointer;
                    margin: 20px;
                    span {
                        &:before {
                            font-size: 48px;
                            height: 60px;
                            display: block;
                            font-family: PingFangSC-Thin;
                            color: #fff;
                            transition: color .3s;
                            line-height: 1;
                        }
                        opacity: 0;
                        transform: translateX(100px);
                        &.animate{
                            transition: transform .3s,opacity .3s;
                        }
                        &.animate01{
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                    &:hover span:before {
                        font-size: 46px;
                        // font-family: PingFangSC-Medium;
                        color: #4d4df7;
                    }
                    &:first-of-type {
                        span.animate{
                            transition-delay: .3s;
                        }
                        span:before {
                            content: "HOME";
                        }
                        &:hover span:before {
                            content: "首页";
                        }
                    }
                    &:nth-of-type(2) {
                        span.animate{
                            transition-delay: .6s;
                        }
                        span:before {
                            content: "PROJECTS";
                        }
                        &:hover span:before {
                            content: "项目";
                        }
                    }
                    &:nth-of-type(3) {
                        span.animate{
                            transition-delay: .9s;
                        }
                        span:before {
                            content: "SERVICES";
                        }
                        &:hover span:before {
                            content: "服务";
                        }
                    }
                    &:last-of-type {
                        span.animate{
                            transition-delay: 1.2s;
                        }
                        span:before {
                            content: "ABOUT US";
                        }
                        &:hover span:before {
                            content: "关于我们";
                        }
                    }
                }
            }
        }
        .header {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: torem(70) torem(75);
            z-index: 3; // margin: 0 3%;
            height: torem(50);
            position: absolute; // padding: torem(20) 0;
            .logo {
                height: 22px;
                display: inline-block;
                overflow: hidden;
                cursor: pointer;
                .icon{
                    font-size: 182px;
                    color: #fff;
                    transform: translateY(-80px);
                    &.black-logo{
                        color: #000;
                    }
                }
                img {
                    height: 22px;
                } // float: left;
            }
            .menu-btn {
                cursor: pointer;
                width: 30px;
                height: 30px;
                float: right;
                position: relative;
                display: flex;
                align-items: center;
                i {
                    display: inline-block;
                    width: 30px;
                    height: 4px;
                    font-style: normal;
                    vertical-align: middle;
                    background-color: #fff;
                    transition: background-color 1s;
                }
                &:before,
                &:after {
                    content: "";
                    height: 4px;
                    width: 30px;
                    position: absolute;
                    background-color: #fff;
                    transition: transform 1s;
                }
                &:before {
                    top: 0;
                    left: 0;
                }
                &:after {
                    bottom: 0;
                    left: 0;
                }
                &.close-btn {
                    i {
                        background-color: transparent;
                    }
                    &:before {
                        transform: rotate(45deg) translateY(18px);
                    }
                    &:after {
                        transform: rotate(-45deg) translateY(-18px);
                    }
                }
            }
        }
        .footer {
            text-align: center;
            height: torem(50);
            font-size: 12px;
            width: 94%;
            margin: 0 3%;
            color: #fff;
            position: absolute;
            bottom: 0;
            z-index: 3;
        }
        &.black-app {
            .header {
                .menu-btn {
                    &:before,
                    &:after,
                    i {
                        background-color: #000;
                    }
                    &.close-btn {
                        &:before,
                        &:after {
                            background-color: #fff;
                        }
                    }
                }
            }
            .footer {
                color: #9b9b9b;
            }
        }
    }
    @media only screen and (max-width:1024px) {
        #app {
            .header {
                padding: torem(20) torem(25);
                .logo img {
                    height: 15px;
                }
                .menu-btn {
                    width: 20px;
                    height: 20px;
                    i {
                        display: inline-block;
                        width: 20px;
                        height: 2px;
                    }
                    &:before,
                    &:after {
                        content: "";
                        height: 2px;
                        width: 20px;
                    }
                    &.close-btn {
                        &:before {
                            transform: rotate(45deg) translateY(12px);
                        }
                        &:after {
                            transform: rotate(-45deg) translateY(-12px);
                        }
                    }
                }
            }
        }
    }
</style>
