<template>
  <div data-app>
    <DataResult :items="Array.from(searchResults)"></DataResult>
  </div>

<!--  <div>-->
<!--    <div class="search-results">-->
<!--      <div class="container my-2">-->
<!--        <h1 v-if="isSearchResult" class="search-title"><strong>"{{keyword}}"</strong> 의 검색결과입니다</h1>-->
<!--        <h1 v-else class="search-title"><strong>"{{ keyword }}"</strong> 의 검색결과가 없습니다</h1>-->
<!--        <div class="row">-->
<!--          <div class="col-12">-->
<!--            <table class="table table-hover">-->
<!--              <thead>-->
<!--              <tr class="sr-only">-->
<!--                <th>썸네일</th>-->
<!--                <th>제품명</th>-->
<!--                <th>카테고리</th>-->
<!--                <th>브랜드</th>-->
<!--              </tr>-->
<!--              </thead>-->
<!--              <tbody class="item-table">-->
<!--              <tr v-for="item in searchResults" :key="item.id">-->
<!--                <td>-->
<!--                  <img :src="item.fields.product_image_link" alt="썸네일 입니다" class="img-thumbnail" style="width:100px">-->
<!--                </td>-->
<!--                <td>-->
<!--                  <h2>{{ item.fields.product_code }}</h2>-->
<!--                </td>-->
<!--                <td>-->
<!--                  <h2>{{ item.fields.product_name }}</h2>-->
<!--                </td>-->
<!--                <td>-->
<!--                  <h2>{{ item.fields.category }}</h2>-->
<!--                </td>-->
<!--              </tr>-->
<!--              </tbody>-->
<!--            </table>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import {mapState} from 'vuex'
import DataResult from "./views/DataResult.vue"

export default {
  name: "SearchResult"
  ,
  data() {
    return{
      limit: 0,
    }
  },
  computed:{
    ...mapState({
      searchResults: 'searchResults',
      keyword: 'keyword'
    }),
    isSearchResult(){
      return this.searchResults.length
    }
  },
  components: {
    DataResult
  },
}
</script>

<style scoped>

.search-title{
  font-size: 20px;
}

.table h2{
  font-size: 10px;
}


@media screen and (min-width: 768px){
  .search-title{
    font-size: 30px;
  }

  .table h2{
    font-size: 25px;
  }
}
</style>
