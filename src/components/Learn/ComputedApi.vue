<template>
    <div class="computed-api">
        <h2>独立的 computed 属性 AIP</h2>
        <div>{{message}}-->翻转message字符串-->{{reverseMsg}}</div>
    </div>
</template>
<style lang="less" scoped>
.computed-api{
    border:3px solid rgb(216, 178, 11);
}
</style>
<script>
import {ref,reactive,computed} from 'vue'
export default {
    setup() {
        // const counter = ref(0)
        const message = ref('计算属性')
        //翻转message字符串
        const reverseMsg = computed(()=>{
            return message.value.split('').reverse().join('')
        })
        return{
            message,reverseMsg
        }
    }
}
</script>