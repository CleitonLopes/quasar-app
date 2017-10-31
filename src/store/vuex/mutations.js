import * as types from './mutations-types'

export default {

	[types.setToken] (state, data) {

		state.token = `Bearer ${data}`

	},

	[types.setErrorLogin] (state, data) {

		state.errorLogin = data

	},

	[types.setAlbum] (state, data) {

		console.log(data)

		state.album = data

	}

}
