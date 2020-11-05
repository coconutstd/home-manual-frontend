<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <h1 class="sr-only">우리집 사용설명서 메뉴바</h1>
      <ul class="navbar-nav navbar-nav-left">
        <li class="nav-item">
          <a href="#" class="navbar-brand">
            <img alt="우리집 사용설명서 로고" src="../assets/logo.png"
                 style="width:50px; background-color: #8fcafe"></a>
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
      <ul class="navbar-nav">
        <li>
          <form class="form-inline" action="">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
          </form>
        </li>
      </ul>
      <ul class="navbar-nav justify-content-right">
        <li class="nav-item">
          <button type="button" class="btn" style="background-color: #8fcafe">
            <span class="sr-only">유저 정보</span>
            <i class="fas fa-user"></i>
            <!-- 드롭다운 -->
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "GlobalNavigation"
}
</script>

<style>
.navbar{
  display: flex;
  justify-content: space-between;
}
.navbar-nav-left{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
}

.navbar-nav-left nav-item{
  margin-right: 10px;
}

.navbar-brand img{
  display: block;
  width:50px;
  height:50px;
  border-radius: 50%;
}
</style>
