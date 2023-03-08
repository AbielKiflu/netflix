<template>
   <WelcomeView/>
</template>

<script setup>
 import WelcomeView from './views/WelcomeView.vue';
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

  *,:root{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-size: 62.5%;
    --primary-color: #e50914;
    --dark-color: #141414;
    --gray-color:#303030;
    --light-color: #f4f4f4;
    font-family: 'Kanit',Arial, sans-serif;
    font-weight: 600;

    //outline: 1px solid red;
  }

  body{
    background-color: #000000;
  }
</style>
