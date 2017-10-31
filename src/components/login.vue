<script>

import { mapGetters, mapActions } from 'vuex'

import {

	QLayout,
	QToolbar,
	QToolbarTitle,
	QInput,
	QField,
	QBtn

} from 'quasar'

export default {

	name: 'Login',

	components: { QLayout, QToolbar, QToolbarTitle, QInput, QField, QBtn },

	data () {

		return {

			username: null,
			password: null,
			dados: null,

			labelLogin: 'Login'

		}

	},

	props: {},

	computed: {

		...mapGetters(['getOauth', 'getToken', 'getErrorLogin']),

		isValid () {

			return this.username !== null && this.password !== null

		}

	},

	methods: {

		...mapActions(['authorize', 'setMessage']),

		login () {

			this.dados = JSON.parse(JSON.stringify(this.getOauth))
			this.dados.username = this.username
			this.dados.password = this.password

			this.labelLogin = 'Aguarde...'

			this.sendMessage()

			this.authorize(this.dados)

				.then(() => {

					this.labelLogin = 'Login'

					if (this.getToken !== null) {

						this.$router.push({ path: 'Inicio' })

					}

				})

		},

		sendMessage () {

			let obj = { mutation: 'setErrorLogin', message: null }

			this.setMessage(obj)

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

		<q-btn color="primary" :disable="!isValid" class="full-width" @click="login"> {{labelLogin}} </q-btn>

		<q-field v-if="getErrorLogin !== null" icon="error" :label="getErrorLogin"></q-field>

	</q-layout>

</template>

<style lang="stylus">

.login {

	margin-top: 40px;

}

</style>