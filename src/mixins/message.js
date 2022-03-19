export default {
  methods: {
    createMessage (message) {
      this.$store.dispatch('showMessage', message)
    }
  },

  computed: {
    showMessage () {
      return this.$store.state.showMessage
    }
  }
}
