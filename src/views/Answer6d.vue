<template>
    <div>
        <h3>
            Answer 6 D
        </h3>
        <div>
            Expect return object 
        </div>
    </div>
</template>

<script>
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
        Array.from(array_code).forEach((item) => {
            let itemArray = item.split('.');
            console.log(itemArray);
            
        });

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