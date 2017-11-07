import * as types from './mutations-types'

export default {

	[types.setToken] (state, data) {

		state.token = `Bearer ${data}`

	},

	[types.setErrorLogin] (state, data) {

		state.errorLogin = data

	},

	[types.setAlbum] (state, data) {

		state.album = data

	},

	[types.setGaleria] (state, data) {

		state.galeria = data

	},

	[types.setGaleryById] (state, data) {

		state.galeria = data

	}

}
