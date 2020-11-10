<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <router-link to="/" class="navbar-brand" href="#">우리집 사용설명서</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/custom_manual" class="nav-link" href="#">개인모음집</router-link>
          </li>
          <li class="nav-item">
            <div v-if="isAuth">
              <a href="#" @click="logout" class="nav-link ml-auto mr-3">로그아웃</a>
            </div>
            <div v-else>
              <router-link to="/login" class="nav-link ml-auto mr-3">로그인</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input v-model="keyword" class="form-control mr-sm-2" type="search" placeholder="검색어를 입력해주세요" aria-label="Search">
          <button @click.prevent="search" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import router from '../router'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  data() {
    return{
      text : '안녕하세요',
      keyword: '',
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
    ...mapActions([
      'FETCH_RESULTS'
    ]),
    logout(){
      this.LOGOUT()
      this.$router.push('/login')
    },
    search(){
      if (!this.keyword.length) return
      this.FETCH_RESULTS({keyword: this.keyword})
      this.$router.push(`/manual/${this.keyword}`)
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

.form-inline input{
  border: solid 1px white;
}

.form-inline button{
  border: none;
}

@media screen and (min-width: 768px) {
  .navbar-brand {
    font-size: 20px;
  }
}

</style>
