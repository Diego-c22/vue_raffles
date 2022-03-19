<template>
  <transition name="fade-scale">
    <div class="bg-white rounded-md shadow-2xl absolute border top-5 right-10 left-10 z-30 p-2 bg-opacity-90">
      <div class="flex justify-end text-right m-1">
        <span @click="closeTab" class="font-bold text-2xl text-primary_dark cursor-pointer hover:text-warning"><i class="fas fa-times"></i></span>
      </div>
      <div class="">
        <form enctype="multipart/form-data" @submit.prevent="createRaffle" class="flex flex-col items-center w-full">
          <div class="flex w-full justify-around">
            <div class="flex flex-col items-center w-3/5">
              <label class="mt-2 text-xs text-primary_dark" >Nombre del Sorteo</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="name" type="text" required placeholder="Nombre del sorteo">
              <label class="mt-2 text-xs text-primary_dark" >Precio del Premio</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="prizePrice" type="number" required placeholder="Precio del premio">
              <label class="mt-2 text-xs text-primary_dark" >Precio por Boleto</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="ticketPrice" type="number" required placeholder="Precio por boleto">
              <label class="mt-2 text-xs text-primary_dark" >Fecha del Sorteo</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="drawingDate" type="date" required placeholder="Fecha del sorteo">
              <label class="mt-2 text-xs text-primary_dark" >Ultimo dia para comprar boletos</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="raffleEnd" type="date" required placeholder="Ultimo dia para comprar boletos">
              <label class="mt-2 text-xs text-primary_dark" >Primer dia para comprar boletos</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="raffleActivation" type="date" required placeholder="Fecha en que se pueden empezar a comprar boletos">
              <label class="mt-2 text-xs text-primary_dark" >Cantidad de boletos del sorteo</label>
              <input class="w-5/6 outline-none border rounded-full p-2 mb-2" v-model="numbersQuantity" type="number" required placeholder="Cantidad de boletos">
            </div>

            <div class="flex flex-col items-center w-2/5">
              <label for="input-file" class="mt-2 text-xs text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2" >Subir Imagenes</label>
              <input id="input-file" class="hidden" type="file" multiple accept="image/*" @change="onFilesSelected($event)" />
              <div class="grid grid-cols-5 justify-between w-full gap-1.5" v-show="selectedFiles.length > 0">
                <div class="relative m-1 w-full" v-for="(img, index) in images" :key="img">
                  <span @click="deleteImg(index)" class="absolute right-3 top-1 text-xl text-primary_dark cursor-pointer hover:text-warning"><i class="fas fa-times"></i></span>
                  <img :src="img" alt="" class=" h-24 m-1">
                </div>
              </div>
              <label class="mt-2 text-xs text-primary_dark" >Descripcion del Sorteo</label>
              <textarea class="outline-none border rounded-xl p-2 mb-2 w-5/6" v-model="description" type="textarea" required placeholder="Descripcion del sorteo" rows="10"></textarea>
              <div class="flex">
                <input type="checkbox" id="checkbox" v-model="mainRaffle">
                <label class="ml-3" for="checkbox">Rifa principal</label>
              </div>

              <div v-show="mainRaffle">
                <label for="input" class="mt-2 text-xs text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2" >Subir Imagen principal</label>
                <input id="input" class="hidden" type="file"  accept="image/*" @change="onFileSelected($event)" />
                <div class="flex justify-between mt-2" v-show="mainImage">
                  <div class="relative">
                    <span @click="mainImage = none" class="absolute right-3 top-1 text-xl text-primary_dark cursor-pointer hover:text-warning"><i class="fas fa-times"></i></span>
                    <img :src="image" alt="" class="object-fill h-32 m-1">
                  </div>
                </div>
              </div>

              </div>
          </div>

          <button type="submit" class="button bg-blue-600 hover:bg-blue-700 p-1 w-1/4">Crear</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { createRaffle } from '@/API'
import closeTab from '@/mixins/closeTab.js'
import dataRaffle from '@/mixins/dataRaffle.js'
export default {
  name: 'CreateRaffle',
  mixins: [closeTab, dataRaffle],

  data () {
    return {
      selectedFiles: []
    }
  },

  methods: {
    deleteImg (position) {
      this.selectedFiles.splice(position, 1)
    },

    onFilesSelected (event) {
      event.target.files.forEach(element => {
        this.selectedFiles.push(element)
      })
    },

    sendData (fd) {
      createRaffle(fd, this.token)
        .then(res => { console.log(res) })
        .catch(error => { console.log(error) })
    }
  },

  computed: {
    images () {
      return this.selectedFiles.map(file => URL.createObjectURL(file))
    }
  }
}
</script>

<style>

label[for="input-file"] {
  display: inline-block;
  transition: all .5s;
  cursor: pointer;
  width: fit-content;
}

.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all .3s;
}

.fade-scale-enter, .fade-scale-leave-to {
  transform: scale(0)
}
</style>
