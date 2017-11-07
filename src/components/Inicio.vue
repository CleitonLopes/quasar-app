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
  QBtn

} from 'quasar'

import CpAlbum from './Album.vue'
import CpUpload from './Upload.vue'
import CpGaleria from './Galeria.vue'

export default {

  name: 'inicio',

  components: {

    QLayout, QToolbar, QToolbarTitle, QTabs, QTab, QTabPane, QSelect, QBtn, QIcon, QField, QUploader, QInput,

    CpAlbum, CpUpload, CpGaleria

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

    ...mapGetters(['getAlbum', 'getToken', 'getGaleria'])

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

  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" >

    <q-toolbar slot="header" class="glossy">

      <q-toolbar-title> Bem vindo ! </q-toolbar-title>

    </q-toolbar>

    <q-tabs>


    	<q-tab slot="title" name="album" icon="folder" />
      <q-tab slot="title" name="upload" icon="cloud_upload" />
    	<q-tab slot="title" name="galeria" icon="image" />

      <q-tab-pane name="album">

        <cp-album />

      </q-tab-pane>

    	<q-tab-pane name="upload">

        <cp-upload />

      </q-tab-pane>

      <q-tab-pane name="galeria">

        <cp-galeria />

      </q-tab-pane>

    </q-tabs>


  </q-layout>

</template>

<style lang="stylus">

</style>
