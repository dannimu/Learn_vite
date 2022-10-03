<template>
    <div>
       <div>1.计算并返回给定数组 arr [ 1, 2, 3, 4 ]中所有元素的总和  {{reverseNum}} </div>
       <div>2.移除数组 arr [1, 2, 3, 4, 2],中的所有值与 item = 2 相等的元素。不要直接修改数组 arr，结果返回新的数组 {{reverseTwo}}</div>
       <div>3.移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果数组返回 {{reverseThree}}</div>
       <div>4.给数组末尾添加元素 {{reverseFour}} </div>
       <div>5.删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组{{reverseFive}}</div>
       <div>
           <div>练习时间选择器</div>
           <div>{{currentDate}}======{{datetime}}</div>
           <van-cell is-link @click="showPopup">选择时间</van-cell>
           <van-popup v-model:show="show">
                <van-datetime-picker
                    v-model="currentDate"
                    type="datetime"
                    title="选择完整时间"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm = confirm
                    />
            </van-popup>
       </div>
    </div>
</template>
<script setup>
import { DatetimePicker , Popup} from 'vant';
import {computed, reactive, ref} from 'vue'
    const minDate = ref(new Date(2020, 0, 1)) 
    const maxDate= ref(new Date(2025, 0, 1)) 
    const currentDate = ref('')
    const show = ref(false)
    function showPopup() {
        show.value = true;
    }
    function confirm() {
        show.value = false;
    }
    const datetime = computed((fmt) => {
        currentDate.value = new Date()
        const o = {
            "M+": currentDate.value.getMonth() + 1,                   //月份
            "d+": currentDate.value.getDate(),                        //日
            "h+": currentDate.value.getHours(),                       //小时
            "m+": currentDate.value.getMinutes(),                     //分
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace.value(RegExp.$1, (currentDate.value.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace.value(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
            }
        }
        function datetime(v){
            return new Date(v*1000).format('yyyy/MM/dd hh:mm')
        }
        return currentDate
    })
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