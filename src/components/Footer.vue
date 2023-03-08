<template>
    <section class="wrapper">
        <footer class="footer">
     
    <section class="links">
    <ul> 
        <li><a href="#" >  Audio Description</a></li>
        <li><a href="#" > Investor Relations </a></li>
        <li><a href="#" >  Legal Notices</a></li>
    </ul>
    
    <ul> 
    <li><a href="#" > Help Center </a></li>
    <li><a href="#" > Jobs </a></li>
    <li><a href="#" >Cookie Preferences  </a></li>
    </ul>
    
    <ul> 
    <li><a href="#" > Gift Cards </a></li>
    <li><a href="#" >  Terms of Use</a></li>
    <li><a href="#" >Corporate Information  </a></li>
    </ul>
    
    <ul> 
    <li><a href="#" > Media Center </a></li>
    <li><a href="#" >  Privacy</a></li>
    <li><a href="#" >  Contact Us</a></li>
    </ul>
    </section>
    
    <button> Source Code</button>
    <p>&copy;1997-2023 Netflix, Inc. </p>
    
    </footer>
    </section>
    </template>
    
    
    <script>
     
    export default {
        name: 'pageFooter',
        
    }
    </script>
    
    
    
    <style  lang="scss" scoped>
    .wrapper {
        padding: 1rem;
        //border-top: 0.5rem solid var(--gray-color);
    }
    footer{
        margin: 0.5rem auto;
        max-width: 780px;
        
    .links{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap:1rem;
       
         
        ul{
            flex: 1;
            list-style: none;
            display: flex;
            flex-grow: 1;
            gap:1rem;
            flex-direction: column;
                li{
                     
                    a{
                        text-decoration:none;
                        color:gray;
                        font-size: 0.8rem;
                        font-weight: 600;
                    }
                }
        }
    }
    
    button{
        background-color: transparent;
        padding: 0.5rem;
        margin:1rem 0;
        color: gray;
        border: 0.1rem solid gray;
    }
    p{
        color: gray;
        font-size: 0.7rem;
    }
    
    
    
    
    }
    </style>