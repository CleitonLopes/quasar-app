import * as types from './mutations-types'

export default {

	[types.setToken] (state, data) {

		state.token = data.token

	}

}
