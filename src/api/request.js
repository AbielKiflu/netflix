const apiKey=process.env.VUE_APP_NETFLIX_API;
const url=process.env.VUE_APP_BASE_URL;

 
const requests={
    movie:url+"/movie/550?api_key="+apiKey+"&language=en-US",
    moviesPopular:url+"/movie/popular?api_key="+apiKey+"&language=en-US",
    
    moviesUpcoming:url+"/movie/upcoming?api_key="+apiKey+"&language=en-US",
    moviesLatest:url+"/movie/latest?api_key="+apiKey+"&language=en-US",
    moviesTopRated:url+"/movie/top_rated?api_key="+apiKey+"&language=en-US",

    genreMovie:url+"/genre/movie/list?api_key="+apiKey+"&language=en-US",
    genreTv:url+"/genre/tv/list?api_key="+apiKey+"&language=en-US",

    }


    //http://api.themoviedb.org/3/genre/movie/list?api_key=585a6beaf8e04a94871f1e88f810bd83


export default requests;