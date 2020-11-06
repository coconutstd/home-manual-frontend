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
    state.token = null
    state.email = ''
    delete localStorage.token
    setAuthInHeader(null)
  }
}

export default mutations
