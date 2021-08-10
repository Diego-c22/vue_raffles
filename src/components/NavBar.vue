<template>
  <div class="bg-gradient-to-r from-primary to-secundary flex justify-between items-center relative z-10">
    <div class="h-16">
      <img class="h-full" src="../assets/img/top-rifas.png" alt="">
    </div>

    <img :style="openMenu" @click="clickMenu" class="mr-4 sm:hidden" src="../assets/img/icon-menu.svg" alt="menu icon">

    <div class="flex-row justify-center hidden sm:flex">
        <router-link class="text-white p-2 border-b sm:border-none hover:text-primary_dark" to="">Home</router-link>
        <router-link class="text-white p-2 border-b sm:border-none hover:text-primary_dark" to="">Ganadores</router-link>
        <router-link class="text-white p-2 border-b sm:border-none hover:text-primary_dark" to="">Sobre nosotros</router-link>
      </div>

    <transition name="fade-top">
      <div v-show="showMenu" class="h-screen w-1/2 flex flex-col absolute left-0 top-full sm:static sm:h-auto sm:w-auto sm:flex-row sm:justify-center bg-primary_dark px-3">
        <router-link class="text-white p-2 border-b sm:border-none hover:text-secundary" to="">Home</router-link>
        <router-link class="text-white p-2 border-b sm:border-none hover:text-secundary" to="">Ganadores</router-link>
        <router-link class="text-white p-2 border-b sm:border-none hover:text-secundary" to="">Sobre nosotros</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      showMenu: false,
      openMenu: {}
    }
  },

  methods: {
    clickMenu () {
      this.showMenu = !this.showMenu

      if (this.showMenu === true) {
        this.openMenu = {
          transform: 'rotate(90deg)',
          transition: 'transform .5s'
        }
      } else {
        this.openMenu = {
          transform: 'rotate(0deg)',
          transition: 'transform 1s'
        }
      }
    }
  }
}
</script>

<style>
.fade-top-enter-active, .fade-top-leave-active {
  transition: all .5s;
}

.fade-top-enter, .fade-top-leave-to {
  transform: translateX(-300px)
}

</style>
