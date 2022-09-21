<template>
  <div>
    <h2>jump 跳转页面</h2>
    <button @click="changRouter">$router 跳转页面</button>
  </div>
</template>
<script>
export default {
  methods: {
    changRouter() {
        console.log(this.$router.push);
        // 1.字符串路径
        // this.$router.push('/parents/styleone')

        // 2.带有路径的对象
        // this.$router.push({ path: '/' })

        // 3.命名的路由，并加上参数，让路由建立 url
        // this.$router.push({path:"/user/999"})
        // id: "333" 可以为变量
        this.$router.push({ name: "user", params: { id: "333" } });
        
    },
  },
};
</script>

