import http from 'src/http.js'

export const serviceAuthorize = (data) => {

	console.log('teste')
	return http.post('localhost:8000/oauth/token', data)

}
