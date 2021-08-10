export default {
  data () {
    return {
      dateEnd: ''
    }
  },

  computed: {
    daysLeft () {
      const today = Date.now()
      const endDay = new Date(this.dateEnd)
      return Math.trunc((endDay - today) / 86400000)
    }

  }
}
