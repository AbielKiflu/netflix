<template>
    <div class="wrapper">
        <div class="input-control">
            <input  id="email" type="email" >
            <span>Email Address</span>
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
        widows: 100%;
    }

    .input-control{
        position: relative;
        color: black;
        appearance: none;
        border: none;
        height: 3rem;
        
        input[type="email"] {
            appearance: none;
            border: none;
            outline: transparent;
            width: 100%;
            height: 100%;
            padding: .5rem;
            font-size: 1rem;
            &:focus ~ span{
                transform: translateY(-80%);
                font-size: 0.8rem;
             }
            }
        span{
            position: absolute;
            pointer-events: none;
            color: gray;
            top: 25%;
            left: 3%;
            transition: 0.5s ease;
           
        }

    }




</style>

