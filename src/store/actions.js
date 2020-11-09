import * as api from '../api'

const actions = {
  FETCH_RESULTS({commit}, {keyword}){
    //commit('SET_RESULTS', {keyword})
    api.manual.fetch(keyword).then(data =>{
      commit('SET_RESULTS', data.list)
    })
  }
}

export default actions
