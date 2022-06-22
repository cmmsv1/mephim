<template>
    <div>
        <div id="detail">
            <div class="grid wide">
                <div class="row">
                    <div class="left-item col c-8">
                        <!-- <iframe
                            src="https://www.youtube.com/embed/z34f23cB9PU??rel=0&amp;autoplay=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe> -->
                        <video controls="" autoplay="" name="media">
                            <source
                                :src="episode_movie.link"
                                type="video/mp4"
                            />
                        </video>
                        <div class="content">
                            <h4 class="title">
                                {{ movie.name }}
                                <span>{{ episode_movie.name }}</span>
                            </h4>
                            <p class="eng-title">{{ movie.eng_name }}</p>
                            <p class="view">
                                Lượt xem: <span>{{ movie.view }}</span>
                            </p>
                            <p v-if="seriesMovie" class="update">
                                Cập nhật:
                                <span>{{ movie.episode.length }} / 36</span> tập
                            </p>
                        </div>
                        <div v-if="seriesMovie" class="episode">
                            <div class="grid">
                                <div class="row">
                                    <div
                                        v-for="(
                                            episode, index
                                        ) in movie.episode"
                                        :key="index"
                                        class="col c-2"
                                    >
                                        <nuxt-link
                                            :to="episode.slug"
                                            class="episode-item"
                                            >{{ episode.name }}</nuxt-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="desc">
                            <p>
                                {{ movie.description }}
                            </p>
                        </div>
                    </div>
                    <div class="right-item col c-4">
                        <div class="grid">
                            <div class="row">
                                <div class="col c-6">
                                    <div class="image">
                                        <img
                                            src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="col c-6 body">
                                    <p class="title">
                                        Phim 'Em và Trịnh' chiếu cùng lúc hai
                                        phiên bản
                                    </p>
                                    <p class="time">3 giờ trước</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col c-6">
                                    <div class="image">
                                        <img
                                            src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="col c-6 body">
                                    <p class="title">
                                        Phim 'Em và Trịnh' chiếu cùng lúc hai
                                        phiên bản
                                    </p>
                                    <p class="time">3 giờ trước</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col c-6">
                                    <div class="image">
                                        <img
                                            src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="col c-6 body">
                                    <p class="title">
                                        Phim 'Em và Trịnh' chiếu cùng lúc hai
                                        phiên bản
                                    </p>
                                    <p class="time">3 giờ trước</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-category">
                    <category-movie :categories="categoryAndMovies" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CategoryMovie from '../../../../components/Main/CategoryMovie.vue'
export default {
    components: { CategoryMovie },
    auth: false,
    validate({ params, store }) {
        store.state.movies.forEach((movie) => {
            movie.episode.forEach((item) => {
                if (item.slug === params.slug) {
                    this.check = true
                }
            })
        })
        if (this.check) {
            return true
        }
        return false
    },
    data() {
        return {
            seriesMovie: true,
            episode_movie: {},
            check: false,
        }
    },
    computed: {
        movie() {
            return this.$store.getters.getMovieBySlug(
                this.$route.path.split('/')[2]
            )
        },
        ...mapState(['categoryAndMovies']),
    },
    mounted() {
        this.getEpisode()
        this.$store.dispatch('getCategoryAndMovie')
    },
    methods: {
        getEpisode() {
            const slug = this.$route.params.slug
            this.episode_movie = this.movie.episode.find(
                (item) => item.slug === slug
            )
        },
    },
}
</script>
<style lang="scss" scoped>
#detail {
    display: flex;
    padding-bottom: 50px;
    .left-item {
        width: 100%;
        iframe {
            width: 100%;
            height: 290px;
        }
        video {
            width: 100%;
            height: 290px;
        }
        // margin-right: 10px;
        .content {
            .title {
                color: #ccc;
                font-size: 18px;
                letter-spacing: 0.01rem;
                text-transform: uppercase;
                font-weight: 300;
                margin-top: 10px;
                span {
                    text-transform: uppercase;
                }
            }
            .eng-title,
            .view,
            .update {
                color: #ccc;
                font-size: 14px;
                font-weight: 300;
                margin-top: 10px;
                letter-spacing: 0.01rem;
            }
        }
        .episode {
            margin-top: 20px;
            .row {
                gap: 10px 0px;
                a {
                    border: 1px solid #37a9ce;
                    color: #37a9ce;
                    border-radius: 2px;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: 30px;
                    width: 100%;
                    display: block;
                    font-size: 14px;
                    height: 30px;
                    &:hover {
                        background: rgba(2, 133, 181, 0.2);
                    }
                }
                .nuxt-link-exact-active {
                    background: rgba(2, 133, 181, 0.2);
                }
            }
        }
        .desc {
            margin-top: 30px;
            p {
                color: #ccc;
                font-weight: 300;
                font-size: 14px;
            }
        }
    }
    .right-item {
        padding-left: 0px;
        .grid {
            .row {
                margin-bottom: 10px;
                .body {
                    padding-left: 0px;
                }
                .image {
                    img {
                        width: 100%;
                        height: 85px;
                    }
                }
                .title {
                    font-size: 14px;
                    color: #0285b5;
                    cursor: pointer;
                    &:hover {
                        color: #07bbfc;
                    }
                }
                .time {
                    font-size: 12px;
                    margin-top: 5px;
                    color: #ccc;
                }
            }
        }
    }
    .row-category {
        margin-top: 50px;
    }
}
@media (max-width: 1023px) {
    .right-item {
        display: none;
    }
    .c-8 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>
