<template>
    <div class="root">
        <div>
            <default-header />
            <div class="grid wide">
                <default-banner />
                <div class="main">
                    <Nuxt />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DefaultHeader from '@/components/Header/DefaultHeader.vue'
import DefaultBanner from '~/components/Banner/DefaultBanner.vue'
export default {
    components: {
        DefaultHeader,
        DefaultBanner,
    },
}
</script>
<style scoped lang="scss">
.root {
    background-color: #333 !important;
    min-height: 100vh;
}
.grid.wide {
    padding-top: 50px;
    .main {
        margin-top: 50px;
    }
}
</style>
