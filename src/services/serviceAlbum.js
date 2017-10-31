const serviceAlbum = () => {

	const createAlbum = (param) => {

		let data = []

		_.forEach(param, function (value) {

			let obj = {}

			obj.label = value.titulo
			obj.value = value.id

			data.push(obj)

		})

		return data

	}

	return { createAlbum }

}

export default serviceAlbum
