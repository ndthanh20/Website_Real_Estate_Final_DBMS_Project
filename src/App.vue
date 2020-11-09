<template>
    <div id="app">
        <header :style="{ 
                'background': headerBackground,
                'color': headerColor,
                'box-shadow': headerShadow}">
            <div class="brand">
                <router-link to="/"><img src="/img/brand.png" /></router-link>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/search">Tìm mua</router-link>
                    </li>
                    <li>
                        <router-link to="/search">Tìm thuê</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Đăng tin</router-link>
                    </li>
                    <li>
                        <router-link to="/agency">Môi giới</router-link>
                    </li>
                    <li>
                        <router-link to="/search">Dự án</router-link>
                    </li>
                    <li>
                        <router-link to="/login">Đăng nhập</router-link>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
            <router-view/>
        </div>
        <footer>
            <div class="footer-columns">
                <div class="footer-column">
                    <h1>Công ty cổ phần Victoria</h1>
                    <ul class="capitalized">
                        <li>Địa chỉ: 144 Xuân Thủy, Cầu Giấy, hà Nội</li>
                        <li>Số điện thoại : +123456789</li>
                        <li>Kênh thông tin số 1 về bất động sản</li>
                    </ul>

                </div>
                <div class="footer-column">
                    <h1>Hướng dẫn</h1>
                    <ul class="capitalized">
                        <li>Báo giá & hỗ trợ</li>
                        <li>Câu hỏi thường gặp</li>
                        <li>Thông báo</li>
                    </ul>

                </div>
                <div class="footer-column">
                    <h1>Quy định</h1>
                    <ul class="capitalized">
                        <li>Quy định đăng tin</li>
                        <li>Quy chế hoạt động</li>
                        <li>Chính sách giải quyết khiếu nại</li>
                    </ul>

                </div>
                <div class="footer-column">
                    <h1>Tổng đài hỗ trợ</h1>
                    <ul class="capitalized">
                        <li>Tổng đài CSKH: 19000019</li>
                        <li>Hỗ trợ : hotro@gmail.com</li>
                        <li>CSKh : cskh@gmail.com</li>
                    </ul>

                </div>
            </div>

        </footer>
    </div>
</template>

<script>
export default {
 
    data() {
        return {
            headerBackground: 'white',
            headerColor: '#888',
            headerShadow: '0 0 20px 0 rgba(0,0,0,.15)',
        }
    },

    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },

    methods: {
        onScroll(event) {
            if (window.pageYOffset > (document.documentElement.clientHeight * 0.80)) {
                this.headerBackground = 'transparent';
                this.headerColor = 'white';
                this.headerShadow = 'none';
            } else {
                this.headerBackground = 'white';
                this.headerColor = '#888';
                this.headerShadow = '0 0 20px 0 rgba(0,0,0,.15)';
            }
        },
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: Montserrat, "Helvetica Neue", Arial, sans-serif;
}
</style>

<style lang="scss" scoped>
#app {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 20px;
    text-transform: uppercase;
    .brand {
        img {
            height: 20px;
        }
    }
    a, a:visited, a:active, a:hover {
        color: #888;
        text-shadow: 1px 1px 2px lightblue, 0 0 1em lightblue, 0 0 0.2em lightblue;
    }
    ul {
        list-style: none;
        margin-bottom: 0;
        li {
            display: inline;
            padding: 15px;
            font-size: 14px;
        }
    }
}

.capitalized {
    text-transform: capitalize;
}

footer {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 13vw;
    padding: 90px;
    margin-top: 113px;
    background: #111;
    color: white;

    .footer-columns {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .footer-column {
            margin-right: 50px;
            font-size: 14px;
            h1 {
                margin-bottom: 25px;
                font-size: 16px;
                font-weight: 800;
                letter-spacing: 1.65px;
                line-height: 1.80em;
                text-transform: uppercase;
            }
            ul {
                list-style: none;
            }
            .footer-contact {
                margin-bottom: 20px;
            }
        }
    }
    .footer-infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ul.footer-summary {
            list-style: none;
            li {
                display: inline;
                margin-right: 7px;
                font-size: 10px;
                letter-spacing: 2px;
                line-height: 15px;
            }
            li.bold {
                font-weight: 800;
            }
            li:after {
                content: "|";
                margin-left: 7px;
            }
            li:last-child:after {
                content: '';
            }
        }
    }
}
</style>
