/**
 * Created by Flowers博爵 on 2018/11/10.
 */
/*入口JS文件*/
import Vue from 'vue';
import router from './router'
import App from './App.vue';
new Vue({
  el:'#app',
  components:{
    App
  },
  router,
  template:'<App/>'
})
