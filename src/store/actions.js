import * as api from '../api'

const actions = {
  LOGIN({commit}){
    return api.auth.login()
  }
}

export default actions
