import http from 'src/http.js'

import store from 'src/store/vuex/state.js'

import serviceConfig from 'src/config.js'

const config = serviceConfig()

export const serviceAuthorize = (data) => {

	return http.post(`${config.URI}/oauth/token`, data)

}

export const serviceGetAlbum = (data) => {

	return http.get(`${config.URI}/api/album`, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceRemoveAlbum = (data) => {

	return http.delete(`${config.URI}/api/album/${data}`, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceSaveAlbum = (data) => {

	console.log(data)

	return http.post(`${config.URI}/api/album`, data, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceUpdateAlbum = (data) => {

	console.log(data)

	return http.put(`${config.URI}/api/album/${data.codigo}`, data.album, {

		headers: {

			'Authorization': store.token

		}

	})

}
