<script>

import { mapActions, mapGetters } from 'vuex'

import { QSelect } from 'quasar'

import serviceConfig from 'src/config.js'

const config = serviceConfig()

export default {

	name: 'galeria',

	data () {

		return {

			album: {

				titulo: null

			},

      		select: 1,

			config

		}

	},

	components: { QSelect },

	props: {},

	computed: {

		...mapGetters(['getAlbum', 'getToken', 'getGaleria']),

		getterGaleryByID () {

			return this.getGaleria.galeria !== null

		}

	},

	methods: {

		...mapActions(['getAllAlbum', 'getAllGaleria', 'aFindById']),

		findById () {

			this.aFindById(this.select)

			.then(() => {})

		}

	},

	mounted () {

      this.findById()

	}

}
</script>

<template>

	<div>

		<p class="caption">Albuns</p>

		<p>{{getterGaleryByID}}</p>

		<hr>

		<q-select stack-label="Escolha o album para buscar as imagens" v-model="select" :options="getAlbum" @change="findById(select)" />

		<div class="scrollmenu row">
			<div v-for="item in getGaleria.galeria" class="thumbnail">
				<img :src="`${config.URISTORAGE}/${item.path}`" width="150px">
			</div>
		</div>

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
