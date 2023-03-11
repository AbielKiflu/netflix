<template>
    <form class="wrapper">
        <div class="input-control">
            <input class="field" id="email" required type="email" >
            <label for="email">Email Address</label>
        </div>
        <ButtonItem text="Get Started"/>
    </form>
</template>


<script setup>
 import ButtonItem from "@/components/button/ButtonItem";

</script>


<style scoped lang="scss">
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .input-control{
        position: relative;
        color: black;
        appearance: none;
        border: none;
        outline: 1px solid white;
        margin: auto;
        border-radius: 0.2rem;
        padding: 0.15rem;
        display: flex;
        
        
               
        .field {
            appearance: none;
            border: none;
            padding: .5rem;
            font-size: 1rem;
            color: white;
            border-radius: 0.2rem;
            background: rgba(0,0,0,0.5);
            &:focus,&:valid{
                outline: 1px solid gray;
            }

            &:focus ~ label{
                top: 20%;
                font-size: 0.8rem;
                
             }

            &:valid{
                top: 20%;
                font-size: 0.8rem;
            }

            }
            label{
            position: absolute;
            pointer-events: none;
            color: gray;
            top: 50%;
            left: 0.5rem;
            transform: translateY(-50%);
            transition: 0.5s ease;
           
        }

    }




</style>

