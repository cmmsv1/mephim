<template>
    <div>
        <default-header />
        <div class="img">
            <img src="~assets/image/404.png" alt="" />
        </div>
    </div>
</template>
<script>
import DefaultHeader from '~/components/Header/DefaultHeader.vue'
export default {
    components: { DefaultHeader },
    layout: 'blog',
}
</script>
<style lang="scss" scoped>
.img {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
