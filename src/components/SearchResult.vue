<template>
  <div>
    <div class="search-results">
      <div class="container my-2">
<!--        <h1><strong>{{this.$store.state.searchResults["keyword"]}}</strong> 의 검색결과입니다</h1>-->
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
              <tr v-for="item in this.$store.state.searchResults" :key="item.id">
                <td>
                  <img :src="item.fields.product_image_link" alt="썸네일 입니다" class="img-thumbnail" style="width:100px">
                </td>
                <td>
                  <h2>{{item}}</h2>
                </td>
                <td>
                  <h2>{{item.fields.product_code}}</h2>
                </td>
                <td>
                  <h2>{{ item.fields.product_name }}</h2>
                </td>
                <td>
                  <h2>삼성</h2>
                </td>
              </tr>
              </tbody>
            </table>
<!--            <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: "SearchResult"
  ,
  data() {
    return{
      limit: 0,
    }
  },
  components: {
    InfiniteLoading
  },
  methods: {
    infiniteHandler($state){

    }
  }
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
