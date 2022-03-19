<template>
  <div class="rounded m-2 shadow-2xl w-10/12 xl:w-full relative bg-card">
    <div class="">
      <div class="">
        <img :src="raffle.images[0].image" class="rounded-t object-cover h-40 w-full" :alt="raffle.name">
      </div>
      <div>
        <p class="text-xl font-light">{{ raffle.name }}</p>
        <div class="flex justify-between w-full">
          <p class="bg-secundary px-3 py-1 text-white rounded-bl">Quedan {{ daysLeft }} dias</p>
          <p class="font-bold mr-4">{{ raffle.ticket_price | price }}</p>
        </div>
      </div>
    </div>
    <div class="options w-full absolute justify-center items-center bg-black hidden bg-opacity-80 bottom-0 text-white">
      <span @click="editRaffle" class="hover:bg-white hover:text-black text-xl border rounded-full h-12 w-12 flex justify-center items-center "><i class="fas fa-pen"></i></span><span @click="goToDetail" class="h-12 w-12 flex justify-center items-center text-2xl border rounded-full p-2 mx-2 hover:bg-white hover:text-black"><i class="far fa-eye"></i></span>
    </div>
  </div>
</template>

<script>
import date from '@/mixins/date'
import cart from '@/mixins/cart'
export default {
  name: 'RaffleCartAdmin',
  mixins: [date, cart],

  methods: {
    editRaffle () {
      this.$store.commit('setRaffle', this.raffle)
      this.$store.commit('setEditState', true)
    }
  }
}
</script>

<style>
.bg-card:hover .options {
  display: flex;
  height: 100%;
  max-height: 100%;
  transition: all 1s ease;
}
</style>
