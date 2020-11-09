<template>
  <div>
    <div class="container">
      <div class="oauth_list">
        <div id="naverIdLogin"></div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return {
      rPath: '',
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
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.oauth_list {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #eeeeee;
  width: 400px;
  height: 400px;
}
</style>
