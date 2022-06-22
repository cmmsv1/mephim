import axios from 'axios'
export const state = () => ({
    moviesCategories:[],
    movies:[],
    categoryAndMovies:[]
})

export const getters = {
    getMovieByCategory(state,slug){
        return state.movies.filter((movie)=> movie.category.slug === slug )
    },
    getMovieBySlug: (state) => (slug) => {
        return state.movies.find((movie)=> movie.slug === slug )
    },

}
export const mutations ={
    setMovieCategory(state,moviesCategories){
        state.moviesCategories = moviesCategories
    },
    setMovie(state,movies){
        state.movies = movies
    },
    setcategoryAndMovies(state,payload){
        state.categoryAndMovies = payload
    },
   
}
export const actions ={
    async nuxtServerInit({ commit }) {
        const categories = await axios.get('http://localhost:8000/api/category')
        if(categories.data.length > 0){
            commit('setMovieCategory',categories.data)
        }
        const movies = await axios.get('http://localhost:8000/api/film')
        if(movies.data.length > 0){
            commit('setMovie',movies.data)
        }

    },
    getMovieCategory({ commit },slug){
        commit('setMovieCategory',slug)
    },
    getMovieBySlug({state},slug){
        return state.movies.filter((movie)=> movie.slug === slug )
    },
    async getCategoryAndMovie({commit}) {
        const result = await axios.get(
            `http://localhost:8000/api/getCategoryAndFilm`
        )
        commit('setcategoryAndMovies',result.data)
    },
    
   
    
    
    
}