/**
 * Created by Flowers博爵 on 2018/11/13.
 */
import {REQUESTING, REQ_SUCCESS, REQ_FAIL} from './mutations-type';
import axios from 'axios';
export default {
  async search({commit},searchName){
    //跟新状态
    commit(REQUESTING)
    //发送ajax请求
      const url=`https://api.github.com/search/users?q=${searchName}`;
      try{
        const response= await axios.get(url)
        const result=response.data;
        const users=result.items.map(item=>({
          name:item.login,
          url:item.html_url,
          avatar: item.avatar_url
        }))
        //更新成功
        commit(REQ_SUCCESS,{users})
      } catch(e){
        //更新失败
        commit(REQ_FAIL,{err:'网络出错，请刷新重试'})
      }
    }
}
