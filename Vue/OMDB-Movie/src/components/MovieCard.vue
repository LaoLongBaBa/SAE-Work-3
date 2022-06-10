<template>
    <div>
        <router-link :to="singleUrlGenerator">
            <img :src="movieDetails.Poster" alt="">
            <h3>{{ movieDetails.Title }}</h3>
        </router-link>
        <p>{{ movieDetails.Type }}</p>
        <p>{{ movieDetails.Year }}</p>
        <hr>
    </div>
</template>

<script>

    export default {
        name: "MovieCard",
        props: {
            movieDetails: Object
        },
        mounted() {
            console.log(this.movieDetails)
        },
        computed: {
            singleUrlGenerator() {
                return '/id/' + this.movieDetails.imdbID;
            },
        }
    }


</script>