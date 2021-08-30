<template>
  <div class="h-screen flex flex-col justify-center items-center bg-primary_dark">
    <h2 class="text-white m-4 text-2xl light">Inicio de Sesion</h2>
    <div class="rounded-xl shadow-xl flex flex-col h-2/3 w-5/6 md:w-2/3 lg:w-1/2 items-center bg-gradient-to-br from-primary to-secundary">
      <img src="../assets/img/top-rifas.png" alt="" class="h-24 m-4">
      <form @submit.prevent="verifyCredentials" class="flex flex-col items-center w-full">
        <input class="rounded-full text-center mt-2 p-1 w-5/6 sm:w-2/3" type="email" v-model="email" placeholder="Email">
        <input class="rounded-full text-center mt-2 p-1 w-5/6 sm:w-2/3" type="password" v-model="password" placeholder="Contraseña">
        <button class="bg-primary text-white py-2 px-4 rounded-full shadow-xl my-8" type="submit">Iniciar Sesion</button>
      </form>
      <div class="bg-primary_dark w-full p-2">
        <p class="text-white font-light text-md">Esta pagina es solo para administradores</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getToken } from '@/API'
export default {
  name: 'LogIn',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    verifyCredentials () {
      const formData = {
        email: this.email,
        password: this.password
      }

      getToken(formData)
        .then(res => { this.$store.commit('setToken', res.data.access); this.$store.commit('setTokenRefresh', res.data.refresh) })
        .then(() => { this.$router.push({ name: 'CreateRaffle' }) })
    }
  }
}
</script>
