// document.body.innerHTML = "hello";

//vuex评级组建的交互：找共同的父级组件进行解决  2、跨组件交互：eventBus(发布订阅，可能会造成逻辑混乱，命名冲突等问题)

//vuex主要借鉴了 flux redux（这两种可以在任意环境中使用）
//vuex只能在vue中使用  ，应用于大型项目 ，主要是应用于状态（数据）管理，将数据统一管理

import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
// import logger from 'vuex/dist/logger'//logger()是一个日志插件
import store from './store/index'

// Vue.use(Vuex);
// //创建一个vuex容器  唯一一个
// //状态是一个对象
// let state = {count:0};
// const mutations = {
//   //用来更改状态
//   increase(state,payload){
//     if(isNaN( parseInt(payload)))return;
//     //state是自动放进来的默认就是值得当前state
//     state.count+=payload
//   },
//
//   decrease(){
//     state.count-=1
//   }
// };
// let store = new Vuex.Store({//这个容器是唯一的
//   mutations,
//   state:state,
//   plugins:[logger()],
//   strict:true,//只能通过mutation来更改状态，否则会报错，不支持mutation异步
// });

//做一个计数器
new Vue({
  el:"#app",
  ...App,
  store//store被注册到了实例上，所有组件都有一个属性this.$store
});
