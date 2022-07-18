<template>
  <div class="pets">
    <h1>This is the pets page</h1>
    <ShowThePet v-for="pet in this.$store.state.petData" :key="pet.id" :singlePet="pet"></ShowThePet>
  </div>
</template>

<script>

import ShowThePet from '@/components/ShowThePet.vue';

export default {
  name: 'PetView',
  components: {
    ShowThePet
  },
  data(){
    return {
      
    }
  }
 
}
</script>
