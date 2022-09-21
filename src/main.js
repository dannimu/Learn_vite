import { createApp } from 'vue'
import router from './router'
import './style.css'
// ./App.vue 为根组件
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
//先 app.use() 后 app.mount('#app') 顺序不能颠倒
app.use(ElementPlus)
app.use(router)
app.mount('#app')


// app.mount('#app')
 


// // 创建并挂载根实例
// const app = Vue.createApp({})
// //确保 _use_ 路由实例使
// //整个应用支持路由。
// app.use(router)

// app.mount('#app')

// // 现在，应用已经启动了！