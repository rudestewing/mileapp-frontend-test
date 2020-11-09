<template>
    <a :href="question.answer" class="inline-block px-5 py-2 bg-blue-700 text-gray-200 no-underline hover:no-underline rounded-r-full">
        Go to Answer 
    </a>
</template>

<script>
export default {
    props: {
        question: {
            type: Object
        }
    }
}
</script>