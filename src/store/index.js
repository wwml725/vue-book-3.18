import Vue from "vue"
import Vuex from "vuex"
import logger from "vuex/dist/logger"
import mutations from './mutations'
import getters from './getters'

//使用vuex
Vue.use(Vuex);
let state = {
  cartList:[]
};
//创建store实例
export default new Vuex.Store({
  mutations,
  state,
  getters,
  strict:true,//只能用mutations改变
  plugins:[logger()]
});
