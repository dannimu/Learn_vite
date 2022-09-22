//  vue3 中如何设置集中状态管理
//  provide / inject 跨级通信
//  1. 数据要实现响应式
//  (ref  reactive),用reactive定义一个响应式的对象，对象中存储状态，对象中的属性是响应式的
//  2. 如何在app.vue中，通过provide 提供数据

import {reactive} from 'vue'
//创建了一个对象，store相当于一个仓库，定义了一个大的仓库
const store = {
    //state作为store对象中的属性,定义状态
    state:reactive({
        msg:'vue3 中如何设置集中状态管理',
    }),

    //实现也孙子组件响应式
    updateMag(){
        this.state.msg= '子组件与集中仓库变量形成响应式'
    },
}


//导出仓库   （需要app.vue组件引入）
export default store