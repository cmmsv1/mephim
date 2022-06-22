<template>
    <div class="loading" :class="{ full: load.full }">
        <div
            :class="{ bg: !load.auth }"
            :style="{ left: `calc(50% - (${load.width})/2)` }"
        >
            <span
                :style="{
                    width: load.width + 'px',
                    height: load.height + 'px',
                    'border-top-color': load.color,
                }"
            ></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['load'],
}
</script>

<style lang="scss" scoped>
.loading {
    @keyframes circle-loading {
        to {
            transform: rotateZ(360deg);
        }
    }

    .bg {
        position: absolute;
        margin: 0 auto;
        top: 50%;
        left: calc(50% - 20px);
    }
    span {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: #fff;
        animation: circle-loading 1200ms ease infinite;
    }
}
.loading.full {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.7);
}
</style>
