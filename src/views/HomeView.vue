<template>
    <p>Hi there</p>
    <CardItem :movies="moviesPopular" header="Popular"/>
    <CardItem :movies="movieUpcoming" header="Upcomming"/>
    <CardItem :movies="moviesTopRated" header="Top Rated"/>
    <Footer/>
</template>


<script setup>
   import { watchPostEffect,ref } from 'vue';
   import reqests from "@/api/request";
   import instance from '@/api/';
   import useMovieStore from "@/store/movie";
   import { storeToRefs } from 'pinia';

   import Footer from '@/components/Footer.vue';
   import CardItem from "@/components/card/CardItem";
   
   const {movie}=storeToRefs(useMovieStore());
   const moviesPopular=ref([]);
   const movieUpcoming=ref([]);
   const moviesTopRated=ref([]);

   const fetchMovie=async (path)=>{
      try {
         const response = await instance.get(path);
         return await response.json()
 
   } catch (error) {
      return error.json()
   }
   }

   watchPostEffect(async () => {
      movie.value=await fetchMovie(reqests.movie)
      moviesPopular.value=await fetchMovie(reqests.moviesPopular)
      movieUpcoming.value=await fetchMovie(reqests.moviesUpcoming)
      moviesTopRated.value=await fetchMovie(reqests.moviesTopRated)

   });

</script>


<style scoped>
    p{
        color: white;
    }
</style>

