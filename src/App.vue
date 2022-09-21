<template>
  <div class="app">
    <p>
      <router-link to="/">go to home</router-link>
      <router-link to="/practise">go to Practise</router-link>
      <!-- 动态路由绑定 -->
      <router-link to="/user/123">动态路由绑定 User</router-link>
      <!-- <router-link to="/user" class="p">go to User</router-link> -->
      <!-- 
        正则表达式控制动态路由后面的参数类型   
        例如：动态路由的参数一定是数字。 
        to="/regular/数字"。 如果不是数字，将会展示404页面
      -->
      <router-link to="/regular/0">正则表达式控制动态路由 regular</router-link>
      <!-- 嵌套路由 -->
      <router-link to="/parents">嵌套路由 父 parents</router-link>
      <!-- 通过js跳转页面 -->
      <router-link to="/jump">通过js跳转页面 jump</router-link>
    </p>
    <router-view />
  </div>
</template>
