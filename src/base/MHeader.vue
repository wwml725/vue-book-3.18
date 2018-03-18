<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
  </div>
</template>
<script>
    export default {
        props:{
            back:{
                type:Boolean,
                default :false,
            }
        },

        methods:{
            goback(){
              this.$router.go(-1)
            }
        }
    }
</script>
<style scoped lang="less">
  .header{
    position: fixed;
    right:0;
    top:0;
    background: #afd9ee;
    height:40px;
    width:100%;
    text-align: center;
    font-weight: bold;line-height: 40px;
    i{
      position: fixed;
      left:10px;
      top:0;
    }

  }
</style>

