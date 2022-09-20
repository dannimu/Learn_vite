<template>
    <div class="combined-api">
        <h2>组合式 API</h2>
        <div>{{name}}</div>
        <div>
            {{counter}}
            <button @click="changeCounter">用方法改变counter一个变量</button>
        </div>
        <div>
            {{practise}}
            <button @click="changePractise">用方法改变practise一个变量</button>
        </div>
        <div>
            {{num}}---->{{text}}
            <button @click="changeOther">一个变量改变两个变量</button>
        </div>
        <div>
            {{obj}}====={{obj.children.gender}}
            <button @click="changeObj">改变对象中属性的值</button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.combined-api{
    border: 3px solid rgb(208, 0, 255);  
}
</style>
<script> 
//ref()只能定义Number和String类型
//reactive()可以定义对象
import {reactive, ref} from 'vue'  
export default {
    //setup()组件被创建之前执行
    //setup() 是围绕beforeCreate created生命周期钩子运行的，所以不需要再次显式地定义它们
    //setup()中不需要使用this.。this.不会指向实例
    setup() {
    //1.简单变量赋值
        const name = '定义变量并展示';

    //2.方法，函数  响应式
        //counter 的逻辑代码 ，ref() 定义Number类型
        //通过ref定义响应式变量
        //相当于给counter变量设置一个默认值为：2     （默认值可以随意改动）
        const counter = ref(2)  //ref()是一个函数,返回带有value属性的对象
        function changeCounter(){
            // counter的属性：value
            counter.value++
        }
        // practise 的逻辑代码，ref() 定义String类型
        const practise = ref('counter变量的默认值') 
        function changePractise() {
            practise.value = '通过方法改变counter 的值' 
        }
        //两个变量一起练习   num和text的逻辑代码
        const num = ref(3)   //ref()只能定义Number和String类型
        const text = ref('aaa')
        function changeOther() {
            num.value += 4
            text.value = 'bbb' 
        }

    //3.reactive()定义对象/引用类型的数据 响应式
        // obj的逻辑代码
        const obj = reactive({
            name:'张三',
            age:18,
            children:{
                gender:'男'
            }
        })
        function changeObj() {
            obj.name = '改变对象中属性的值'
        }
        //所有定义的变量和方法 ，都需要return 返回
        return {
            name,counter,
            changeCounter,
            practise,
            changePractise,
            changeOther,num,
            text,obj,changeObj
        }
    }
}
</script>