<template>
    <div class="singlePet" v-if="petDetails && petId">
        <img :src="petDetails[petId].image" :alt="petDetails[petId].name">
        <p>{{ petDetails[petId].name }}</p>
        <p>{{ petDetails[petId].description }}</p>

        <button @click="addToCart">Add to cart</button>
        <input v-model="cartAmount" type="number">
    </div>
</template>


<script>
    export default {
        name: "petSingle",
        data() {
            return {
                petId: null,
                petDetails: null,
                cartAmount: 1
            }
        },
        mounted() {
            this.petId = this.$route.params.petid;
            this.petDetails = this.$store.state.petData;
            console.log('pet: ' + this.petDetails[this.petId].description);
        },
        methods: {
            addToCart: function() {
                this.$store.commit('updateCartItem', {
                    "id": this.petId,
                    "amount": this.cartAmount
                })
            }
        }
    }

</script>