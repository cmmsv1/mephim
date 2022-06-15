<template>
  <div>
    <div v-if="!loading" id="detail">
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
                src="https://scontent.cdninstagram.com/v/t39.25447-2/10000000_4834122813359196_2612785914057900837_n.mp4?_nc_cat=103&amp;vs=89729fbd54b06b21&amp;_nc_vs=HBksFQAYJEdJQ1dtQUJjUkJmdG15d1JBQ1hEa0JueWVrSWtibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFDSDRMM19lR0FMQURmMGhMdzhERFlPYnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm2pWM%2B%2BSb1QUVkE4oAkMzGAt2dHNfcHJldmlldxwXQKVhcKPXCj0YKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGw%2BIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzY3OTIzOTI0NjUxNTAxNRJvZW1fdmlkZW9fYXNzZXRfaWQPNzQ5NDU2NzUyODkyMjU5FW9lbV92aWRlb19yZXNvdXJjZV9pZBAxNTk0NzY5MjY3NTkwNTA5HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNjkwMjU1NjYyMjc5MDg1DnZ0c19yZXF1ZXN0X2lkDzVjODM0ZTFkMjliNzQxNSUCHBwcFfDmFxsBVQACGwFVAAIcFQIAAAAWgLq3AwAlxAEbB4gBcwQzNzE1AmNkCjIwMjItMDYtMDkDcmNiATADYXBwBVZpZGVvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwgyNzM2Ljc0NwJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&amp;ccb=1-7&amp;_nc_sid=41a7d5&amp;_nc_ohc=gTy5Eb-iORcAX_cW3gh&amp;_nc_ht=video-frt3-2.xx&amp;oh=00_AT-ILrkxDnE9u6POGhkUOPvKOI13jArmoN8F-f5C6S_gXQ&amp;oe=62A7CE80&amp;_nc_rid=824802483496994"
                type="video/mp4"
              />
            </video>
            <div class="content">
              <h4 class="title">
                {{ movie.name }}
                <span v-if="checkFilm">TẬP 14</span>
              </h4>
              <p class="eng-title">{{ movie.eng_name }}</p>
              <p class="view">
                Lượt xem: <span>{{ movie.view }}</span>
              </p>
              <p v-if="checkFilm" class="update">
                Cập nhật:
                <span>{{ movie.episode.length }} / 36</span> tập
              </p>
              <p v-if="!checkFilm" class="time">Thời lượng: 120 phút</p>
            </div>
            <div v-if="checkFilm" class="episode">
              <div class="grid">
                <div class="row">
                  <div
                    v-for="(episode, index) in movie.episode"
                    :key="index"
                    class="col c-2"
                  >
                    <nuxt-link :to="episode.slug" class="episode-item">{{
                      episode.name
                    }}</nuxt-link>
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
                    Phim 'Em và Trịnh' chiếu cùng lúc hai phiên bản
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
                    Phim 'Em và Trịnh' chiếu cùng lúc hai phiên bản
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
                    Phim 'Em và Trịnh' chiếu cùng lúc hai phiên bản
                  </p>
                  <p class="time">3 giờ trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="loading" :load="load" />
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
// import { mapActions } from 'vuex'
export default {
  components: { Loading },
  validate({ params, store }) {
    store.state.movies.forEach((movie) => {
      if (movie.slug === params.slug) {
        this.check = true
      }
    })
    if (this.check) {
      return true
    }
    return false
  },

  data() {
    return {
      seriesMovie: true,
      check: false,
      checkFilm: true,
      loading: false,
      load: {
        width: 60,
        height: 60,
        color: '#0285b5',
        full: true,
      },
    }
  },

  computed: {
    movie() {
      return this.$store.getters.getMovieBySlug(this.$route.params.slug)
    },
  },
  mounted() {
    if (this.movie.typeFilm === 'phim-bo' && this.movie.episode.length > 0) {
      this.$router.push(`/movie/${this.$route.params.slug}/tap-1`)
    } else {
      this.checkFilm = false
    }
  },
}
</script>
<style lang="scss" scoped>
#detail {
  display: flex;
  margin-bottom: 50px;
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
        font-weight: 500;
        text-transform: uppercase;
        margin-top: 10px;
      }
      .eng-title,
      .view,
      .update,
      .time {
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
          line-height: 30px;
          width: 100%;
          display: block;
          font-size: 14px;
          height: 30px;
          &:hover {
            background: rgba(2, 133, 181, 0.2);
          }
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
