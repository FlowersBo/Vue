/**
 * Created by Flowers博爵 on 2018/11/10.
 */
/*入口JS文件*/
import Vue from 'vue';
import store from './vuex/store'
import App from './App.vue';
new Vue({
  el:'#app',
  components:{
    App
  },
  store,
  template:'<App/>'
})
