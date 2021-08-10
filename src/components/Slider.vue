<template>
  <div ref="slider" class="x-mandatory w-screen overflow-scroll flex relative">
    <div
      v-for="raffle in raffles" :key="raffle.id"
      :style="`background-image:url(${raffle.main_image})`"
      class="bg-black w-screen min-w-full h-vw snap-center bg-center bg-cover bg-slider"
      >
      <div class="bg-black max-h-10 bg-opacity-70 absolute bottom-0 w-screen p-1 text-white">
        <p class="font-bold">{{raffle.name}}</p>
        <button class="button shadow-lg hidden border-2 p-2 border-white bg-transparent text-white bottom-5 left-1/2">Ver Sorteo</button>
      </div>
    </div>
    <div @click="moveSlider(-1)" class="z-10 sticky rounded-full left-5 top-1/2 h-6 w-6 bg-white text-black opacity-80">&lt;</div>
    <div @click="moveSlider(1)" class="z-10 sticky rounded-full right-5 top-1/2 h-6 w-6 bg-white text-black opacity-80">&gt;</div>

  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    raffles: {
      type: Array,
      required: true
    }
  },

  mounted () {
    this.slider = this.$refs.slider
    this.width = this.slider.offsetWidth
  },

  data () {
    return {
      raffle: null,
      width: null,
      number: 0
    }
  },

  methods: {
    moveSlider (n) {
      if ((n === -1 && this.number === 0) || (this.number === this.raffles.length - 1 && n === 1)) {
        n === 1 ? this.number = 0 : this.number = this.raffles.length - 1
      } else {
        this.number += n
      }
      this.slider.scrollTo({
        left: this.width * this.number,
        behavior: 'smooth'
      })
      console.log(this.width)
      console.log(this.number)
      console.log(this.number * this.width)
    }
  }
}
</script>

<style>
.x-mandatory {
  scroll-snap-type: x mandatory;
}

.snap-center {
  scroll-snap-align: center;
}

.bg-slider:hover .button {
  display: unset;
}

.bg-slider:hover div {
  height: 80%;
  max-height: 80%;
  transition: all 1s ease;
}

.h-vw {
  height: 50vw;
}

@media (min-width: 640px) {
  .h-vw {
    height: 30vw;
  }
}
</style>
