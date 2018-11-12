/**
 * Created by Flowers博爵 on 2018/11/12.
 */
/*路由器对象模块*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Message from '../views/Message.vue';
import MessageDetail from '../views/MessageDetail.vue'
Vue.use(VueRouter);
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News,
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/Message/detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
