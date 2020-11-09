<template>
    <p>
        {{question.answer}}
        <ul v-if="typeof question.answer == 'array'">
            <li>
                
            </li>
        </ul>
    </p>
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