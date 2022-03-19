<template>
  <transition name="fade-scale">
    <div class="bg-gray-100 rounded-md shadow-2xl fixed top-10 z-30 p-2 bg-opacity-90 md:w-1/2">
      <div class="flex justify-end text-right m-1">
        <span @click="closeTab" class="font-bold text-2xl text-primary_dark cursor-pointer hover:text-warning"><i class="fas fa-times"></i></span>
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

        <button class="button bg-primary p-2 m-1">Pagar Boletos</button>
        <button @click="reserveNumbers" class="button bg-primary_dark p-2 m-1">Reservar Boletos</button>
      </div>

      <div class="">
        <div class="">
          <form class="flex mt-2" @submit.prevent="fillArrayNumbers">
            <img src="../assets/img/search.svg" alt=" " class="absolute left-5 self-center text-primary p-1">
            <input type="text" class="outline-none rounded-full w-full h-8 border text-center" placeholder="Buscar un numero" v-model="number">
            <button type="submit" class="bg-primary p-1 mx-2 text-white rounded-sm">Buscar</button>
          </form>
          <p class="text-sm text-primary_dark mb-2">Buscar numero entre 1 y {{ raffle.numbers_quantity }}</p>
        </div>
        <div class="flex justify-around">
          <div class="flex justify-center items-center"><span class="h-5 w-5 m-1 block border border-primary_dark"></span> <span>Disponible</span></div>
          <div class="flex justify-center items-center"><span class="h-5 w-5 m-1 block border bg-secundary"></span> <span>Ocupado</span></div>
          <div class="flex justify-center items-center"><span class="h-5 w-5 m-1 block border bg-primary_dark opacity-80"></span> <span>Reservado</span></div>
        </div>
        <div class="grid grid-cols-4 lg:grid-cols-6">
          <span v-for="n in arrayNumbers" :key="n"
            class="shadow-xl rounded-full w-20 h-10 m-1 border-primary_dark border scale-h cursor-pointer flex justify-center items-center"
            :class="{ 'busy': busyNumbers.includes(n), 'reserved': reservedNumbers.includes(n), 'selected': ticketsSelected.includes(n) }"
            @click="addNumber(n)">
            {{ n }}
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import closeTab from '@/mixins/closeTab.js'
export default {
  name: 'Tickets',
  mixins: [closeTab],
  props: {
    raffle: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      ticketsSelected: [],
      number: undefined,
      quantityNumbers: 30,
      arrayNumbers: []
    }
  },

  created () {
    this.fillArrayNumbers()
  },

  computed: {
    busyNumbers () {
      const numbers = this.raffle.busy_numbers.filter(item => item.state_payment === true)
      return numbers.reduce((acumulator, currentValue) => acumulator.concat(currentValue.numbers), [])
    },

    reservedNumbers () {
      const numbers = this.raffle.busy_numbers.filter(item => item.state_payment === false)
      return numbers.reduce((acumulator, currentValue) => acumulator.concat(currentValue.numbers), [])
    }
  },

  methods: {
    fillArrayNumbers () {
      const number = this.number | this.quantityNumbers / 2
      this.arrayNumbers = []
      const part = this.quantityNumbers / 2
      let numberDown = 0
      let numberUp = 0
      if (number + part > parseInt(this.raffle.numbers_quantity)) {
        numberUp = parseInt(this.raffle.numbers_quantity)
        numberDown = parseInt(this.raffle.numbers_quantity) - this.quantityNumbers
      } else {
        numberUp = number + part
        number - part <= 0 ? numberDown = 1 : numberDown = number - part
      }
      for (let i = numberDown; i <= numberUp; i++) {
        this.arrayNumbers.push(i)
      }
    },

    addNumber (number) {
      if (!this.busyNumbers.includes(number) && !this.reservedNumbers.includes(number) && !this.ticketsSelected.includes(number)) {
        this.ticketsSelected.push(number)
      }
    },

    deleteNumber (number) {
      this.ticketsSelected.pop(number)
    },

    reserveNumbers () {
      this.$store.commit('setNumbers', this.ticketsSelected)
      this.$emit('onReserveNumbers')
    }
  }
}
</script>

<style>
.busy {
  background-color: #A6423C;
  border: none;
  color: #FFFFFF;
  opacity: .8;
}

.scale-h:hover {
  scale: 1.1;
}

.reserved {
  background-color: #636B73;
  border: none;
  color: #FFFFFF;
  opacity: .8;
}

.selected {
  background-color: #636B73;
  border: none;
  color: #FFFFFF;
}

.busy:hover, .reserved:hover {
  scale: none;
}

.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all .3s;
}

.fade-scale-enter, .fade-scale-leave-to {
  transform: scale(0)
}
</style>
