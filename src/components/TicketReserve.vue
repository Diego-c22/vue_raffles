<template>
  <transition name="fade-scale">
    <div class="bg-gray-100 rounded-md shadow-2xl fixed top-10 z-30 p-8 bg-opacity-90 md:w-1/2">
      <div class="flex justify-end text-right m-1">
        <span @click="closeTab" class="font-bold text-2xl text-primary_dark cursor-pointer hover:text-warning"><i class="fas fa-times"></i>x</span>
      </div>
      <div v-show="ticketsSelected.length > 0">
        <p>Numeros seleccionados</p>
        <div class="grid grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 border-2">
          <span
            v-for="ticket in ticketsSelected" :key="ticket"
            class="shadow-xl rounded-full w-14 h-9 flex justify-center items-center m-1 border-primary_dark border scale-h cursor-pointer"
            @click="deleteNumber(ticket)"
          >
            {{ ticket }}
          </span>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <form class="flex flex-col justify-center items-center w-5/6" @submit.prevent="sendData">
          <input type="text" class="outline-none m-2 rounded-full w-full h-10 border-3 text-center shadow-2xl" placeholder="Nombre" v-model="name">
          <input type="text" class="outline-none m-2 rounded-full w-full h-10 border-3 text-center shadow-2xl" placeholder="Apellido" v-model="lastName">
          <input type="email" class="outline-none m-2 rounded-full w-full h-10 border-3 text-center shadow-2xl" placeholder="Correo electronico" v-model="email">
          <input type="text" class="outline-none m-2 rounded-full w-full h-10 border-3 text-center shadow-2xl" placeholder="Telefono o celular" v-model="phone">
          <button type="submit" class="bg-primary w-3/4 rounded-full p-1 mx-2 text-white mt-5">Reservar</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { createTicket } from '@/API'
import closeTab from '@/mixins/closeTab.js'
export default {
  name: 'TicketReserve.vue',
  mixins: [closeTab],
  props: {
    raffle: {
      required: true,
      type: Object
    }
  },

  data () {
    return {
      name: '',
      lastName: '',
      email: '',
      phone: ''
    }
  },

  computed: {
    ticketsSelected () {
      return this.$store.state.numbers
    },

    numbers () {
      let numbers = ''
      this.ticketsSelected.forEach(element => {
        numbers = `${numbers},${element}`
      })
      numbers = numbers.replace(',', '')
      return numbers
    }
  },

  methods: {
    sendData () {
      const formData = {
        raffle: this.raffle.id,
        numbers: this.numbers,
        name: this.name,
        email: this.email,
        last_name: this.lastName,
        phone: this.phone
      }
      createTicket(formData)
        .then(res => {
          console.log(res)
          this.$emit('update')
          this.$emit('showMessage', 'Tus boletos fueron correctamente reservados')
          this.closeTab()
        })
        .catch(error => { console.log(error) })
    },

    deleteNumber (ticket) {
      this.ticketsSelected.pop(ticket)
    }
  }
}
</script>

<style>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all .3s;
}

.fade-scale-enter, .fade-scale-leave-to {
  transform: scale(0)
}
</style>
