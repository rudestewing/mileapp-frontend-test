<template>
    <div>
        <h3>
            Answer 6 A
        </h3>
        <div>
            Swap the values of variables A and B
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        let a = 3;
        let b = 5;

        [a, b] = [b, a];

        console.log('a', a);
        console.log('b', b);
    }
}
</script>