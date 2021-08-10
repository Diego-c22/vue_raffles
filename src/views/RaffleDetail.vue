<template>
  <div class="flex justify-center flex-col items-center">
    <carousel v-if="!isLoading" :images="raffle.images" />
    <div class="rounded-md shadow-2xl border p-2 w-11/12 justify-self-center -mt-2 mb-4 z-10 bg-white max-w-4xl">
      <h1 class="text-secundary text-lg">{{ raffle.name }}</h1>
      <div class="flex justify-between border-b-2 border-secundary m-1">
        <p class="bg-secundary px-3 py-1 text-white">Quedan {{ daysLeft }} dias</p>
        <p class="p-1"><span class="font-bold">{{ raffle.ticket_price | price }}</span> por boleto</p>
      </div>
      <div class="p-2 my-2">
        <p>{{ raffle.quantity_available_numbers | amount }} Boletos disponibles</p>
        <button class="w-10/12 sm:w-3/4 lg:w-1/2 shadow-md rounded-full bg-primary p-2 text-white">Comprar boletos</button>
      </div>
      <p class="m-1 text-lg">Premio con precio de <span class="font-bold">{{ raffle.prize_price | price }}</span></p>
      <p class="font-bold">Descripcion:</p>
      <p>{{ raffle.description }}</p>
      <p class="font-bold my-3">Es sorteo se realizara el {{ raffle.drawing_date }}</p>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import date from '@/mixins/date'
import { getRaffle } from '@/API'
export default {
  name: 'RaffleDetail',
  mixins: [date],
  components: { Carousel },

  data () {
    return {
      raffle: {},
      isLoading: false
    }
  },

  created () {
    this.raffle = this.$store.state.raffle

    if (Object.keys(this.raffle).length === 0) {
      this.getData()
    }
  },

  mounted () {
    console.log('here')
    console.log(this.raffle.raffle_end)
    console.log(this.raffle)
    this.dateEnd = this.raffle.raffle_end
  },

  methods: {
    async getData () {
      this.isLoading = true
      const id = this.$route.params.id
      await getRaffle(id)
        .then(res => { this.raffle = res })
      this.isLoading = false
      console.log(this.raffle)
    }
  }
}
</script>
