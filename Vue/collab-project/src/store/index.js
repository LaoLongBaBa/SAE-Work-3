import { createStore } from 'vuex'

export default createStore({
  state: {
      petData: [],
      cartContents: [],
      animalsClickedOn: 0,
  },
  getters: {
  },
  mutations: {
    animalsClicked(state){
      state.animalsClickedOn++
    },
    updateCartItem(state, payload) {
      state.cartContents.push(payload);
    },
    incrementCartItem(state, payload) {
      state.cartContents[payload].amount++
    },
    decrementCartItem(state, payload) {
      state.cartContents[payload].amount--
    },
    changeAmount(state, payload) {
      console.log(payload);
      state.cartContents[payload.id].amount = payload.amount;
    }
  },
  actions: {

  },
  modules: {
  }
})
