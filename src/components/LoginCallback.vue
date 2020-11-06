<template>

</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "LoginCallback",
  data(){
    return {
      email : '',
      token : null,
      rPath: ''
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
    const that = this
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'p_P6CJqSge7yXo88mCvG',
      isPopup: false
    })
    naverLogin.init()
    naverLogin.getLoginStatus(function(status) {
      if (status) {
        const email = naverLogin.user.getEmail()
        const token = naverLogin.accessToken
        console.log(email)
        console.log(token)
        that.LOGIN({email: email, token: token.accessToken})
      } else {
        console.log('AccessToken이 올바르지 않습니다.')
      }
      that.$router.push(that.rPath)
    })
  },
  methods: {
    ...mapMutations([
      'LOGIN'
    ])
  }
}
</script>

<style scoped>

</style>
