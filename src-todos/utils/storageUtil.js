/**
 * Created by Flowers博爵 on 2018/11/11.
 */
/*操作仓库数据的工具模块*/
export default {
  saveTodos(todos){
   return localStorage.setItem('dotos_key',JSON.stringify(todos))
  },
  rendTodos(todos){
    return JSON.parse(localStorage.getItem('dotos_key')||'[]')
  }
}
