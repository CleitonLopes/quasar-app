import Vue from 'vue'

import Vuex from 'vuex'

import * as actions from './vuex/actions'

import * as getters from './vuex/getters'

import mutations from './vuex/mutations'

import state from './vuex/state'

Vue.use(Vuex)

export default new Vuex.Store({

	actions, getters, mutations, state

})
