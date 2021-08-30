<template>
  <div class="rounded m-2 shadow-2xl w-10/12 xl:w-full" @click="goToDetail">
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
</template>

<script>
import date from '@/mixins/date'
import cart from '@/mixins/cart'
export default {
  name: 'RaffleCart',
  mixins: [date, cart]
}
</script>
