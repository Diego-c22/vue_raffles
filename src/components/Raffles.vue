<template>
  <div class="flex flex-col justify-center items-center">
    <p class="bg-primary text-white font-bold w-full">Sorteos</p>

    <section v-if="!editMode" class="grid xl:justify-self-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 xl:w-11/12">
      <raffle-cart class="justify-self-center" v-for="raffle in raffles" :key="raffle.id" :raffle="raffle"></raffle-cart>
    </section>

    <section v-if="editMode" class="grid xl:justify-self-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 xl:w-11/12">
      <raffle-cart-admin class="justify-self-center" v-for="raffle in raffles" :key="raffle.id" :raffle="raffle"></raffle-cart-admin>
    </section>
  </div>
</template>

<script>
import { getRaffles } from '@/API'
import RaffleCart from '@/components/RaffleCart.vue'
import RaffleCartAdmin from '@/components/adminComponents/RaffleCartAdmin.vue'

export default {
  name: 'Raffles',
  components: { RaffleCart, RaffleCartAdmin },
  props: {
    editMode: {
      type: Boolean,
      default: () => false
    }
  },

  data () {
    return {
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
        .then(res => { this.raffles = res; this.$store.commit('setRaffles', this.raffles) })

      this.isLoading = false
    }
  }
}
</script>
