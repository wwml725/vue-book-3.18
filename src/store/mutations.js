import * as Types from './mutations-types'
const mutations = {
  [Types.ADD_CART](state,book){//默认有一个参数state
    //book是添加的一本书，如果有这本书累加的数量，如果没有数量为1，放到cartList中
    let product = state.cartList.find(item=>item.bookId===book.bookId);
    if(product){
      product.bookCount+=1//只是书添加了一本数据没有刷新，还要更新数组
      state.cartList=[...state.cartList]//用新数组替换掉老数组

    }else{
      book.bookCount = 1;
      //将原有数据改变或者可以替换
      state.cartList=[...state.cartList,book]//用新数组替换掉老数组

    }
  }
}
export default mutations;
