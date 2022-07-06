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
        margin: 10px;
        padding: 20px;
        // min-height: 100vh;
        border-radius: 5px;
        box-shadow: 0px 0px 5px 5px rgba($color: #1e293b, $alpha: 0.3);
    }
}
</style>
