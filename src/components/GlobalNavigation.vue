<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <h1 class="sr-only">우리집 사용설명서 메뉴바</h1>
      <ul class="navbar-nav nav-items-left col-4 ">
        <li class="nav-item">
          <a href="#" class="navbar-brand">
            <img alt="우리집 사용설명서 로고" src="../assets/logo.png"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            개인모음
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            카테고리
          </a>
        </li>
      </ul>
      <ul class="col-1"></ul>
      <ul class="navbar-nav nav-items-center col-4 ">
        <li>
          <form class="form-inline" action="">
            <input v-model="text" class="form-control mr-sm-2 search-bar" type="text" size="40" placeholder="일련번호를 입력해주세요">
          </form>
        </li>
      </ul>
      <ul class="col-1"></ul>
      <ul class="navbar-nav nav-items-right col-2 ">
        <li class="nav-item">
          <button type="button" class="btn">
            <span class="sr-only">프로필 사진</span>
            <i class="fas fa-id-badge"></i>
          </button>
        </li>
        <li class="nav-item">
          <button v-if="this.$store.state.accessToken===null" type="button" class="btn" @click="onLoginClick">
            <span class="sr-only">유저 정보</span>
            <i class="fas fa-user"></i>
            <!-- 드롭다운 -->
          </button>
          <button v-else @click="onLogoutClick">
            <span>로그아웃</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import router from '../router'

export default {
  data() {
    return{
      text : '안녕하세요'
    }
  },

  methods: {
    onLoginClick(){
      router.push('/login')
    },
    onLogoutClick(){

    }
  }


}
</script>

<style>
.navbar{
  display: flex;
}

.nav-items-left{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-items-left li{
  margin-right: 10px;
}

.navbar-brand img{
  width: 40px;
}

.nav-items-left a{
  display: block;
}

.nav-items-center{
  display: flex;
}
.search-bar{
  width: 50px;
  transform: translateX(-20%);
}

.nav-items-right{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btn{
  margin: 0px 5px;
  border: solid 1px green;
  background-color: aquamarine;
}

</style>
