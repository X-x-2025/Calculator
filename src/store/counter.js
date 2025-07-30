import { defineStore } from "pinia";
import { ref } from "vue";

// 定义store
// defineStore(仓库的唯一标识,() =>{ })
export const useCountStore = defineStore('counter',() => {
        // 声明数据
        
        const prev = ref('')
        const current = ref()
        // const getNumber = (value) => {
        // user.prev = value
        // console.log(value);
    // }
        
        return {
            prev,
            current
        }
    })
   