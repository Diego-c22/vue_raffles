<template>
  <transition name="fade-scale">
    <button @click="onClick" class="w-16 h-16 rounded-full bg-secundary opacity-80 hover:opacity-100 text-white text-2xl drop-shadow-2xl fixed bottom-10 right-10"><i class="fas fa-plus"></i></button>
  </transition>
</template>

<script>
export default {
  name: 'CreateButton',

  methods: {
    onClick () {
      this.$emit('onClickCreate')
    }
  }
}
</script>

<style>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all .3s;
}

.fade-scale-enter, .fade-scale-leave-to {
  transform: scale(0.5)
}

</style>
