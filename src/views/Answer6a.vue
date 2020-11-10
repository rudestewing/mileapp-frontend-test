<template>
    <div>
        <h3>
            Answer 6 A
        </h3>
        <div>
            Swap the values of variables A and B
        </div>
        <div>
            <a href="https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6a.vue" target="_blank" class="underline text-blue-700">
                https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6a.vue
            </a>
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