<script>

import { mapActions, mapGetters } from 'vuex'

import { QSelect, QInput, QBtn, Alert } from 'quasar'

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

		...mapActions(['getAllAlbum', 'saveAlbum', 'removeAlbum', 'updateAlbum']),

		save () {

	      this.saveAlbum(this.album)

	      .then(() => {

	        Alert.create({ html: 'Dados salvos com sucesso', color: 'positive' })

	        this.album.titulo = null

	        this.getAllAlbum()

	      })

	    },

	    edit () {

	      let data = { codigo: this.select, album: this.album }

	      this.updateAlbum(data)

	      .then(() => {

	        Alert.create({ html: 'Album alterado com sucesso', color: 'positive' })

	        this.getAllAlbum()

	      })

	    },

	    remove () {

	      this.removeAlbum(this.select)

	      .then(() => {

	        Alert.create({ html: 'Album excluido com sucesso', color: 'positive' })

	        this.getAllAlbum()

	      })

	    }

	},

	mounted () {

		this.getAllAlbum()

	}

}
</script>

<template>

	<div>

		<p class="caption">Albuns</p>

		<hr>

		<q-select stack-label="" v-model="select" :options="getAlbum" />

		<q-input stack-label="Titulo" v-model="album.titulo"/>

		<div class="row box-button">

			<q-btn round color="primary" icon="add_circle" @click="save" />

			<q-btn round color="secondary" icon="mode_edit" @click="edit" />

			<q-btn round color="negative" icon="delete" @click="remove" />

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
