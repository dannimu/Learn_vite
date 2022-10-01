<template>
  <div class="layout">
    <learn class="learn" />
    <div class="practise">
      <!-- 数据集中状态管理 -->
      <div>
        <!-- 展示集中仓库变量 -->
        {{store.state.msg}}
        <!-- 子组件与集中仓库变量形成响应式 -->
        <button @click="store.updateMag">改变集中仓库变量的值</button>
      </div>
      <!-- fetch 向后端请求数据   原生JS，是Http数据请求的一种方式 -->
      <div>{{list}}</div>
      <!-- axios  向后端请求数据-->
      <div>
        {{list}}--->{{name}}
        <!-- <button @click="changeAxios">axios 向后端请求数据</button> -->
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.layout{
  .learn{
    text-align: center;
    max-width: 650px;
    float: left;
    overflow-y: auto;
  }
  .practise{
    width: calc(100% - 665px);
    float: right;
    overflow-y: auto;
  }
}
</style>
<script>
import Learn from '../components/Learn/Learn.vue'
export default {
  data() {
    return {
      list:[],
      name:'',
      num:2,
    }
  }, 
  components:{
    Learn
  }, 
  
  //从父组件处，引入集中仓库变量
  inject:['store'],

  // fetch 向后端请求数据   原生JS，是Http数据请求的一种方式
  created(){
    //fetch 返回promise对象    默认get请求
    // fetch('http://127.0.0.1:3000/yinan')
    //   .then((res)=>{
    //     //res.json()将响应回来的body，解析成json()的promise
    //     // console.log(res.json());
    //     return res.json()
    //   }) .then((res)=>{
    //     console.log(res);
    //     this.list = res.aaa
    //   })
    
    // axios  向后端请求数据,基于promise的http库  
    // get请求
    // axios.get('http://127.0.0.1:3000/yinan').then(res=>{
    //   // console.log(res.data);
    //   this.list = res.data
    // })

    // axios  向后端请求数据,基于promise的http库  
    // 默认get请求
    // this.$request('http://127.0.0.1:3000/yinan').then(res => {
    //   console.log(res);
    // })
    
    // post请求
    // www:this.num   向后端 www 传递了this.num 的参数
    // this.$post('http://127.0.0.1:3000/yinan2',{www:this.num})
    // .then(res => {
    //   this.list = res
    //   this.name = res.aaa
    // })
  },
}
</script>