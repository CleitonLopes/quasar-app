<script>

import { mapActions, mapGetters } from 'vuex'

import { QSelect, Dialog, Toast, QGallery } from 'quasar'

import serviceConfig from 'src/config.js'

const config = serviceConfig()

export default {

	name: 'galeria',

	data () {

		return {

			album: {

				titulo: null

			},

      		selected: null,

			config

		}

	},

	components: { QSelect, QGallery },

	props: {},

	computed: {

		...mapGetters(['getAlbum', 'getToken', 'getGalery'])

	},

	methods: {

		...mapActions(['aFindById', 'aRemoveGaleryById', 'aClearGalery']),

		findById () {

			this.aFindById(this.selected)

			.then(() => {})

		},

		remove (value) {

			let data = {

				idalbum: this.selected,
				idgaleria: value

			}

			Dialog.create({

				title: 'Atenção',
				message: 'Deseja realmente excluir a imagem ?',

				buttons: [{

					label: 'Cancelar',
					color: 'negative',
					outline: true,
					style: 'text-decoration: underline',

					handler: () => {

						Toast.create('cancelado...')

					}

				}, {

					label: 'Confirma',
					raised: true,
					color: 'positive',

					handler: () => {

						this.aRemoveGaleryById(data)

						.then((data) => {

							Toast.create(data.resultado)

							this.findById(this.selected)

						})

					}

				}]

			})

		}

	},

	mounted () {

	  this.aClearGalery()

	  .then(() => {

	  	if (this.selected !== null) {

	  		this.findById()

	  	}

	  })

	}

}
</script>

<template>

	<div>

		<p class="caption">Albuns</p>

		<hr>

		<q-select stack-label="Escolha o album para buscar as imagens" v-model="selected" :options="getAlbum" @change="findById(selected)" />

		<div class="scrollmenu row">
			<div v-for="item in getGalery.galeria" class="thumbnail">
				<img :src="`${config.URISTORAGE}/${item.path}`" width="150px" @click="remove(item.id)">
			</div>
		</div>

		<!-- <q-gallery infinite fullscreen :src="galery" @click="teste"/> -->


	</div>

</template>

<style lang="stylus">


div.scrollmenu
{
    overflow    : auto;
    white-space : nowrap;
    display: flex;
    justify-content: space-between;
}

div.scrollmenu .thumbnail
{
    display : block;
    margin  : 10px;
}

</style>
