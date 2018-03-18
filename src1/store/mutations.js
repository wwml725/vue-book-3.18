import * as Types from './mutation-types'
let mutations = {
  //用来更改状态
 [Types.INCREASE](state,payload){
    if(isNaN( parseInt(payload)))return;
    //state是自动放进来的默认就是值得当前state
    state.count+=payload
  },

  [Types.DECREASE](state){
    state.count-=1
  }
};

export default mutations
