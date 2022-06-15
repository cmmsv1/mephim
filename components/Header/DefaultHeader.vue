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
                        <!-- <li>
                            <nuxt-link to="/movietheaters"
                                >Phim chiếu rạp</nuxt-link
                            >
                        </li>
                        <li>
                            <nuxt-link to="/oddmovie">Phim lẻ</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/seriesmovie">phim bộ</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/american">mỹ</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/korea">hàn</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/japan">nhật</nuxt-link>
                        </li> -->
                    </ul>
                </div>
                <div class="right-element" tabindex="0">
                    <div class="search-bar">
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Tìm kiếm"
                        />
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="modal-search">
                        <div class="modal">
                            <div class="search-result">
                                <span v-if="search.length < 1">{{
                                    searchResult
                                }}</span>
                                <loading
                                    v-if="search.length > 0"
                                    :load="load"
                                />
                            </div>
                        </div>
                    </div>
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
                    <div class="search-bar">
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Tìm kiếm"
                        />
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="search-result">
                        <span v-if="search.length < 1">
                            {{ searchResult }}</span
                        >
                        <loading v-if="search.length > 0" :load="load" />
                    </div>
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
import Loading from '../Loading.vue'
export default {
    components: { Loading },
    data() {
        return {
            searchResult: 'Nhập tên phim để tìm kiếm',
            left: -500,
            search: '',
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
    // mounted() {
    //     this.getAllCategory()
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
                .search-result {
                    display: none;
                    color: #ccc;
                    position: relative;
                    font-size: 15px;
                    .loading {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
                &:focus-within {
                    ul {
                        display: none;
                    }
                    .search-result {
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
                .search-bar {
                    position: relative;
                    padding: 0;
                    margin-bottom: 20px;
                    margin-top: 30px;
                    i {
                        right: 10px;
                    }
                }
                ul {
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
                .modal-search {
                    background-color: rgba(0, 0, 0, 0.8);
                    width: 320px;
                    min-height: 130px;
                    z-index: 1;
                    padding: 40px 10px 10px 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    display: none;
                    .modal {
                        display: flex;
                        min-height: 80px;
                        .search-result {
                            margin: auto;
                            color: #ccc;
                        }
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

.search-bar {
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 20;
    padding: 0px 10px;
    margin-top: 12px;
    input {
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
        padding: 6px 10px;
        background: 0 0;
        border: 1px solid #444;
        color: #fff;
        &:focus {
            outline: none;
            border-color: #0285b5;
        }
    }

    i {
        position: absolute;
        top: 8px;
        right: 25px;
        color: #ccc;
        cursor: pointer;
        &:hover {
            color: #ff4c00;
        }
    }
}
</style>
