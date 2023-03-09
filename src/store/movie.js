import { defineStore } from "pinia";


const  useMovieStore = defineStore("movie",
{
    state:()=>{
        return {
            movie:null,
        };
    },

    actions:{
        selectMovie(selected={}){
            this.movie=selected;
        },
 
},

getters:{
    getMovie(state){
        return state.movie;
    }

}

}
);


export default useMovieStore;