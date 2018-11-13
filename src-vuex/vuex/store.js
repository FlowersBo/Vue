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
const state={
   count:0
}
const mutations={
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}
const actions={
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  incrementIfOdd({commit, state}){
    if(state.count%2===1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  },
}
const getters={
  evenOrOdd(state){
    return state.count%2===1 ? '奇数' : '偶数';
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
