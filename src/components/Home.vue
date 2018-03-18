<template>
    <div>
      <MHeader>首页</MHeader>
      <div class="content">
        <div v-if="loading">疯狂加载中</div>
        <template v-else>
          <Swiper :swiperSlides="sliders"></Swiper>
          <div class="container">
            <h3>热门图书</h3>
            <ul>
              <li v-for="hot in hotBooks">
                <img :src="hot.bookCover">
                <b>{{hot.bookName}}</b>
              </li>
            </ul>
          </div>
        </template>

      </div>
    </div>
</template>
<script>
  import MHeader from "../base/MHeader.vue"
  import Swiper from "../base/Swiper.vue"
  import {getAll} from "../api"
    export default {
        data() {
            return {sliders:[],hotBooks:[],loading:true}
        },
      created() {
        this.getData()
       },
        methods: {
          //这样一次发送了两个请求
          async getData(){
            let [sliders,hotBooks] =  await getAll();
            this.sliders = sliders;
            this.hotBooks = hotBooks;
            //轮播图  和热门图书获取完成
            console.log(getAll());
            //等到页面加载完之后
            this.loading=false
          }
        },
        computed: {

        },
        components: {MHeader,Swiper}
    }
</script>
<style scoped lang="less">
  h3{color: #999;padding: 5px 0}
  .container{
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img{width: 100%}
      }
    }
  }
</style>
<style scoped lang="less">
  h3{color: #999;padding: 5px 0}
  .container{
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img{width: 100%}
      }
    }
  }
</style>
