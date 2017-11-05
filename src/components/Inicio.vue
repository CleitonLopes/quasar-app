<script>

import { mapActions, mapGetters } from 'vuex'

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QTab,
  QTabPane,
  QSelect,
  QIcon,
  QField,
  QUploader,
  QInput,
  QBtn,
  Alert

} from 'quasar'

import CpAlbum from './Album.vue'
import CpForm from './Form.vue'

export default {

  name: 'inicio',

  components: {

    QLayout, QToolbar, QToolbarTitle, QTabs, QTab, QTabPane, QSelect, QBtn, QIcon, QField, QUploader, QInput,

    CpAlbum, CpForm

  },

  data () {

  	return {

      album: {

        titulo: null

      },

      select: 1,

      url: 'http://apiestancia.com.br/api/galeria',

      additionalFields: [

        {

          name: 'album_id',
          value: 2

        }

      ]

    }

  },

  props: {},

  computed: {

    ...mapGetters(['getAlbum', 'getToken', 'getGaleria'])

  },

  methods: {

    ...mapActions(['saveAlbum', 'getAllAlbum', 'removeAlbum', 'updateAlbum', 'getAllGaleria']),

    save () {

      this.saveAlbum(this.album)

      .then(() => {

        Alert.create({ html: 'Dados salvos com sucesso', color: 'positive' })

        this.album.titulo = null

        this.getAllAlbum()

      })

    },

    remove () {

      this.removeAlbum(this.select)

      .then(() => {

        Alert.create({ html: 'Album excluido com sucesso', color: 'positive' })

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

    addHeaders () {

     let headers = {

          Authorization: this.getToken

      }

      return headers

    },

    findGaleria () {

      this.getAllGaleria()

      .then(() => {

        //

      })

    }

  },

  mounted () {

    this.getAllAlbum()

  }

}
</script>

<template>

  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" >

    <q-toolbar slot="header" class="glossy">

      <q-toolbar-title> Bem vindo ! </q-toolbar-title>

    </q-toolbar>

    <q-tabs>
    	<!-- Tabs - notice slot="title" -->
    	<q-tab slot="title" name="tab-1" icon="folder" />
      <q-tab slot="title" name="tab-2" icon="cloud_upload" />
    	<q-tab slot="title" name="tab-3" icon="image" @click="findGaleria()"/>

    	<!-- Targets -->

      <q-tab-pane name="tab-1">

        <cp-album />

      </q-tab-pane>

    <!-- 	<q-tab-pane name="tab-1">

        <hr>

        <q-select stack-label="" v-model="select" :options="getAlbum" />

        <q-input stack-label="Titulo" v-model="album.titulo"/>

        <div class="row box-button">

          <q-btn round color="primary" icon="add_circle" @click="save" />

          <q-btn round color="secondary" icon="mode_edit" @click="edit" />

          <q-btn round color="negative" icon="delete" @click="remove" />

        </div>


      </q-tab-pane> -->

    	<q-tab-pane name="tab-2">

    		<p class="caption">Albuns</p>

        <hr>

        <q-select stack-label="Escolha o album para upload da imagem" v-model="select" :options="getAlbum"/>

        <q-field icon="add_a_photo" helper="">

          <q-uploader :url="url" multiple float-label="Escolha a imagem para upload" :headers="addHeaders()" :additionalFields="additionalFields" @add(files)/>

        </q-field>

      </q-tab-pane>

      <q-tab-pane name="tab-3">

      <div>
        <div class="scrollmenu row">
          <div v-for="item in getGaleria" class="thumbnail">
            <img :src="`http://apiestancia.com.br/storage/${item.path}`" width="150px">
          </div>
        </div>
      </div>

      </q-tab-pane>

    </q-tabs>


  </q-layout>

</template>

<style lang="stylus">

  .box-button {

    margin-top: 40px;
    display: flex;
    justify-content: space-around;
  }

  div.scrollmenu {
    overflow    : auto;
    white-space : nowrap;
  }

  div.scrollmenu .thumbnail {
    display : block;
    margin  : 5px;
  }

</style>
