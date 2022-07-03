<template>
    <div class="search">
        <div class="search-bar">
            <input v-model="search" type="text" placeholder="Tìm kiếm" />
            <i class="fas fa-search"></i>
        </div>
        <div class="modal-search">
            <div class="modal-f">
                <div class="search-result">
                    <p
                        v-if="dataSearch.length < 1 && search.length < 1"
                        class="text-result"
                    >
                        {{ searchResult }}
                    </p>
                    <p
                        v-if="dataSearch.length < 1 && search.length > 1"
                        class="text-result"
                    >
                        {{ searchResult2 }}
                    </p>
                    <div v-if="dataSearch.length > 0" class="result-item">
                        <div
                            v-for="(item, id) in dataSearch"
                            :key="id"
                            class="item"
                        >
                            <div class="item-img">
                                <nuxt-link
                                    :to="{
                                        name: 'movie-slug',
                                        params: { slug: item.slug },
                                    }"
                                    ><img
                                        src="https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg"
                                        alt=""
                                /></nuxt-link>
                            </div>
                            <div class="item-content">
                                <div class="item-title">
                                    <nuxt-link
                                        :to="{
                                            name: 'movie-slug',
                                            params: { slug: item.slug },
                                        }"
                                        >{{ item.name }}</nuxt-link
                                    >
                                </div>
                                <div class="episode">
                                    <span>2020</span><span>(46/46)</span>
                                </div>
                                <!-- <div class="time">
                                                    <span>2020</span
                                                    ><span>(46/46)</span>
                                                </div> -->
                                <div class="views">
                                    {{ item.view }} lượt xem
                                </div>
                            </div>
                        </div>
                    </div>
                    <loading v-if="loading" :load="load" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from './Loading.vue'

export default {
    components: { Loading },
    data() {
        return {
            searchResult: 'Nhập tên phim để tìm kiếm',
            searchResult2: 'Không tìm thấy phim phù hợp',
            search: '',
            loading: false,
            dataSearch: [],
            load: {
                width: 40,
                height: 40,
                color: '#0285b5',
                full: false,
            },
        }
    },
    watch: {
        search(newValue) {
            this.loading = true
            axios
                .post('http://localhost:8000/searchFilm', {
                    search: newValue,
                })
                .then((res) => {
                    if (res.data) {
                        this.dataSearch = res.data
                    } else {
                        this.dataSearch = []
                    }
                    this.loading = false
                })
        },
        '$route.query'() {
            this.search = ''
        },
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.search {
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
    .modal-search {
        background-color: rgba(0, 0, 0, 0.9);
        width: 320px;
        min-height: 130px;
        z-index: 1;
        padding: 55px 10px 10px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
        .modal-f {
            display: flex;
            min-height: 80px;
            .search-result {
                color: #ccc;
                width: 100%;
                max-height: 300px;
                overflow: auto;
                .text-result {
                    margin-top: 10px;
                }
                &:hover {
                    &::-webkit-scrollbar {
                        display: block;
                    }
                }
                &::-webkit-scrollbar {
                    width: 6px;
                    display: none;
                }
                &::-webkit-scrollbar-track {
                    border-radius: 10px;
                    height: 56px;
                }
                &::-webkit-scrollbar-thumb {
                    background: grey;
                    height: 30px;
                    border-radius: 10px;
                }
                .text-result {
                    text-align: center;
                }
                .result-item {
                    width: 100%;
                    .item {
                        display: flex;
                        gap: 5px 10px;
                        margin-bottom: 10px;
                        .item-img {
                            width: 100px;
                            height: 50px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .item-content {
                            width: calc(100% - 10px - 100px);
                            .item-title {
                                font-size: 13px;
                                margin-top: -4px;
                                max-height: 40px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                cursor: pointer;
                                a {
                                    color: #0285b5;
                                    &:hover {
                                        color: #07bbfc;
                                    }
                                }
                            }
                            .episode,
                            .time {
                                font-size: 11px;
                                margin-top: 4px;
                                color: #0285b5;
                            }
                            .views {
                                color: #888;
                                margin-top: 2px;
                                font-size: 11px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
