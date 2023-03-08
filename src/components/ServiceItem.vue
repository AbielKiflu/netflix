<template>
    <div class="service" v-for="service in servicesState" :key="service.id" :class="{even:id%2==0, odd:id%2==1}">
    <div class="detail" >
        <h1>{{ service.title}}</h1>
        <h2>{{ service.description }}</h2>
    </div>
    <div class="image">
        <img :src="require(`@/assets/${service.image}`)" alt="Picture">
    </div>
 </div>
 
  
</template>


<script setup>
   import {reactive} from 'vue';

 

const services=[{
  id:1,
  title:"Enjoy on your TV",
  description:"Watch on Smart TV, Xbox chromecast, Apple TV, Blu-ray players, and more",
  image:"device-pile.png",
},
{
  id:2,
  title:"Watch everywhere.",
  description:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
  image:"mobile.jpg",
},
{
  id:3,
  title:"Create profiles for kids.",
  description:"Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
  image:"kids.png",
}]


const servicesState=reactive(services);
    
</script>


<style lang="scss" scoped>

    
    .service {
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        border-top: 0.5rem solid var(--gray-color);
        
    }

    .odd{
        flex-direction: row-reverse;
    }

    .even{
        flex-direction: row;
    }

    .detail{
        color:var(--light-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 35rem;
    }
    h1{
        font-weight: bold;
       font-size: 2.5rem;
    }
   
 
    img{
        object-fit: contain;
        max-width: 25rem;
        height:auto;
        
    }
 
 


</style>