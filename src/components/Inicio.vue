<script>

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

      nomeAlbum: null,

      select: 1,

      options: [

        {
          label: 'Album 1',
          value: 1
        },
        {
          label: 'Album 2',
          value: 2

        },
        {
          label: 'Album 3',
          value: 3
        }
      ]
    }

  },

  methods: {

    save () {

      alert(this.nomeAlbum)

    }

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

        <q-select
          stack-label=""
          v-model="select"
          :options="options"
        />

        <q-input stack-label="Titulo" v-model="nomeAlbum"/>

        <q-btn color="primary" icon="add_circle" @click="save">

           Salvar album

        </q-btn>




      </q-tab-pane>

    	<q-tab-pane name="tab-2">

    		<p class="caption">Albuns</p>

        <hr>

        <q-select
          stack-label="Escolha o album para upload da imagem"
          v-model="select"
          :options="options"
        />

        <q-field icon="add_a_photo" helper="">

          <q-uploader multiple float-label="Escolha a imagem para upload" />

        </q-field>

      </q-tab-pane>

    </q-tabs>


  </q-layout>

</template>

<style lang="stylus">

</style>
