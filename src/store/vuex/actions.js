import * as types from './mutations-types'

import {

	serviceAuthorize,
	serviceGetAlbum,
	serviceSaveAlbum,
	serviceRemoveAlbum,
	serviceUpdateAlbum,
	serviceGaleryFindById,
	serviceRemoveGaleryById

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

		return error.response.data.message

	})

}

// Album
export const aGetAllAlbum = (store) => {

	return serviceGetAlbum()

	.then(response => response.data)

	.then(data => {

		let service = serviceAlbum()

		store.commit(types.setAlbum, service.createAlbum(data.data))

	})

	.catch((error) => {

		return error

	})

}

export const aSaveAlbum = (store, data) => {

	return serviceSaveAlbum(data)

	.then((response) => {

		if (response.status === 200) {

			let data = {

				resultado: 'Dados salvos com sucesso !'

			}

			return data

		}

	})

	.catch((error) => {

		return error

	})

}

export const aUpdateAlbum = (store, data) => {

	return serviceUpdateAlbum(data)

	.then((response) => {

		if (response.status === 200) {

			let data = {

				resultado: 'Album alterado com sucesso !'

			}

			return data

		}

	})

	.catch((error) => {

		return error

	})

}

export const aRemoveAlbum = (store, data) => {

	return serviceRemoveAlbum(data)

	.then((response) => {

		if (response.status === 200) {

			let data = {

				resultado: 'Album deletado com sucesso !'

			}

			return data

		}

	})

	.catch((error) => {

		return error

	})

}

export const setMessage = (store, data) => {

	store.commit(types[data.mutation], data.message)

}

// Galeria

export const aClearGalery = (store) => {

	store.commit(types.clearGalery)

}

export const aFindById = (store, data) => {

	return serviceGaleryFindById(data)

	.then(response => response.data)

	.then((data) => {

		store.commit(types.setGaleryById, data)

	})

	.catch((error) => {

		return error

	})

}

export const aRemoveGaleryById = (store, data) => {

	return serviceRemoveGaleryById(data)

	.then(response => response.data)

	.then((data) => {

		if (data.status === 200) {

			return data

		}

	})

	.catch((error) => {

		return error

	})

}
