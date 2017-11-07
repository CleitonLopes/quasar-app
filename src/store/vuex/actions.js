import * as types from './mutations-types'

import {

	serviceAuthorize,
	serviceGetAlbum,
	serviceSaveAlbum,
	serviceRemoveAlbum,
	serviceUpdateAlbum,
	serviceGetAllGaleria,
	serviceGaleryFindById

} from '../../components/http'

import serviceAlbum from 'src/services/serviceAlbum.js'

// Login
export const authorize = (store, data) => {

	return serviceAuthorize(data)

	.then(response => response.data)

	.then(data => {

		store.commit(types.setToken, data.access_token)

	})

	.catch((error) => {

		if (error.response) {

			store.commit(types.setErrorLogin, error.response.data.message)

		}

	})

}

// Album
export const getAllAlbum = (store) => {

	return serviceGetAlbum()

	.then(response => response.data)

	.then(data => {

		let service = serviceAlbum()

		console.log(service.createAlbum(data.data))

		store.commit(types.setAlbum, service.createAlbum(data.data))

	})

	.catch((error) => {

		console.log(error)

	})

}

export const saveAlbum = (store, data) => {

	return serviceSaveAlbum(data)

	.then(response => response.data)

	.then(data => {

		//

	})

}

export const removeAlbum = (store, data) => {

	return serviceRemoveAlbum(data)

	.then(response => response.data)

	.then((data) => {

		//

	})

}

export const updateAlbum = (store, data) => {

	return serviceUpdateAlbum(data)

	.then(response => response.data)

	.then((data) => {

		//

	})

}

export const setMessage = (store, data) => {

	store.commit(types[data.mutation], data.message)

}

// Galeria

export const getAllGaleria = (store) => {

	return serviceGetAllGaleria()

	.then(response => response.data)

	.then((data) => {

		store.commit(types.setGaleria, data.data)

	})

}

export const aFindById = (store, data) => {

	console.log(data)

	return serviceGaleryFindById(data)

	.then(response => response.data)

	.then((data) => {

		console.log(data)

		store.commit(types.setGaleryById, data)

	})

}
