<template>
    <div class="bg-gray-200 min-h-full">
        <div class="bg-blue-800 flex px-4 py-5 justify-end">
            <a href="https://wa.me/6281211335608" target="_blank" class="inline-block text-white text-sm"> Contact us Now  +62 812-1133-5608 </a>
        </div>
        <div class="max-w-screen-lg mx-auto py-10 md:py-20">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'auth',
    
}
</script>