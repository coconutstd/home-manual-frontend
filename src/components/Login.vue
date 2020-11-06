<template>
  <div>
    <div id="naverIdLogin"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted() {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'p_P6CJqSge7yXo88mCvG',
      callbackUrl: `http://localhost:8080/login_callback`,
      isPopup: false ,
      loginButton: {
        color: 'green',
        type: 3,
        height: 60
      }
    })
    naverLogin.init();
  }
}

</script>

<style scoped>

</style>
