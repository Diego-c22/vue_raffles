<template>
  <div class="p-10 bg-gray-200 rounded-md fixed top-1/2">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Message',

  mounted () {
    this.startTime()
  },

  methods: {
    startTime () {
      setTimeout(() => {
        this.$store.commit('setStateMessage', false)
      }, 2000)
    }
  }
}
</script>
