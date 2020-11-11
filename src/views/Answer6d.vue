<template>
    <div>
        <h3>
            Answer 6 D
        </h3>
        <div>
            Expect return object 
        </div>
        <!-- <div>
            <a href="https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6d.vue" target="_blank" class="underline text-blue-700">
                https://github.com/rudestewing/mileapp-frontend-test/blob/master/src/views/Answer6d.vue
            </a>
        </div> -->
    </div>
</template>

<script>
import func from '../../vue-temp/vue-editor-bridge';
export default {
    mounted() {
        let array_code = [
            "1.", 
            "1.1.", 
            "1.2.", 
            "1.3.", 
            "1.4.", 
            "1.1.1.", 
            "1.1.2.", 
            "1.1.3.", 
            "1.2.1.", 
            "1.2.2.", 
            "1.3.1.", 
            "1.3.2.", 
            "1.3.3.", 
            "1.3.4.", 
            "1.4.1.", 
            "1.4.3."
        ];

        let objectCode = {};

        array_code.reduce(function(o, s) {
            return o[s] = {};
        }, objectCode);

        console.log(objectCode);
        
        // Array.from(array_code).forEach((item) => {
        //     let itemArray = item.split('.');
        //     itemArray.pop();
        //     console.log(itemArray);
        //     objectCode[itemArray] = {
        //         ...objectCode
        //     }
        // });

        console.log(objectCode);

        // return :
        // object_code = 
        //         {
        //         "1":{
        //             "1":{
        //                 "1":"1.1.1.", 
        //                 "2":"1.1.2.", 
        //                 "3":"1.1.3."
        //             }, 
        //             "2":{
        //                 "1":"1.2.1.", 
        //                 "2":"1.2.2."
        //             }, 
        //             "3":{
        //                 "1":"1.3.1.", 
        //                 "2":"1.3.2.", 
        //                 "4":"1.3.4."
        //             }, 
        //             "4":{
        //                 "1":"1.4.1.", 
        //                 "3":"1.4.3."
        //             }
        //         }
        
        
    }
}
</script>