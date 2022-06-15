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
// .root {
//     background-color: #333 !important;
// }
.grid.wide {
    margin-top: 80px;
    .main {
        margin-top: 50px;
    }
}
</style>
