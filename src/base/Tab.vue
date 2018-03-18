<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
      </router-link>
      <router-link to="/profile">
        <i class="iconfont icon-add"></i>
        <span>我的</span>
      </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      display: flex;
      color:black;
      flex-direction: column;
      flex:1;
      align-items: center;
      justify-content: center;
      i{
        font-size: 20px;
      }
      span{
        font-size: 12px;
      }
    }
    a.router-link-active{
      color: #ffaa21;
      background: rgba(244, 40, 47, 0.2);
    }
  }


</style>
