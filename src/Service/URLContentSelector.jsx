export  function URLContentSelector(query,page) {

  

  const urlDiscovered = "/discover/movie?api_key=3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate"
  const urlSearch ="/search/movie?api_key=3&language=en-US&page="+page+"&include_adult=false&query="+query;

 if(query===null){
    return(urlDiscovered)
  }else{
    return (urlSearch)
  }
 
}
