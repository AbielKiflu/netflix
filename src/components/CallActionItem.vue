<template>
    <div class="wrapper">
        <div class="input-control">
            <input class="field" id="email" required type="email" >
            <label for="email">Email Address</label>
        </div>
        <ButtonItem text="Get Started"/>
    </div>
</template>


<script setup>
 import ButtonItem from "@/components/button/ButtonItem";
</script>


<style scoped lang="scss">
    .wrapper {
        display: flex;
        flex-wrap: wrap;
      
    }

    .input-control{
        position: relative;
        color: black;
        appearance: none;
        border: none;
        margin: auto;
        height: 3rem;
        display: flex;
        
        .field {
            appearance: none;
            border: none;
            outline: transparent;
            padding: .5rem;

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

