/**
 * Created by Flowers博爵 on 2018/11/12.
 */
/*
vuex的store
*/
import Vue from 'vue';
import Vuex from 'vuex';
//声明使用
Vue.use(Vuex);
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
