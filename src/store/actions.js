import * as api from '../api'

const actions = {
  FETCH_RESULTS({commit}, {keyword}){
    //commit('SET_RESULTS', {keyword})
    api.manual.fetch(keyword).then(data =>{
      console.log(data.hits.hit)
      commit('SET_RESULTS', data.hits.hit)
    })
  }
}

export default actions
