<template>
 
<main class="header">
    <nav class="menu">
        <img class="menu-logo" :src="require('@/assets/logo.png')" alt="logo">         
    </nav>

    <article class="formlogin">
        
        <form action="">
            <h2>Sign In</h2>
            <div class="control">
                <input class="field" id="email" required type="email">
                <label for="email">Email Address</label>
            </div>

            <div class="control" >
                <input class="field" id="password" required type="password">
                <label for="password">Password</label>
            </div>

            <ButtonItem text="Sign In"/>

            <div class="formcontainer">
                <div>
                    <input  type="checkbox" name="" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <p>Need Help?</p>
            </div>

            <div class="formcontainer">
                <p>New to Netflix? <a href="#"> Sign up now</a>.</p>
            </div>
 
        </form>
    </article>


</main>

</template>


<script setup>
  import ButtonItem from "@/components/button/ButtonItem";
</script>


<style scoped lang="scss">
    .formlogin{
         
        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background:  rgba(0, 0, 0, 0.67);
            margin: auto;
            padding: 2rem;
            max-width: 25rem;
            
        }
        .control{
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 1rem;
            border-radius: 0.2rem;
            background-color: #333;
            margin-bottom: 0.5rem;
            
            .field{
                appearance: none;
                outline: transparent;
                border-color:transparent;
                background-color: #333;
                font-size: 1.1rem;
                color: #8c8c8c;
               
                &:focus + label {
                    font-size: 0.8rem;
                    top: 20%;
                }

                &:valid + label{
                    font-size: 0.8rem;
                    top: 25%;
                }
                
 

            }

            label{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                color: #8c8c8c;
                transition: font .1s ease forwards,top .1s ease,transform .1s ease forwards;
            }
        }

    }

    .formcontainer{
        display: flex;
        justify-content: space-between;
        color: #8c8c8c;
        div {
            display: flex;
            gap: 0.5rem;
        }

        a{
            color: white;
           
        }
    }

    h2{
        margin-bottom:1rem;
    }

    .header{
        background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73))
        ,url('@/assets/banner.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
 
        min-height: 100vh;
        width: 100%;
        color: white;
        gap: 1rem;
    }
    .menu{
        padding: 1rem 1rem;
        width: 100%;
        .menu-logo{
            width: 7rem;
        }
    }

    @media screen and (min-width: 600px) {
        .menu {
            .menu-logo{
            width: 10rem;
        }
        }
    }



     

</style>

