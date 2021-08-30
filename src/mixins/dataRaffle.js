export default {
  data () {
    return {
      mainImage: undefined,
      image: '',
      name: '',
      description: '',
      prizePrice: '',
      ticketPrice: '',
      drawingDate: '',
      raffleEnd: '',
      raffleActivation: '',
      numbersQuantity: '',
      mainRaffle: false
    }
  },

  methods: {
    onFileSelected (event) {
      this.mainImage = event.target.files[0]
      this.image = URL.createObjectURL(this.mainImage)
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
      fd.append('main', this.mainRaffle)
      if (this.mainRaffle) {
        fd.append('main_image', this.mainImage)
      }

      this.sendData(fd)
    }
  },

  computed: {
    token () {
      return this.$store.state.token
    }
  }
}
