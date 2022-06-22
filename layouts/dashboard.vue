<template>
    <div class="dashboard">
        <sidebar />
        <div class="box">
            <Nuxt />
        </div>
    </div>
</template>
<script>
import Sidebar from '../components/Dashboard/Sidebar.vue'
export default {
    components: { Sidebar },
}
</script>
<style lang="scss" scoped>
.dashboard {
    display: flex;
    // background: #fff;
    .box {
        width: 100%;
        padding: 20px;
        // border-radius: 20px;
        // box-shadow: 0px 0px 5px 5px rgba($color: #1e293b, $alpha: 0.3);
    }
}
</style>
