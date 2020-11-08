<template>
  <div class="container my-1">
    <div class="row">
      <div class="col-12">
        <h1 class="user-email" v-if="isAuth">{{this.$store.state.email}} 님 안녕하세요</h1>
        <main>
          <p class="main-desc">
            우리집 사용설명서 <br/><strong>한국형 통합 사용설명서</strong> 검색서비스입니다.<br/>
            로그인하시면 내가 원하는 설명서들을 한곳에 모을 수 있는
            <strong>개인모음집</strong> 서비스를 사용할 수 있습니다.
          </p>
          <form action="#" method="post" class="search-form">
            <div class="input-group">
              <input class="search-form-input" type="text" placeholder="제품번호를 입력해주세요"/>
              <button class="search-form-button btn" type="submit" @click.prevent>검색</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      msg : 'Home'
    }
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
  }
}
</script>

<style>
body{
  background-color: #8fcafe;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transform: translateY(-10%);
}

.user-email{
  font-size: 20px;
}

.search-form-input{
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  padding: 0 10px;
  margin-bottom: 10px;
}

.search-form-button{
  background-color: #fff;
  width: 100%;
  height: 48px;
}

@media screen and (min-width: 768px) {
  .user-email{
    font-size: 30px;
  }

  .main-desc{
    text-align: center;
  }
}
</style>
