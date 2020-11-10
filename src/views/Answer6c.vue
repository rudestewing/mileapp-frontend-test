<template>
    <div>
        <h3>
            Answer 6 C
        </h3>
        <div>
            return the number which is called more than 1
        </div>
        <div>
            Duplicates: [ {{duplicates.join(', ')}} ]
        </div>
        <div>
            <a href="https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6c.vue" target="_blank" class="underline text-blue-700">
                https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6c.vue
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            duplicates: [],
        }
    },
    mounted() {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 92, 93, 94, 95, 96, 97, 98, 99, 100];
            
        let filteredArrays = [];
        let duplicates = [];

        Array.from(numbers).forEach(number => {
            let existData = filteredArrays.find((item => {
                return item == number;
            }));

            if(!existData) {
                filteredArrays.push(number);
            } else {
                this.duplicates.push(number);
            }
        });

        console.log('filtered', filteredArrays);
        console.log('duplicates', this.duplicates);
    }
}
</script>