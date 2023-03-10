<template>
 
<main class="header">
    <nav class="menu">
        <img class="menu-logo" :src="require('@/assets/logo.png')" alt="logo">         
    </nav>

    <article class="formlogin">
        
        <form action="">
            <h2>Sign In</h2>
            <div class="control">
                <input id="email" required type="email">
                <label for="email">Email Address</label>
            </div>

            <div class="control" >
                <input id="password" required type="password">
                <label for="password">Password</label>
            </div>
 
        </form>
    </article>


</main>

</template>


<script setup>

</script>


<style scoped lang="scss">
    .formlogin{
        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            background:  rgba(0, 0, 0, 0.7);
            margin: auto;
            padding: 2rem;
            max-width: 35rem;
        }
        .control{
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
            border-radius: 0.2rem;
            background-color: #333;
            margin-bottom: 1rem;
 

            input[type="email"],input[type="password"]{
                appearance: none;
                outline: transparent;
                border-color:transparent;
                background-color: #333;
                line-height:3rem;
                color: #8c8c8c;
                margin-top: 0.5rem;
                

                &:focus + label {
                    font-size: 0.8rem;
                    top: 25%;
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
                transition: font .1s ease,top .1s ease,transform .1s ease;
            }
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
        background: linear-gradient(black 20%,rgba(0, 0, 0, 0.9) 40%,transparent);
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

