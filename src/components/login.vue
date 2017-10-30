<script>

import { mapGetters, mapActions } from 'vuex'

import {

	QLayout,
	QToolbar,
	QToolbarTitle,
	QInput,
	QBtn

} from 'quasar'

export default {

	name: 'Login',

	components: { QLayout, QToolbar, QToolbarTitle, QInput, QBtn },

	data () {

		return {

			username: null,
			password: null,
			dados: null

		}

	},

	props: {},

	computed: {

		...mapGetters(['getOauth']),

		isValid () {

			return this.username !== null && this.password !== null

		}

	},

	methods: {

		...mapActions(['authorize']),

		login () {

			this.dados = JSON.parse(JSON.stringify(this.getOauth))
			this.dados.username = this.username
			this.dados.password = this.password

			this.authorize(this.dados)

				.then(() => {

					alert('logado com sucesso !')

				})

		}

	},

	mounted () {}

}
</script>

<template>

	<q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" >

	    <q-toolbar slot="header" class="glossy">

	      <q-toolbar-title> Identifique-se </q-toolbar-title>

	    </q-toolbar>


		<p class="caption login">Login</p>

		<hr>

		<q-input v-model="username" type="email" :before="[{icon: 'account_circle', handler () {}}]" suffix="@bredas.com.br" />

		<q-input v-model="password" type="password" :before="[{icon: 'vpn_key', handler () {}}]" />

		<q-btn color="primary" :disable="!isValid" class="full-width" @click="login"> logar </q-btn>

	</q-layout>

</template>

<style lang="stylus">

.login {

	margin-top: 40px;

}

</style>