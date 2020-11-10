import {setAuthInHeader} from '../api'

const mutations = {
  LOGIN(state, {token, email}){
    console.log('hello')
    if(!token) return
    state.token = token
    state.email = email
    setAuthInHeader(token)
  },
  LOGOUT(state){
    console.log('logout')
    state.token = null
    state.email = ''
    delete localStorage["com.naver.nid.access_token"]
    delete localStorage["com.naver.nid.oauth.state_token"]
    setAuthInHeader(null)
  },
  SET_RESULTS(state, {results, keyword}){
    console.log(results, keyword)
    state.keyword = keyword
    state.searchResults = results
  }
}

export default mutations
