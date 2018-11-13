/**
 * Created by Flowers博爵 on 2018/11/13.
 */
import {REQUESTING, REQ_SUCCESS, REQ_FAIL} from './mutations-type';
export default {
  [REQUESTING](state){
    state.firstView=false;
    state.loading=true;
    state.users=[];
    state.err='';
  },
  [REQ_SUCCESS](state,{users}){
    state.loading=false;
    state.users=users;
  },
  [REQ_FAIL](state,{err}){
    state.loading=false;
    state.err=err;
  }
}
