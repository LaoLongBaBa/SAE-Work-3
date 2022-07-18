<template>

<div v-if="this.$store.state.cartContents[0]">

    <div v-for="(cartData, index) in this.cart" :key="cartData.id"> 
        <h3>{{ pets[cartData.id].name }}</h3>
        
        <label for="amount">Amount:
            <input min="1" max="10" @keyup="modifyAmount(index, cartData.amount)" type="number" v-model="cartData.amount">
        </label>
        <br>
        <button @click="removeItem(index)">-</button>
        <button @click="addItem(index)">+</button>

    </div>

    <p>Total Price: {{ totalPriceCounter }}</p>

</div>
</template>


<script>
export default {
    name: 'CartView',
    data() {
        return {
            cart: this.$store.state.cartContents,
            pets: this.$store.state.petData
        }
    },
    computed: {
        totalPriceCounter() {
            var totalPrice = 0;
            for (let i = 0; i < this.cart.length; i++) {
                totalPrice += (this.pets[this.cart[i].id].price * this.cart[i].amount);
            }
            return totalPrice;
        }
    },
    methods: {
        addItem: function(index) {
            this.$store.commit('incrementCartItem', index)
        },
        removeItem: function(index) {
            this.$store.commit('decrementCartItem', index)
        },
        modifyAmount: function(index, amount) {
            this.$store.commit('changeAmount', {
                "id": index,
                "amount": amount
            })
        }
    }
}


</script>