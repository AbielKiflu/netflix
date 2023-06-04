<template>
    <div>
        <select name="lang" >
        <option value="En">English</option>
        <option value="Fr">French</option>
        <option value="Nr">Dutch</option>
    </select>
    </div>
</template>


<script setup>

</script>


<style scoped lang="scss">
    div{
        position: relative;
        outline: 1px solid white;
        display: flex;
        
         

    }
    select{
        appearance: none;
        background-color: black;
        color: white;
        outline: transparent;
        border: none;
        option{
            background-color: gray;
            text-align: center;
            }


    }
</style>

