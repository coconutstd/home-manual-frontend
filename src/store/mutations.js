import {setAuthInHeader} from '../api'

const mutations = {
  LOGIN(state, {token, email}){
    console.log('hello')
    if(!token) return
    state.accessToken = token
    state.email = email
    localStorage.setItem('token', token)
    setAuthInHeader(token)
  },
  LOGOUT(state){
    state.token = null
    delete localStorage.token
    setAuthInHeader(null)
  }
}

export default mutations
