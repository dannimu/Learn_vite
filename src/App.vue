<script>
//声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      uname: "张三",
      html_content: "<h2>练习v-html</h2>",
      id: "d1",
      dynamic: "dynamic",
      arr: "dynamic",
      MouseEvent: 'click',
      message:'用计算属性做js翻转字符串',
      monitor:'侦听器',
      question:'',
      answer:'Questions usually contain a question mark. ;-)',
      isActive:false,
      bbb:true,
      items:[
        {message1: 'Foo'},
        {message2: 'Bar' }
      ],
      list:[2,3,9,5,6,7],
      counter:0,
      eventcounter:0,
      changeobject:0,
      formbinding:'表单输入绑定'
    };
  },
  //定义方法
  methods: {
    changeUname() {
      this.uname = "李四";
    }, 
    changeColor() {
      this.id = "d2";
    },
    changeMessager(){
      // console.log('.....methods');
      return this.message.split('').reverse().join('')
    },
    changeList(){
      // this.list[3]='你好'//vue3数组替换元素方式 变量[需要添加到的索引号] = 需要添加的内容
      // this.list.push('jajjajaj','34','j3')   //给数组的末尾添加元素
      // push()   给数组的末尾添加元素
      // pop()    从数组中删除最后一个元素
      // shift()  从数组中删除第一个元素
      // unshift()  从数组第一位添加元素
      // splice()   删除元素，插入元素，替换元素  （比较复杂，用的时候再学习吧）
      // this.list.splice(3,2)
      // sort()   //数组排序  默认从小到大排序
      // this.list.sort()
      // reverse()  //数组反转
      this.list.reverse()
    },
    // number 相当于形参
    addCounter(number){
      this.counter += number
      // console.log('aaaaaa',number);
    },
    // e 相当于形参
    changeCounter(e){
      this.eventcounter += e
      // console.log('....',e);
    },
    //num接收的是changeObject的第1个实参,v接收的是changeObject的第2个实参
    changeObject(num,v){
      this.changeobject += num
      // v 可以打印出来此事件对象
      console.log('[[[[[',v);
    }
  }, 
  //计算属性
  computed:{
    messageresult(){
      // console.log('计算属性');
      return this.message.split('').reverse().join('')
    }
  },
  //侦听器  监听数据的变化，一个数据影响多个数据
  //监听不到对象中的属性的变化
  watch:{
    monitor(newvalue,oldvalue){
      console.log('新111',newvalue);
      console.log('旧222',oldvalue);
    },
    uname(arr,old){
      if (arr.length < 5 || arr.length > 10) {
        console.log('输入框中的内容超出了规定范围');
      } 
      // console.log('新333',arr);
      console.log('旧444',old);
    },
  }
};
</script>

<template> 
  <div class="app">
    <div class="once">
      <div>没有v-once {{ uname }}</div>
      <!-- v-once 仅渲染元素和组件一次，并跳过之后的更新。 -->
      <div v-once>有v-once {{ uname }}</div>
      <!-- 当点击按钮之后，没有v-once{{uname}} 会改变名字。有v-once{{uname}}不会改变名字-->
      <button @click="changeUname">改变名字</button>
    </div>
    <!-- v-html 让内容以html的形式展示 -->
    <div v-html="html_content"></div>
    <!-- v-bind 简写为':'   是一个变量  动态绑定属性的内容 -->
    <div :id="id">
      v-bind绑定简写为':' 属性变成变量。
      <!-- v-on:click简写为 @click   是一个监听事件-->
      <button @click="changeColor">改变样式</button>
    </div>
    <!-- 动态属性 -->
    <div class="once">
      <!--arr是动态属性 相当于一个变量 就需要在data里面定义此变量。dynamic也是一个变量，也需要定义此变量-->
      <div :[arr]="dynamic">动态属性 绑定 (比较复杂，需要多看)</div>
      <button @click="arr = 'class'">改变 动态属性</button>
    </div>
    <!-- 动态事件 -->
    <div class="once">
      <!--arr是动态属性 相当于一个变量 就需要在data里面定义此变量。dynamic也是一个变量，也需要定义此变量-->
      <div :[arr]="dynamic">动态事件 绑定 (比较复杂，需要多看)</div>
      <!--  -->
      <button @[MouseEvent]="arr = 'class'">改变 动态事件</button>
      <button @click="MouseEvent = 'mouseover'"> 鼠标改变 动态属性</button>
    </div>
    <div class="once">
      <!-- js表达式 -->
      <div>js表达式 : {{message.split('').reverse().join('')}}</div>
      <!-- 利用计算属性完成 计算属性变量后方不需要+（）调用 -->
      <div>利用计算属性完成 计算属性变量后方不需要+（）调用： {{ messageresult }}</div>
      <!-- 利用methods方法完成  methods方法后方需要+（）调用 -->
      <div>利用methods方法完成  methods方法后方需要+（）调用 ： {{changeMessager()}}</div>
    </div>
   <!-- watch 侦听器  监听数据的变化 -->
    <div class="once">
      <button @click="monitor = '你好'">侦听器  监听变量 monitor 的值</button>
      <button @click="changeUname">侦听器  监听变量 uname 的值</button>
    </div>
    <!-- v-model 数据的双向绑定-->
    <div class="once">
      <button @click="changeUname">v-model 数据的双向绑定 uname 的值</button>
      <input type="text" v-model="uname">
    </div>
    <!-- class和style绑定 -->
    <div class="once">
      <div  class="aaa">class和style绑定</div>
      <!-- <div :class="{ 类名: boolean }"> -->
      <div :class="{ active: isActive, aaa:bbb}">class和style绑定，放置对象
        <button @click="isActive=!isActive,bbb=!bbb">改变active</button>
      </div>
    </div>
    <!-- 便利数组 -->
    <div class="once">
      <div v-for="(item,key) in items" :key="key">
        <div v-for="(message,i) in item" :key="i">
        便利数组：  {{message}} ---> {{i}}
        </div>
      </div>
      <div v-for="i in list" :key="i">{{i}}</div>
      <button @click="changeList">改变数组</button>
    </div>
    <!-- 监听事件 v-on简写为@-->
    <div class="once">
      <!-- 5 相当于函数的实参 -->
      <div @click="addCounter(5)">addCounter: {{counter}}  </div>
      <!-- 2 相当于函数的实参 -->
      <div @click="changeCounter(2)">changeCounter: {{eventcounter}} </div>
      <!-- 绑定事件，即传递参数，也要有事件对象 -->
      <div @click="changeObject(5,$event)">changeObject: {{changeobject}} </div>
      <!-- 一个事件，绑定多个处理函数 -->
      <div @click="addCounter(5),changeCounter(4)">
        addCounter(5),changeCounter(2) : {{counter}} ----- {{eventcounter}}
      </div>
    </div>
    <!-- 表单输入绑定 -->
    <div class="once">
      <!-- v-model -->
      <div>
        <input type="text" v-model="formbinding">
        <p>{{formbinding}}</p>
      </div>
      <!-- 单选框，v-model为布尔值 -->
      <div>
        <input type="checkbox" v-model="isActive">
        {{isActive}}
      </div>
    </div>
    测试远程推送
  </div>
</template>
<style lang="less" scoped>
.app {
  .once {
    border: 3px solid red;
  }
  #d1 {
    line-height: 50px;
    background-color: rgb(52, 72, 72);
  }
  #d2 {
    line-height: 50px;
    background-color: brown;
  }
  .dynamic {
    color: red;
    font-size: 20px;
  }
  .aaa{
    color: rgb(225, 255, 0);
  }
  .active{
    background: red;
  }
}
</style>
<style lang="less">
button{
  background-color: rgb(114, 114, 112);
}
</style>
