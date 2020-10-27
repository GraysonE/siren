import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import * as auth from './auth'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
  auth
}
