<template>
  <div>
    <MHeader :back="true">收藏页面</MHeader>
    <ul class="content">
      <li class="book" v-for="l in cartList">
        <div class="imgDiv">
          <img :src="l.bookCover" alt="">
        </div>
        <div class="bookMsg">
          <h3>{{l.bookName}}</h3>
          <div class="count">
            <div>
              <button class="btn-count">+</button>
              {{l.bookCount}}
              <button class="btn-count">-</button>
            </div>
            <p>小计：{{l.bookCount * l.bookPrice}}</p>
          </div>
          <button class="btn-remove">删除</button>
        </div>
      </li>
      <li class="bookCount">共计{{count}}本</li>
    </ul>
  </div>
</template>
<script>
  /*
  * 这个页面需要什么？？
  *
  * */

  import MHeader from '../base/MHeader.vue'
  //辅助函数 语法糖
  import {mapState, mapGetters} from 'vuex'

  //  console.log(mapGetters('cartList'));

  export default {
    data() {
      return {msg: 'hello'}
    },
    created() {
    },
    methods: {},
    computed: {
      ...mapState(["cartList"]),
      ...mapGetters(["count"]),
//          ...mapGetters([{cart:"cartList"})

//          cart(){
//            return $store.state.cartList
//          }
    },
    components: {MHeader}
  }
</script>
<style scoped lang="less">
  .content {
    width: 100%;
    height: 100%;
    /*margin: 3px;*/
    /*background: red;*/
    .book {
      margin-bottom: 3px;
      border: 1px solid greenyellow;
      width: 100%;
      height: 120px;
      display: flex;
      .imgDiv {
        width: 130px;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .bookMsg {
        width: 100%;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .count {
          display: flex;

          .btn-count{
            width: 20px;
            height: 20px;
            border: none;
            background: #6dffb3;

          }
          p{
            margin-left:20px;
          }
        }
        .btn-remove {
          width: 60px;
          height: 20px;
          border: 1px solid black;
          background: red;
        }
      }

    }

  }


</style>
