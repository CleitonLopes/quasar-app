const dataConfig = () => {

	let dev = false

	let data = {}

	if (dev) {

		data = {

			URI: 'http://api.estanciabreda.com.br',
			URIGALERY: 'http://api.estanciabreda.com.br/api/galeria',
			URISTORAGE: 'http://api.estanciabreda.com.br/storage/'

		}

	} else {

		data = {

			URI: 'http://apiestancia.com.br',
			URIGALERY: 'http://apiestancia.com.br/api/galeria',
			URISTORAGE: 'http://apiestancia.com.br/storage/'

		}

	}

	return data

}

export default dataConfig
