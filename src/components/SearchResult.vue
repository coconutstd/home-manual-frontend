<template>
  <div>
    <div class="search-results">
      <div class="container my-2">
        <h1><strong>{{this.$store.state.searchResults["keyword"]}}</strong> 의 검색결과입니다</h1>
        <div class="row">
          <div class="col-12">
            <table class="table table-hover">
              <thead>
              <tr class="sr-only">
                <th>썸네일</th>
                <th>제품명</th>
                <th>카테고리</th>
                <th>브랜드</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <img src="https://picsum.photos/200" alt="썸네일 입니다" class="img-thumbnail" style="width:100px">
                </td>
                <td>
                  <h2>SL-A</h2>
                </td>
                <td>
                  <h2>프린터</h2>
                </td>
                <td>
                  <h2>삼성</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://picsum.photos/200" alt="썸네일 입니다" class="img-thumbnail" style="width:100px">
                </td>
                <td>
                  <h2>SL-B</h2>
                </td>
                <td>
                  <h2>프린터</h2>
                </td>
                <td>
                  <h2>HP</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://picsum.photos/200" alt="썸네일 입니다" class="img-thumbnail" style="width:100px">
                </td>
                <td>
                  <h2>SL-M5370LX</h2>
                </td>
                <td>
                  <h2>프린터</h2>
                </td>
                <td>
                  <h2>삼성</h2>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult"
}
</script>

<style scoped>

.table h2{
  font-size: 10px;
}

@media screen and (min-width: 768px){
  .table h2{
    font-size: 25px;
  }
}
</style>
