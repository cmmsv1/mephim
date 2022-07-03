<template>
    <div class="header">
        <div class="grid wide">
            <div class="nav">
                <div class="logo">
                    <h4><nuxt-link to="/">MêTuấnAnh</nuxt-link></h4>
                </div>
                <div class="list">
                    <ul>
                        <li
                            v-for="(category, index) in moviesCategories"
                            :key="index"
                        >
                            <nuxt-link :to="{ path: '/' + category.slug }">{{
                                category.name
                            }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="right-element" tabindex="0">
                    <search />
                </div>
            </div>
            <div class="nav-mobile">
                <div class="logo">
                    <h4>
                        <nuxt-link to="/">MêTuấnAnh</nuxt-link
                        ><i class="fa-solid fa-bars" @click="openMenu"></i>
                    </h4>
                </div>
                <div class="menu" :style="{ left: left + 'px' }">
                    <h4>
                        <nuxt-link to="/">MêTuấnAnh</nuxt-link>
                    </h4>
                    <div class="icon-close">
                        <i class="fa-solid fa-xmark" @click="closeMenu"></i>
                    </div>
                    <search />
                    <ul>
                        <li
                            v-for="(category, index) in moviesCategories"
                            :key="index"
                        >
                            <a :href="category.slug">{{ category.name }}</a>
                        </li>
                    </ul>
                </div>
                <div v-if="menuMobile" class="modal" @click="closeMenu">
                    <div class="modal-bg"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import Search from '../Search.vue'
export default {
    components: { Search },
    data() {
        return {
            searchResult: 'Nhập tên phim để tìm kiếm',
            left: -500,
            menuMobile: false,
            // custom loading
            load: {
                width: 40,
                height: 40,
                color: '#0285b5',
                full: false,
            },
            header: [],
        }
    },
    // created() {
    //     this.search = 'sadsadas'
    //     console.log('sadsad')
    // },
    computed: {
        ...mapState(['moviesCategories']),
    },

    methods: {
        openMenu() {
            this.menuMobile = !this.menuMobile
            this.left = 0
        },
        closeMenu() {
            this.menuMobile = !this.menuMobile
            this.left = -500
        },
        // getAllCategory() {
        //     axios.get('http://localhost:8000/api/category').then((res) => {
        //         this.header =
        //     })
        // },
    },
}
</script>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    border-bottom: 1px solid #686565;
    background-color: #333;
    z-index: 10;
    .grid.wide {
        .nav-mobile {
            display: none;
            .logo {
                line-height: 60px;
                margin-right: 40px;
            }

            .menu {
                position: absolute;
                top: 0;
                width: 300px;
                background: rgba(0, 0, 0, 0.8);
                box-shadow: 0 0 10px #999;
                min-height: 100vh;
                padding: 20px 10px;
                z-index: 10;
                transition: ease-in 0.3s;
                .search {
                    .search-bar {
                        position: relative;
                        padding: 0;
                        margin-top: 30px;
                        i {
                            right: 10px;
                        }
                    }
                    .modal-search {
                        display: none;
                        width: 100%;
                        padding: 10px 10px 10px 0px;
                        .modal-f {
                            .search-result {
                                color: #ccc;
                                position: relative;
                                max-height: 100vh;
                                // min-height: 500px;
                                font-size: 15px;
                                .loading {
                                    position: absolute;
                                    top: 0;
                                    left: 50%;
                                    transform: translateX(-50%);
                                }
                            }
                        }
                    }
                }
                &:focus-within {
                    ul {
                        display: none;
                    }
                    .modal-search {
                        display: block;
                    }
                }
                .icon-close {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    i {
                        color: #ccc;
                        font-size: 17px;
                        cursor: pointer;
                    }
                }

                ul {
                    margin-top: 20px;
                    li {
                        list-style: none;
                        padding: 10px 0px;
                        a {
                            color: #0285b5;
                            font-size: 14px;
                            text-transform: capitalize;
                            i {
                                margin-right: 20px;
                                font-size: 16px;
                            }
                            &:hover {
                                color: #07bbfc;
                                i {
                                    color: #07bbfc;
                                }
                            }
                        }
                    }
                }
            }
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                .modal-bg {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.3);
                }
            }
        }
        .nav {
            display: flex;
            margin: 0;
            padding: 0;
            position: relative;
            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 40px;
            }
            .list {
                ul {
                    display: flex;
                    li {
                        list-style: none;
                        margin-right: 1.5rem;
                        font-size: 1.2rem;
                        line-height: 60px;
                        a {
                            text-decoration: none;
                            text-transform: uppercase;
                            font-size: 14px;
                            font-weight: 400;
                            color: #ccc;
                            &:hover {
                                color: #ff4c00;
                            }
                            &.nuxt-link-exact-active {
                                color: #ff4c00;
                            }
                        }
                    }
                }
            }
            .right-element {
                width: 320px;
                position: absolute;
                top: 5px;
                right: 0;
                &:focus-within {
                    .modal-search {
                        display: block;
                    }
                }
            }
        }
    }
}
h4 {
    a {
        text-transform: uppercase;
        color: #ff4c00;
        font-weight: 600;
        letter-spacing: 1px;
    }
    i {
        margin-left: 30px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
}
</style>
