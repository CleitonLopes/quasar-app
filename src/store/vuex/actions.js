// import * as types from './mutations-types'

import { serviceAuthorize } from '../../components/http'

export const authorize = (store, data) => {

	return serviceAuthorize(data)

	.then(response => response.data)

	.then(data => {

		alert(data)

	})

}
