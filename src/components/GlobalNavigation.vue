<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <h1 class="sr-only">우리집 사용설명서 메뉴바</h1>
      <ul class="navbar-nav nav-items-left col-12 col-md-6 col-xl-3">
        <li class="nav-item">
          <router-link to="/" href="#" class="navbar-brand">
            <img alt="우리집 사용설명서 로고" src="../assets/logo.png"></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/custom_manual" class="nav-link" href="#">
            개인모음
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            카테고리
          </a>
        </li>
      </ul>
      <ul class="navbar-nav nav-items-center col-12 col-md-6 col-xl-6 align-self-center">
        <li class="nav-item">
          <form class="form-inline" action="">
            <input v-model="text" class="form-control mr-sm-2 search-bar" type="text" size="40" placeholder="일련번호를 입력해주세요">
          </form>
        </li>
      </ul>
      <ul class="navbar-nav nav-items-right col-12 col-md-6 col-xl-3 justify-content-end">
        <li class="nav-item">
          <button type="button" class="btn">
            <span class="sr-only">프로필 사진</span>
            <i class="fas fa-id-badge"></i>
          </button>
        </li>
        <li class="nav-item">
          <button v-if="isAuth" type="button" class="btn" @click.prevent="logout">
            <span class="sr-only">유저 정보</span>
            로그아웃
            <!-- 드롭다운 -->
          </button>
          <button v-else class="btn">
            <router-link to="/login">Login</router-link>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import router from '../router'
import {mapGetters, mapMutations} from 'vuex'

export default {
  data() {
    return{
      text : '안녕하세요'
    }
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    onLoginClick(){
      router.push('/login')
    },
    logout(){
      this.LOGOUT()
      this.$router.push('/login')
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
/*.search-bar{*/
/*  width: 50px;*/
/*  transform: translateX(-20%);*/
/*}*/

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
