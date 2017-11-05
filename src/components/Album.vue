<script>

import { mapActions, mapGetters } from 'vuex'

import { QSelect, QInput, QBtn } from 'quasar'

export default {

	name: 'Album',

	data () {

		return {

			 album: {

        		titulo: null

      		},

      		select: 1

		}

	},

	components: {

		QSelect, QInput, QBtn

	},

	props: {

		name: {

			type: String

		}

	},

	computed: {

		...mapGetters(['getAlbum'])

	},

	methods: {

		...mapActions(['getAllAlbum'])

	},

	mounted () {

		this.getAllAlbum()

	}

}
</script>

<template>

<div>


		<hr>

		<q-select stack-label="" v-model="select" :options="getAlbum" />

		<q-input stack-label="Titulo" v-model="album.titulo"/>

		<div class="row box-button">

			<q-btn round color="primary" icon="add_circle"  />

			<q-btn round color="secondary" icon="mode_edit" />

			<q-btn round color="negative" icon="delete"  />

		</div>



</div>

</template>

<style>

</style>
