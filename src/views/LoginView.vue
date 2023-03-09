<template>
    <header>
        <nav class="menu">
            <img class="menu-logo" :src="require('@/assets/logo.png')" alt="logo">         
        </nav>
     <div class="header">

     </div>
    </header>
    <Footer/>
</template>


<script setup>
    import Footer from '@/components/Footer.vue';
</script>


<style scoped lang="scss">
    .menu{
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem;
        width: 100%;
        background: linear-gradient(black 20%,rgba(0, 0, 0, 0.9) 40%,transparent);
        .menu-logo{
            width: 7rem;
        }
    }

    .header{
        background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73))
        ,url('@/assets/banner.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 60vh;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }


    @media screen and (min-width: 600px) {
        .menu {
            .menu-logo{
            width: 10rem;
        }
        }
        .header{
            height: 80vh;
        }
    }

</style>

