<template>
    <div id="home">
        <!-- new movie -->
        <new-movie v-if="!loading" :movies="newMovies" />
        <category-movie :categories="categoryAndMovies" />
        <loading v-if="loading" :load="load" />
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Loading from '../components/Loading.vue'
import CategoryMovie from '../components/Main/CategoryMovie.vue'
import NewMovie from '~/components/Main/NewMovie.vue'
export default {
    components: {
        NewMovie,
        Loading,
        CategoryMovie,
    },
    auth: false,
    data() {
        return {
            newMovies: [],
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
        ...mapState(['categoryAndMovies']),
    },
    mounted() {
        this.getNewMovie()
        this.$store.dispatch('getCategoryAndMovie')
    },
    methods: {
        async getNewMovie() {
            this.loading = true
            const data = axios.get(`http://localhost:8000/api/getNewMovie`)
            const result = await data
            this.newMovies = result.data
            this.loading = false
        },
    },
}
</script>
