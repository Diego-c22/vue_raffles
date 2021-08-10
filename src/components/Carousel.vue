<template>
    <div class="select-none relative flex justify-center flex-col md:flex-row" >
        <div class="mb-4 relative flex justify-center">
            <img :src="currentImage" class="max-h-screen" alt="">
            <div class="actions">
                <span @click="prevImage" class="prev">
                    &#8249;
                </span>
                <span @click="nextImage" class="next">
                    &#8250;
                </span>
            </div>
        </div>
        <div class="flex flex-row justify-center md:flex-col">
            <div
                v-for="(image, index) in  images"
                :key="image.id"
                :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                @click="activateImage(index)"
            >
                <img class="w-32 h-32 object-fill" :src="image.image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      // Index of the active image
      activeImage: 0
    }
  },
  computed: {
    // currentImage gets called whenever activeImage changes
    // and is the reason why we don't have to worry about the
    // big image getting updated
    currentImage () {
      return this.images[this.activeImage].image
    }
  },
  methods: {
    // Go forward on the images array
    // or go at the first image if you can't go forward
    nextImage () {
      var active = this.activeImage + 1
      if (active >= this.images.length) {
        active = 0
      }
      this.activateImage(active)
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage () {
      var active = this.activeImage - 1
      if (active < 0) {
        active = this.images.length - 1
      }
      this.activateImage(active)
    },
    activateImage (imageIndex) {
      this.activeImage = imageIndex
    }
  },
  created () {
    // Check if startingImage prop was given and if the index is inside the images array bounds
    if (this.startingImage &&
            this.startingImage >= 0 &&
            this.startingImage < this.images.length) {
      this.activeImage = this.startingImage
    }
  },
  props: ['startingImage', 'images']
}
</script>

<style scoped>
.p-1-2 {
  padding-bottom: 50%;
}

.thumbnail-image {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2px;
}

.thumbnail-image > img {
    transition: all 250ms;
}

.thumbnail-image:hover > img,
.thumbnail-image.active > img {
    opacity: 0.6;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0, 0.5);
}

.card-img {
    position: relative;
    margin-bottom: 15px;
}

.card-img > img {
    display: block;
    margin: 0 auto;
}

.actions {
    font-size: 1.5em;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #585858;
}

.actions > span {
    cursor: pointer;
    transition: all 250ms;
    font-size: 45px;
}

.actions > span.prev {
    margin-left: 5px;
}

.actions > span.next {
    margin-right: 5px;
}

.actions > span:hover {
    color: #eee;
}
</style>
