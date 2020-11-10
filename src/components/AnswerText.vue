<template>
    <div>
        <p v-if="typeof question.answer == 'string'" class="whitespace-pre-line">
            {{question.answer}}
        </p>
        <ul v-if="typeof question.answer == 'object'" class="list-disc pl-5">
            <li v-for="(answer, idx) in question.answer" :key="idx">
                {{answer}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        question: {
            type: Object
        }
    },

}
</script>