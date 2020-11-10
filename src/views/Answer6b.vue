<template>
    <div>
        <h3>
            Answer 6 B
        </h3>
        <div>
            Find the missing numbers from 1 to 100
        </div>
        <div>
            missingNumbers: [ {{missingNumbers.join(', ')}} ]
        </div>
        <div>
            <a href="https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6b.vue" target="_blank" class="underline text-blue-700">
                https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6b.vue
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            missingNumbers: [],
        }
    },
    mounted() {
        let numbers = [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        
        for (let index = 1; index <= 100; index++) {
            let existNumber = numbers.find((number) => {
                return number == index;
            });

            if(!existNumber) {
                this.missingNumbers.push(index);
            }
        }
        console.log('missing numbers', this.missingNumbers);
    }
}
</script>