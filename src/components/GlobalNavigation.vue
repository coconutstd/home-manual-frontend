<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="./" class="navbar-brand" href="#">우리집 사용설명서</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="./custom_manual" class="nav-link" href="#">개인모음집</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">카테고리</a>
          </li>
          <li class="nav-item">
            <div v-if="isAuth">
              <a href="#" @click="logout" class="nav-link ml-auto mr-3">로그아웃</a>
            </div>
            <div v-else>
              <router-link to="./login" class="nav-link ml-auto mr-3">로그인</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
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
    logout(){
      this.LOGOUT()
      this.$router.push('/login')
    }
  }

}
</script>

<style>
.navbar {
  background-color: #e3f2fd;
}
.navbar-brand {
  font-size: 15px;
}

</style>
