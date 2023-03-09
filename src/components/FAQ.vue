<script setup>
 import {reactive} from 'vue';
 
 
 
 

 const faqdata =[
    {
        id:1,
        question: "How can I watch on Netflix?" ,
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        isOpen: false,
    },
    {
        id:2,
        question: "What is Netflix?" ,
        answer: "Netflix is a streaming service",
        isOpen: false,
    },
    {
        id:3,
        question: "How much Netflix costs?",
        answer:  "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 8,99 € to 17,99 € a month. No extra costs, no contracts.",
        isOpen: false,
    },
    {
        id:4,
        question: "How do I cancel?",
        answer:  "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        isOpen: false,
    },
    {
        id:5,
        question: "Is Netflix good for kids?",
        answer:  "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        isOpen: false,
    }
    ]

    const faqState=reactive(faqdata);

    const toggle=(id)=>{
        
        faqState.filter(item=>{
            if(item.id==id){
                if(item.isOpen)
                item.isOpen = false;
                else
                item.isOpen = true;
            }else{
                item.isOpen =false; 
            }
            
        })
    }
 
</script>

<template>
    <div class="wrapper">
        <h1>Frequently Asked Questions</h1>
        <ul class="faq">
            <li v-for="faq in faqState" :key="faq.id" >
               <div class="title">
               <h2> {{ faq.question }}</h2>
               <button  @click="()=>toggle(faq.id)"> {{ faq.isOpen?"X":"+" }}</button>
               </div>
               <div class="detail" v-if="faq.isOpen">
                {{ faq.answer  }}
               </div>
            </li>
        </ul>
       
        <h3>
            Ready to watch? Enter your email to create or restart your membership
        </h3>
     
    </div>
</template>


<style lang="scss" scoped>
    .wrapper {
        border-top: 0.5rem solid var(--gray-color);
        padding: 1rem 0;
        h1,h3{
            color: white;
            text-align: center;
        }

    }
    .faq{
       
        display: flex;
        flex-direction: column;
        list-style-type: none;
        gap: 0.5rem;
        margin: auto;
        padding: 1rem ;
        max-width: 780px;
        
        .title{
            display: flex;
            justify-content: space-between;
            padding:1rem;
            background-color:var(--gray-color);
            color: var(--light-color);

            button{
                appearance: none;
                background-color: transparent;
                border: none;
                color: white;
                outline: transparent;
                padding: 0.5rem;
                font-size: 1.2rem;
            }
        }

        .detail{
            border-top: 0.2rem solid black;
            background-color:var(--gray-color);
            color: var(--light-color);
            padding: 1rem;
        }

    }


</style>