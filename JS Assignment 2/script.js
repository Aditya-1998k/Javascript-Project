function add(){
   let movie=document.getElementById("inputs");
   var addingmovies=document.createElement("h3");
   addingmovies.innerText="I Love : "+movie.value.toUpperCase();
   
   document.getElementById("main").appendChild(addingmovies)
   movie.value="";
}
function remove(){
   var movies=document.querySelectorAll("h3")
   
   var removeing_movies=movies[movies.length-1];
   document.getElementById("main").removeChild(removeing_movies)
}