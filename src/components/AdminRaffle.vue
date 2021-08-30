<template>
  <div class="">
    <raffles :editMode="true"/>
    <create-button v-show="!createState" @onClickCreate="createState = true"/>
    <create-raffle @closeTab="createState = false" v-show="createState"/>
    <edit-raffle v-if="editState" @closeTab="closeEditTab"/>
  </div>
</template>

<script>
import Raffles from '@/components/Raffles'
import CreateButton from '@/components/CreateButton'
import CreateRaffle from '@/components/CreateRaffle'
import EditRaffle from '@/components/EditRaffle'
export default {
  name: 'AdminRaffle',
  components: { Raffles, CreateButton, CreateRaffle, EditRaffle },

  data () {
    return {
      createState: false
    }
  },

  methods: {
    closeEditTab () {
      this.$store.commit('setEditState', false)
    }
  },

  computed: {
    editState () {
      return this.$store.state.editState
    }
  }
}
</script>
