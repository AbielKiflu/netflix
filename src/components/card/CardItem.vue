<script setup>
import {defineProps,ref} from "vue";

const slideRef = ref(null)

defineProps({
    movies: {
        type:Object,
    },
    header: {
        type:String,
    }
})


 

const selectMovie=()=>{
    console.log("hi");
}

const nextHandler=() =>{
    slideRef.value.scrollLeft +=120;
  
}

const previousHandler=() =>{
    slideRef.value.scrollLeft -=120;
}
 

</script>

<template>
    
<div>
    <p class="header">
        {{ header }}
    </p>
    <div class="carousel">
        <button class="previous" @click.prevent="previousHandler">{{ "<" }}</button>
        <div class="slides" ref="slideRef">
        <div class="card" v-for="movie in movies.results" :key="movie.id"  >
         <img @click="selectMovie" :src="`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`" :alt="movie.title">
        </div>
        </div>
        <button class="next" @click.prevent="nextHandler">{{ ">" }}</button>
    </div>
</div>
   
</template>


<style lang="scss" scoped>

    .header{
        font-size: 1.5rem;
        color: lightgray;
        padding: 0.5rem;

    }

    .carousel{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
    }
    .slides{
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        overflow:hidden;
        scroll-snap-type: x;
        scroll-snap-type: x mandatory;
        transition: all 0.5s ease-in-out;
    }
    .card {
        border-radius: 0.3rem;
        display: inline-block;
        img{
            width: 15rem;
            
            
            object-fit: fill;
             
        }
    }
 

    .previous ,.next{
        position: absolute;
        background-color: transparent;
        color: transparent;
        padding: 1rem;
        border: transparent;
         

        &:hover{
            color: white;
        }
    }

    .next{
        right: 0;
    }
    
    .previous{
        left: 0;
    }


</style>
