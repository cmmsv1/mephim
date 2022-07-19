<template>
    <div class="film-list">
        <h2>Danh sách phim</h2>
        <div class="list">
            <div class="action">
                <div class="search-bar">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search ..."
                        />
                    </div>
                    <div class="form-group ml-3">
                        <select class="form-control">
                            <option
                                v-for="(category, id) in moviesCategories"
                                :key="id"
                                :value="category.slug"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <button class="btn right btn-primary">Thêm mới phim</button>
            </div>
            <table id="table">
                <thead>
                    <tr>
                        <th align="center" width="50px">ID</th>
                        <th align="left">Tên phim</th>
                        <th align="left">Tên English</th>
                        <th align="left">Thể loại</th>
                        <th align="left">Ảnh phim</th>
                        <th align="center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(movie, id) in movies.slice(0, pageSize - 1)"
                        :key="id"
                    >
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
                        <td>
                            <div class="center">
                                <i class="fa-solid fa-pencil"></i>
                                <i class="fa-solid fa-trash"></i>
                            </div>
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

                    <li
                        v-for="page in parseInt(totalPage)"
                        :key="page"
                        :class="{ active: page == currentPage }"
                    >
                        <nuxt-link to="#" @click.prevent="currentPage = page">{{
                            page
                        }}</nuxt-link>
                    </li>
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
    data() {
        return {
            pageSize: 7,
            totalPage: 0,
            currentPage: 1,
        }
    },
    computed: {
        ...mapState(['movies', 'moviesCategories']),
    },
    mounted() {
        this.totalPage = this.movies.length / this.pageSize
        console.log(Math.ceil(this.totalPage))
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
    .action {
        display: flex;
        margin-bottom: 20px;
        .btn {
            padding: 10px 10px;
            color: #fff;
            outline: none;
            border: 1px solid #ccc;
            cursor: pointer;
        }
        .btn-primary {
            background-color: #04aa6d;
        }
        .right {
            margin-left: auto;
        }
        .search-bar {
            display: flex;
        }
    }
}
</style>
