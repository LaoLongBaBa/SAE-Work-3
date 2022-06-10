<template>
    <div class="singleMovie">
        <SingleMovieDetails :details="movieDetails"></SingleMovieDetails>
    </div>
</template>

<style>

.singleMovie {
    text-align: center;
}

</style>

<script>
import SingleMovieDetails from "@/components/SingleMovieDetails.vue";

import axios from "axios";

export default {
    name: "SingleMovie",
    data() {
        return {
            movieDetails: {}
        }
    },
    components: {
        SingleMovieDetails
    },
    computed: {
        findIdLinkGen: function() {
            return "http://www.omdbapi.com/?apikey=171c5289&i=" + this.$route.params.id
        }
    },
    methods: {
        getSingleMovieDetails: function() {
            axios
            .get(this.findIdLinkGen)
            .then((response) => {
                this.movieDetails = response.data;
                console.log('movie details ' + this.movieDetails);
            });
        }
    },
    mounted() {
        this.getSingleMovieDetails();
    }
}

</script>