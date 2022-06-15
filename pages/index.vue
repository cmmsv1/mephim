<template>
  <div id="home">
    <!-- new movie -->
    <new-movie />
    <!-- phim chiếu rạp -->
  </div>
</template>
<script>
import NewMovie from '~/components/Main/NewMovie.vue'
export default {
  components: {
    NewMovie,
  },
}
</script>
