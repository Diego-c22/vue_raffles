export default {
  props: {
    raffle: {
      type: Object,
      required: true
    }
  },

  methods: {
    goToDetail () {
      this.$router.push({ name: 'RaffleDetail', params: { id: this.raffle.id } })
    }
  }
}
