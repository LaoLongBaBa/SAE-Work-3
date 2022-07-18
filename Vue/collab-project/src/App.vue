<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/pets">Pets</router-link> |
        <router-link to="/cart">Cart</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  beforeCreate(){
    axios
    .get('https://api.npoint.io/92650d0fd8c2b3811076')
    .then(response => {
      console.log(response);
      this.$store.state.petData = response.data.Pet; 
    })
  } 
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
