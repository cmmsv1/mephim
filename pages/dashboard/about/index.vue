<template>
    <div class="film-list">
        <h2>Danh sách phim</h2>
        <div class="list">
            <table id="table">
                <thead>
                    <tr>
                        <th align="center" width="50px">ID</th>
                        <th align="left">Tên phim</th>
                        <th align="left">Tên English</th>
                        <th align="left">Thể loại</th>
                        <th align="left">Ảnh phim</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movie, id) in movies.slice(0, 7)" :key="id">
                        <td align="center">{{ movie.id }}</td>
                        <td>{{ movie.name }}</td>
                        <td>{{ movie.eng_name }}</td>
                        <td>{{ movie.category.name }}</td>
                        <td>
                            <img
                                :src="movie.image"
                                width="50px"
                                height="50px"
                                alt=""
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="paginate">
                <ul>
                    <li>
                        <nuxt-link to="#"
                            ><span class="material-icons"
                                >keyboard_double_arrow_left</span
                            ></nuxt-link
                        >
                    </li>
                    <li>
                        <nuxt-link to="#"
                            ><i class="fa-solid fa-angle-left"></i
                        ></nuxt-link>
                    </li>

                    <li class="active"><nuxt-link to="#">1</nuxt-link></li>
                    <li><nuxt-link to="#">2</nuxt-link></li>
                    <li><nuxt-link to="#">3</nuxt-link></li>
                    <li><nuxt-link to="#">4</nuxt-link></li>
                    <li><nuxt-link to="#">5</nuxt-link></li>
                    <li>
                        <nuxt-link to="#"
                            ><i class="fa-solid fa-chevron-right"></i
                        ></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="#"
                            ><span class="material-icons"
                                >keyboard_double_arrow_right</span
                            ></nuxt-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    layout: 'dashboard',
    middleware: 'auth',
    computed: {
        ...mapState(['movies']),
    },
}
</script>

<style lang="scss" scoped>
.film-list {
    h2 {
        text-align: center;
    }
    .list {
        margin-top: 40px;
    }
}
</style>
