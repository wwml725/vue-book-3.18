<template>
  <div>
    <MHeader :back="true">列表页面</MHeader>
    <Loading id="load" ></Loading>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link tag="li" v-for="(book,index) in books" :key="index" :to="{name:'detail',params:{bid:book.bookId}}">
          <img v-lazy="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <div class="btn-list">
              <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop="addCart(book)">收藏</button>
            </div>

          </div>
        </router-link>
      </ul>
      <div class="more" @click="more" >
        <div v-show="hasMore">加载更多</div>
        <div v-show="!hasMore">别扯了，没有了</div>
      </div>

    </div>
  </div>
</template>
<script>
  import {pagination, removeBook} from '../api';
  import MHeader from '../base/MHeader.vue'
  import Loading from '../base/Loading.vue'
  import * as Types from '../store/mutations-types'


  export default {
    data() {
      //offset:代表偏移量   hasMore：代表更多
      return {msg: 'hello', books: [],offset:0,hasMore:true,isLoading:false}
    },
    //挂载完成之后
    mounted(){
      let scroll = this.$refs.scroll; //获取到要拖拽的元素
      let top = scroll.offsetTop;
      let distance = 0;
      let isMove = false;
      //添加一个滚轮事件
      scroll.addEventListener('touchstart',(e)=> {
        // 滚动条在最顶端时 并且当前盒子在顶端时候 才继续走
        if(scroll.scrollTop !=0 || scroll.offsetTop != top) return
        let start = e.touches[0].pageY; //手指点击的开始
        let move = (e)=>{
          isMove = true;
          //手指触摸屏幕的初始位置
          let current = e.touches[0].pageY;
          //求的拉动的距离 负的就不要了
          distance = current - start;
          if(distance>0){ // 如果大于50了 认为就是50像素
            if(distance<=100){
              scroll.style.top = distance + top +'px';
            }else{
              distance = 100;
              scroll.style.top = top+100+'px';
            }
          }else{
            // 如果不在考虑范围内 移除掉move和end事件
            //如果distance是一个负数，那么就取消touch事件
            scroll.removeEventListener('touchmove',move);
            scroll.removeEventListener('touchend',end);
          }
        };
        let end = (e)=>{
          if(!isMove)return;
          isMove = false;
          clearInterval(this.timer1);
          this.timer1 = setInterval(()=>{ // 一共distance 每次-1
            if(distance<=0){
              clearInterval(this.timer1);
              distance = 0;
              scroll.style.top = top+'px';
              //防止distance<0的时候出发
              scroll.removeEventListener('touchmove',move);
              scroll.removeEventListener('touchend',end);
              this.books = []; // 先清空数据
              //offset设置为初始值
              this.offset = 0;//当数据清空的时候 只有将偏移量设置为0，才会从第一个个开始获取数据
              //这里的hasMore必须是改为true，因为我们这里的hasMore数据是从后台获取的，当我们拉到最后一个的时候，数据就没有了，后台会将hasMore的值改为false，就不能拉取数据了  ，此时如果我们想要执行这个函数中的代码 必须将hasMore改为true
              this.hasMore = true;
              this.getData();
              return
            }
            distance -=1;
            scroll.style.top =top + distance+'px';
          },1);
        };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchend',end);
      },false);
    },
    created() {
      this.getData();
    },
    methods: {
      addCart(book){
        this.$store.commit(Types.ADD_CART,book);
        console.log(this.$store.state.cartList);
      },
      loadMore(){
        clearTimeout(this.timer)
        this.timer = setTimeout(()=>{
          let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
//        console.log(this.$refs.scroll);
//        console.log(scrollTop);
        if(scrollTop+clientHeight+20>scrollHeight){
          this.getData();
        }
        },5);
      },
      more(){
        this.getData();
      },
      //实际上就是前台通过一个接口获取到一个函数方法，前台在函数中传入一个id，后台删除这个id对应的数据
      async remove(id) {
       await removeBook(id);//删除某一项
        //从后台删除之后，要删除前台数据，刷新实现，或者从新获取一下
        //但是最好的方法是在后台删除一遍，再从前台删除一遍
        this.books = this.books.filter((item)=>(item.bookId!=id))
      },
      async getData() {
        if(this.hasMore&&!this.isLoading){
          this.isLoading = true;
          let {books,hasMore} = await pagination(this.offset);
          this.books = [...this.books,...books];
          this.hasMore = hasMore;
          this.offset = this.books.length;//维护偏移量
          this.isLoading = false;
        }


      },

    },
    computed: {

    },
    components: {MHeader,Loading}
  }
</script>
<style scoped>
  .content{
    background-color: white;
  }
  .content ul{
    padding: 10px;
  }
  .content ul li{
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .content ul li img{
    width:130px;
    height: 150px;
  }
  .content h4{
    font-size: 20px;
    line-height: 35px;
  }
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b {
    color: red;
  }
  .content button{
    display: block;width: 60px;height: 25px; background: orangered; color: #fff;border: none; border-radius: 15px; outline: none;
  }
  .more{
    margin: 10px;
    background: #2afedd;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 20px;
  }
  .btn-list{
    display: flex;
    justify-content: space-around;
  }
  #load{
    width:100%;
    height:100px;
    position: relative;
    top:-50px;
  }

  /*.btn-list{*/
    /*display: flex;*/
    /*justify-content: center;*/
  /*}*/
</style>

