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

import CpForm from './Form.vue'

export default {

  name: 'inicio',

  components: {

    QLayout,

    QToolbar,

    QToolbarTitle,

    QTabs,

    QTab,

    QTabPane,

    QSelect,

    QBtn,

    QIcon,

    QField,

    QUploader,

    QInput,

    CpForm

  },

  data () {

  	return {

      album: {

        titulo: null

      },

      select: 1

    }

  },

  props: {},

  computed: {

    ...mapGetters(['getAlbum'])

  },

  methods: {

    ...mapActions(['saveAlbum', 'getAllAlbum', 'removeAlbum', 'updateAlbum']),

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

      <q-toolbar-title> Bem vindo bezerra </q-toolbar-title>

    </q-toolbar>

    <q-tabs>
    	<!-- Tabs - notice slot="title" -->
    	<q-tab slot="title" name="tab-1" icon="folder" />
    	<q-tab slot="title" name="tab-2" icon="image" />

    	<!-- Targets -->
    	<q-tab-pane name="tab-1">

        <p class="caption">Albuns</p>

        <hr>

        <q-select stack-label="" v-model="select" :options="getAlbum" />

        <q-input stack-label="Titulo" v-model="album.titulo"/>

        <div class="row box-button">

          <q-btn round color="primary" icon="add_circle" @click="save" />

          <q-btn round color="secondary" icon="mode_edit" @click="edit" />

          <q-btn round color="negative" icon="delete" @click="remove" />

        </div>


      </q-tab-pane>

    	<q-tab-pane name="tab-2">

    		<p class="caption">Albuns</p>

        <hr>

        <q-select stack-label="Escolha o album para upload da imagem" v-model="select" :options="getAlbum"/>

        <q-field icon="add_a_photo" helper="">

          <q-uploader multiple float-label="Escolha a imagem para upload" />

        </q-field>

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

</style>
