export default {
  computed: {
    daysLeft () {
      const today = Date.now()
      const endDay = new Date(this.raffle.raffle_end)
      return Math.trunc((endDay - today) / 86400000)
    }

  }
}
