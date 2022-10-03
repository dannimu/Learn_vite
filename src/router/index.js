import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    component:() => import('../views/Layout.vue')
    //路由重定向
    // redirect: '/parents',
  },
  { 
    path: '/practise', 
    component:() => import('../views/Practise.vue')
  },

  //动态路由绑定
  { 
    path: '/user/:id', 
    name:'user',
    component:() => import('../views/user.vue'),
  },
  // { 
  //   path: '/user', 
  //   component: User 
  // },

  // 正则表达式控制动态路由后面的参数类型   
  // 例如：动态路由的参数一定是数字。 如果不是数字，将会展示404页面
  // path: '/regular/:id(\\d+)'   为固定写法
  { 
    path: '/regular/:id(\\d+)', 
    component:() => import('../views/regular.vue')
  },

  //嵌套路由
  { 
    path: '/parents',
    component:() => import('../views/parents.vue'),
    children:[
      {
        //path: 'styleone' 不需要加 /
        path: 'styleone',
        component:() => import('../views/styleone.vue'),
      },
      {
        //path: 'styletwo' 不需要加 /
        path: 'styletwo',
        component:() => import('../views/styletwo.vue'),
      },

    ]
  },

  //通过js跳转页面
  { 
    path: '/jump',
    component:() => import('../views/Jump.vue'),
  },


  //今日吃啥
  { 
    path: '/question',
    component:() => import('../views/Question.vue'),
  },




  // 找不到页面 404页面，需要用到正则的方式,匹配任意的
  // path: '/:path(.*)'  为固定写法
  { 
    path: '/:path(.*)', 
    component:() => import('../views/NotFound.vue'),
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 4. 需要导出路由文件
export default router
