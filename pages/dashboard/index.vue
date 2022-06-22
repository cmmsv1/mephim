<template>
    <div class="main">
        <h2>Tuan anh</h2>
    </div>
</template>

<script>
export default {
    layout: 'dashboard',
    mounted() {
        if (!this.$auth.loggedIn) {
            this.$router.push('/login')
        }
    },
}
</script>
<style lang="scss" scoped>
#app {
    display: flex;
    gap: 0px 2rem;
}
</style>
