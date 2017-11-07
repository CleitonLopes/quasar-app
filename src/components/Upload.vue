<script>

import { mapActions, mapGetters } from 'vuex'

import { QSelect, QInput, QBtn, QUploader, QField } from 'quasar'

import serviceConfig from 'src/config.js'

const config = serviceConfig()

export default {

	name: 'upload',

	data () {

		return {

			album: {

				titulo: null

			},

      		select: 1,

			config

		}

	},

	components: { QSelect, QInput, QBtn, QUploader, QField },

	props: {},

	computed: {

		...mapGetters(['getAlbum', 'getToken', 'getGaleria'])

	},

	methods: {

		...mapActions(['']),

		addHeaders () {

		    let headers = {

	          	Authorization: this.getToken

		     }

	      	return headers

	    },

	    addField () {

	    	let additionalFields = []

	    	let obj = {}

	    	obj.name = 'album_id'
	    	obj.value = this.select

	    	additionalFields.push(obj)

	    	return additionalFields

	    }

	},

	mounted () {}

}
</script>

<template>

	<div>

		<p class="caption">Albuns</p>

		<hr>

		<q-select stack-label="Escolha o album para upload da imagem" v-model="select" :options="getAlbum"/>

		<q-field icon="add_a_photo" helper="">

			<q-uploader :url="`${config.URIGALERY}`" multiple float-label="Escolha a imagem para upload" :headers="addHeaders()" :additionalFields="addField()" @add(files)/>

		</q-field>

	</div>

</template>

<style>

</style>
