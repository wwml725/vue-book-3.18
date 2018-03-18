<template>
  <div className="login">
    <NavHeader title="登录"/>
    <div className="login-logo">
      <img src='../images/profile.png' alt=""/>
    </div>
    <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
    <input ref={input=>this.password=input} type="text" placeholder="密码"/>
    <Link to="/reg">前往注册</Link>
    <div
      onClick={this.handleClick}
      className="login-btn">登&nbsp;录</div>
    <Alert/>
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
<style scoped>

</style>
