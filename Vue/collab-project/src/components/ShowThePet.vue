<template>
  <div>

      <img @click="clickOnPets" class="animalClicker" :src="singlePet.image" :alt="singlePet.name" >
    <router-link :to="'/pet/' + singlePet.id">
      <h3>{{ singlePet.name }}</h3>
      <p>{{ singlePet.description }}</p>
    </router-link>
  </div>
</template>

<script>
export default{
    name:"ShowThePet",
    props:{
      singlePet: Object
    },
     methods: {
       clickOnPets(){
        var petOrPets;
        if(this.$store.state.animalsClickedOn === 0){
          petOrPets = "pet!"
        } else {
          petOrPets = "pets!"
        }
        this.$store.commit('animalsClicked');
        alert('You have clicked on ' + this.$store.state.animalsClickedOn + " " + petOrPets);
 }
  }
}

</script>