<template>
  <div class="home grid grid-cols-1 justify-center items-center">
    <section>
      <slider :raffles="mainRaffles" />
    </section>

    <p class="bg-primary text-white font-bold">Sorteos</p>

    <section class="grid xl:justify-self-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 xl:w-11/12">
      <raffle-cart class="justify-self-center" v-for="raffle in raffles" :key="raffle.id" :raffle="raffle"></raffle-cart>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { getRaffles } from '@/API'
import Slider from '@/components/Slider.vue'
import RaffleCart from '@/components/RaffleCart.vue'
export default {
  name: 'Home',
  components: { Slider, RaffleCart },

  data () {
    return {
      isLoading: false,
      raffles: []
    }
  },

  created () {
    this.getData()
  },

  methods: {
    async getData () {
      this.isLoading = true
      await getRaffles()
        .then(res => { this.raffles = res })

      this.isLoading = false
    }
  },

  computed: {
    mainRaffles () {
      return this.raffles.filter(raffle => raffle.main === true)
    },

    images () {
      const images = []
      this.raffles[4].images.forEach((image, index) => {
        const img = {
          id: index,
          big: image.image,
          thumb: image.image
        }

        images.push(img)
      })

      return images
    }
  }
}
</script>

<style>
.h-50vw {
  height: 50vw;
}
</style>
