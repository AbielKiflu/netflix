<template>
     <header>
        <nav class="menu">
            <img class="menu-logo" :src="require('@/assets/logo.png')" alt="logo">
            <div class="menu-action">
                <DropdownItem/>
                <RouterLink to="/login"><ButtonItem text="Sign In"/></RouterLink>
            </div>
        </nav>
        <div class="header">

        <h1>
            Unlimited movies, TV shows, and more.
        </h1>

        <h2>
            Watch anywhere. Cancel anytime.
        </h2>

        <p>
            Ready to watch? Enter your email to create or restart your membership.
        </p>

        <CallActionItem/>
        </div>
     </header>
     <ServiceItem/>
     <FAQ/>
     <Footer/>
</template>


<script setup>
    import ButtonItem from "@/components/button/ButtonItem";
    import DropdownItem from "@/components/dropdown/DropdownItem";
    import CallActionItem from "@/components/CallActionItem";
    import FAQ from '@/components/FAQ.vue';
    import Footer from '@/components/Footer.vue';
    import ServiceItem from '@/components/ServiceItem.vue';
    import { RouterLink } from "vue-router"

    
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

        .menu-action{
            display: flex;
            gap: 0.5rem;
            padding-right: 1rem;
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
        gap: 0.5rem;
        
        h1,h2,p{
            text-align: center;
        }
         
    }


    @media screen and (min-width: 600px) {
        .menu {
            .menu-logo{
            width: 10rem;
        }
        }
        .header{
            height: 80vh;
 
            h1{
                font-size: 3rem;
            }
            h2{
                font-size: 2.4rem;
            }

            p{
                font-size: 1.5rem;
            }

        }

 

    }

</style>

