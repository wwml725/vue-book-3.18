import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import logger from 'vuex/dist/logger'//logger()是一个日志插件


Vue.use(Vuex);
//创建一个vuex容器  唯一一个
//状态是一个对象
let state = {count:0};
let getters = {
  //默认为state的计算属性（computed）
  val:()=>state.count%2?'基数':'偶数'
};

  export default  new Vuex.Store({//这个容器是唯一的
  mutations,
  getters,
  state:state,
  plugins:[logger()],
  strict:true,//只能通过mutation来更改状态，否则会报错，不支持mutation异步
});
