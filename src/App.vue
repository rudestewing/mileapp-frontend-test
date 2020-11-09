<template>
    <div class="mx-auto max-w-screen-md px-3">
        <div class="my-5">
            <h1 class="text-center mb-2">
                Frontend Test
            </h1>
            <h3 class="text-center">
                Rudi Setiawan
            </h3>
            <div class="text-center my-3">
                <a href="/" class="underline hover:underline font-semibold text-blue-600"> Home </a>
            </div>
        </div>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: all .4s ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave {
        opacity: 1;
    }
</style>