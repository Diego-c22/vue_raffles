<template>
  <div class="home grid grid-cols-1 justify-center items-center">
    <section>
      <slider :raffles="mainRaffles" />
    </section>

    <raffles/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import Raffles from '@/components/Raffles.vue'
export default {
  name: 'Home',
  components: { Slider, Raffles },

  data () {
    return {
      isLoading: false
    }
  },

  computed: {
    raffles () {
      return this.$store.state.raffles
    },

    mainRaffles () {
      return this.raffles.filter(raffle => raffle.main === true)
    },

    images () {
      const images = []
      this.raffles[4].images.forEach((image, index) => {
        const img = {
          id: index,
          big: image.image,
          thumb: image.image
        }

        images.push(img)
      })

      return images
    }
  }
}
</script>

<style>
.h-50vw {
  height: 50vw;
}
</style>
