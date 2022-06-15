<template>
  <div>
    <div v-if="!loading" class="card">
      <div class="title">
        <h3>
          <i class="fas fa-video"></i
          ><nuxt-link :to="{ path: category.slug }">{{
            category.name
          }}</nuxt-link
          ><i class="fas fa-chevron-right"></i>
        </h3>
      </div>
      <div class="list">
        <div class="list-end">
          <div class="row-list">
            <div v-for="(movie, id) in movies" :key="id" class="film">
              <nuxt-link :to="{ path: 'movie/' + movie.slug }">
                <div class="film-card">
                  <img
                    src="https://s198.imacdn.com/ff/2022/05/23/849686af47410e42_46e7514707381f9b_34763165330394113816.jpg"
                    alt=""
                  />
                  <div class="body">
                    <span class="resolution">FHD</span>
                    <!-- <span class="evaluate"
                                        ><i class="far fa-star"></i>7.5/10</span
                                    > -->
                    <div class="name-film">
                      <p>{{ movie.name }}</p>
                    </div>
                    <span class="views">{{ movie.view }} lượt xem </span>
                    <span class="times">110 phút</span>
                  </div>
                  <div class="banner">
                    <p>Vietsub</p>
                  </div>
                  <div class="play">
                    <i class="fas fa-play"></i>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loading" :load="load" />
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Loading from '~/components/Loading.vue'
export default {
  components: { Loading },
  validate({ params, store }) {
    store.state.moviesCategories.forEach((category) => {
      if (category.slug === params.slug) {
        this.check = true
      }
    })
    if (this.check) {
      return true
    }
    return false
  },
  asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  data() {
    return {
      check: false,
      movies: [],
      category: {},
      loading: false,
      load: {
        width: 60,
        height: 60,
        color: '#0285b5',
        full: true,
      },
    }
  },
  // async fetch() {
  //     await this.getSingleMovie()
  // },

  // // delay for fetching
  // fetchDelay: 1000,
  computed: {
    ...mapState(['moviesCategories']),
  },
  mounted() {
    this.getMovieByCategory()
    this.getCategoryBySlug()
  },
  methods: {
    async getMovieByCategory() {
      this.loading = true
      const data = axios.get(
        `http://localhost:8000/api/getFilmByCategory/${this.$route.params.slug}`
      )
      const result = await data
      if (this.$route.params.slug === 'phim-bo') {
        this.movies = result.data.data.filter(
          (movie) => movie.episode.length > 0
        )
      } else {
        this.movies = result.data.data
      }
      this.loading = false
    },
    getCategoryBySlug() {
      this.moviesCategories.forEach((category) => {
        if (category.slug === this.$route.params.slug) {
          this.category = category
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  .list {
    .list-end {
      margin-top: 10px;
      .row-list {
        flex-wrap: wrap;
        .film:nth-child(1),
        .film:nth-child(2) {
          flex-basis: calc((100% - 30px) / 4);
          height: 346px;
        }
        .film {
          flex-basis: calc((100% - 30px) / 4);
          height: 346px;
          .body {
            bottom: 0px;
            padding-bottom: 3px;
            background-image: linear-gradient(
              180deg,
              hsla(0, 0%, 100%, 0),
              rgba(0, 0, 0, 0.39) 34%,
              #000 87%
            );
          }
        }
      }
    }
  }
}
</style>
