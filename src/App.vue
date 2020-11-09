<template>
    <component :is="layoutName">
        <router-view></router-view>
    </component>
</template>

<script>
export default {
    computed: {
        layoutName() {
            let name;

            if(!this.$route.meta.layout) {
                return 'layout-default';
            }

            switch (this.$route.meta.layout) {
                case 'auth':
                    name = 'layout-auth';
                    break;
            
                default:
                    name = 'layout-default';
                    break;
            }

            return name;
        }
    }
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