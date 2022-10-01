<template>
    <div>
       <div>1.计算并返回给定数组 arr [ 1, 2, 3, 4 ]中所有元素的总和  {{reverseNum}} </div>
       <div>2.移除数组 arr [1, 2, 3, 4, 2],中的所有值与 item = 2 相等的元素。不要直接修改数组 arr，结果返回新的数组 {{reverseTwo}}</div>
       <div>3.移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果数组返回 {{reverseThree}}</div>
       <div>4.给数组末尾添加元素 {{reverseFour}} </div>
       <div>5.删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组{{reverseFive}}</div>
    </div>
</template>
<script setup>
import {computed, reactive, ref} from 'vue'
const reverseNum = computed(() => {
    const arr = reactive([1,2,3,4])
    const num = ref(0)
    for(var i in arr){
        num.value += arr[i]
    }
    return num
})
const reverseTwo = computed(() => {
    const arrtwo = reactive([1, 2, 3, 4, 2])
    const newArr = reactive([])
    for(var i in arrtwo){
        if (arrtwo[i] !== 2) {
            newArr.push(arrtwo[i]) 
        }
    }
    return newArr
})
const reverseThree = computed(() => {
    const arrthree = reactive([1, 2, 2, 3, 4, 2, 2])
    const item = ref(2)
    for(var i = arrthree.length-1;i >= 0;i--){
        if (arrthree[i] === item.value) {
            arrthree.splice(i,1)
        }
    }
    return arrthree
})
const reverseFour = computed(() => {
    const arrfour = reactive([1, 2, 3, 4])
    arrfour.push(10)
    return arrfour
})
const reverseFive = computed(() => {
    const arrfive = reactive([1, 2, 3, 4])
    for(var i in arrfive){
        return arrfive.pop() 
    }
})
</script>