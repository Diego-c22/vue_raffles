<template>
  <div class="">
    <form enctype="multipart/form-data" @submit.prevent="createRaffle">
      <input type="file" multiple accept="image/*" @change="onFileSelected($event)" />
      <input v-model="name" type="text" required placeholder="Nombre del sorteo">
      <input v-model="description" type="text" required placeholder="Descripcion del sorteo">
      <input v-model="prizePrice" type="number" required placeholder="Precio del premio">
      <input v-model="ticketPrice" type="number" required placeholder="Precio por boleto">
      <input v-model="drawingDate" type="date" required placeholder="Fecha del sorteo">
      <input v-model="raffleEnd" type="date" required placeholder="Ultimo dia para comprar boletos">
      <input v-model="raffleActivation" type="date" required placeholder="Fecha en que se pueden empezar a comprar boletos">
      <input v-model="numbersQuantity" type="number" required placeholder="Cantidad de boletos">
      <button type="submit" class="button bg-primary_dark">Crear</button>
    </form>
  </div>
</template>

<script>
import { createRaffle } from '@/API'
export default {
  name: 'CreateRaffle',
  data () {
    return {
      selectedFiles: [],
      name: '',
      description: '',
      prizePrice: '',
      ticketPrice: '',
      drawingDate: '',
      raffleEnd: '',
      raffleActivation: '',
      numbersQuantity: ''
    }
  },

  methods: {
    onFileSelected (event) {
      console.log(event.target)
      this.selectedFiles = event.target.files
    },

    createRaffle () {
      const fd = new FormData()
      this.selectedFiles.forEach(element => {
        fd.append('images', element, element.name)
      })
      fd.append('name', this.name)
      fd.append('description', this.description)
      fd.append('prize_price', this.prizePrice)
      fd.append('ticket_price', this.ticketPrice)
      fd.append('drawing_date', this.drawingDate)
      fd.append('raffle_end', this.raffleEnd)
      fd.append('raffle_activation', this.raffleActivation)
      fd.append('numbers_quantity', this.numbersQuantity)

      createRaffle(fd, this.token)
        .then(res => { console.log(res) })
        .catch(error => { console.log(error) })
    }
  },

  computed: {
    token () {
      return this.$store.state.token
    }
  }
}
</script>
