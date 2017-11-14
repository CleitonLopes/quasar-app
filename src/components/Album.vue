<script>

import { mapActions, mapGetters } from 'vuex'

import { QSelect, QInput, QBtn, Toast } from 'quasar'

export default {

	name: 'Album',

	data () {

		return {

			 album: {

        		titulo: null

      		},

      		selected: null

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

		...mapActions(['aGetAllAlbum', 'aSaveAlbum', 'aRemoveAlbum', 'aUpdateAlbum']),

		save () {

	      this.aSaveAlbum(this.album)

	      .then((data) => {

	        Toast.create(data.resultado)

	        this.album.titulo = null

	        this.aGetAllAlbum()

	      })

	    },

	    edit () {

	      let data = { codigo: this.selected, album: this.album }

	      this.aUpdateAlbum(data)

	      .then((data) => {

	        Toast.create(data.resultado)

	        this.album.titulo = null

	        this.aGetAllAlbum()

	      })

	    },

	    remove () {

	      this.aRemoveAlbum(this.selected)

	      .then((data) => {

	      	Toast.create(data.resultado)

	        this.aGetAllAlbum()

	      })

	    }

	},

	mounted () {

		this.aGetAllAlbum()

	}

}
</script>

<template>

	<div>

		<p class="caption">Albuns</p>

		<hr>

		<q-select stack-label="" v-model="selected" :options="getAlbum" />

		<q-input stack-label="Titulo" v-model="album.titulo"/>

		<div class="row box-button">

			<q-btn :disable="album.titulo === null" round color="primary" icon="add_circle" @click="save" />

			<q-btn :disable="album.titulo === null" round color="secondary" icon="mode_edit" @click="edit" />

			<q-btn :disable="selected === null" round color="negative" icon="delete" @click="remove" />

		</div>

	</div>

</template>

<style lang="stylus">

.box-button {

    margin-top: 40px;
    display: flex;
    justify-content: space-around;

}

</style>
