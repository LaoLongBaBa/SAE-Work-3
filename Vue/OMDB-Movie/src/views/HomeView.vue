<template>
  <div class="home">
    <input @keyup.enter="updateRouteAndSearch" v-model="searchInput" for="text" id="searchInput" placeholder="MovieName" />
    <button @click="updateRouteAndSearch">Search</button>
    <hr>
    <div v-if="this.movieList[0]">
      <MovieCard v-for="movie in movieList" v-bind:key="movie.imdbID" :movieDetails="movie"></MovieCard>
    </div>
  </div>
</template>

<style>
  .home {
    margin: 0 auto;
    text-align: center;
  }

</style>

<script>
import axios from "axios";
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "HomeView",
  data() {
    return {
      movieList: [],
      searchInput: this.$route.params.searchTerm,
    };
  },
  components: {
    MovieCard,
  },
  methods: {
    search: function () {
      axios
        .get("http://www.omdbapi.com/?apikey=171c5289&s=" + this.searchInput)
        .then((response) => {
          this.movieList = response.data.Search;
      });
    },
    updateRouteAndSearch: function () {
      this.$router.push('/' + this.searchInput);
      this.search();
    }
  },
  mounted() {
    document.querySelector('#searchInput').focus();
    if (this.searchInput !== undefined) {
      this.search();
    }
  }
};
</script>