<template>
  <div className="profile">
    <div className="profile-bg">
      <img src='../images/profile.png'/>
      <div>
        {
        this.props.user ? <p>{this.props.user.username}</p> : <Link to="/login">登录</Link>
        }
      </div>
      {
      this.props.user&&<div onClick={this.handleLogout}>退出</div>
      }
    </div>
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
