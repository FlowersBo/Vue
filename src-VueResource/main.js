/**
 * Created by Flowers博爵 on 2018/11/10.
 */
/*入口JS文件*/
import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue';
Vue.use(VueResource)
new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})
