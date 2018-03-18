<template>
  <div className="reg-panel">
    <NavHeader title="注册"/>
    <div className="reg-logo">
      <img src={require('../../images/profile.png')} alt=""/>
    </div>
    <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
    <input ref={input=>this.password=input}  type="text" placeholder="密码"/>
    <Link to="/login">前往登录</Link>
    <div
      onClick={this.handleReg}
      className="reg-btn">注&nbsp;册</div>
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
