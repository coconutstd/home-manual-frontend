import * as api from '../api'

const actions = {
  FETCH_RESULTS({commit}, {keyword}){
    //commit('SET_RESULTS', {keyword})
    api.manual.fetch(keyword).then(data =>{
      commit('SET_RESULTS', {results:data.hits.hit, keyword: keyword})
    })
  }
}

export default actions
