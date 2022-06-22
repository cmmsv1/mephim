<template>
    <div>
        <div v-for="(category, id) in categories" :key="id" class="card">
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
                        <div
                            v-for="(film, id) in category.film"
                            :key="id"
                            class="film"
                        >
                            <nuxt-link :to="{ path: 'movie/' + film.slug }">
                                <div class="film-card">
                                    <img
                                        src="https://s198.imacdn.com/ff/2021/12/15/4d9a3e417ca4e22f_97a8c41b01edf99e_35068163957541383816.jpg"
                                        alt=""
                                    />
                                    <div class="body">
                                        <span class="resolution">FHD</span>
                                        <span class="evaluate"
                                            ><i class="far fa-star"></i
                                            >7.5/10</span
                                        >
                                        <div class="name-film">
                                            <p>{{ film.name }}</p>
                                        </div>
                                        <span class="views"> 158.1k xem </span>
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
    </div>
</template>

<script>
export default {
    props: ['categories'],
}
</script>
