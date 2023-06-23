let API = "https://www.omdbapi.com/?apikey=61e576a4&t=";
let loadingStatus = false;
let movieContainer = document.getElementById('movieContainer');
let errorContainer = document.getElementById('errorContainer');
movieContainer.classList.add('d-none');
errorContainer.classList.add('d-none');
function checkLoadingStatus() {
  let intro = document.getElementById("intro");
  intro.style.display = "none";
  let loader = document.getElementById("loader");
  if(loadingStatus == true){
    loader.classList.add("loader");
  }
  else{
    loader.classList.remove("loader");
  }
}
function renderMovie(data){
    let img = document.getElementById('img');
    img.src = data.Poster;
    let Title = document.getElementById('Title');
    Title.innerText = data.Title;
    let Year = document.getElementById('Year')
    Year.innerText = data.Year;
    let Plot = document.getElementById('Plot');
    Plot.innerText = data.Plot;
    let Actors = document.getElementById('Actors');
    Actors.innerText = data.Actors;
    let Awards = document.getElementById('Awards');
    Awards.innerText = data.Awards;
    let Director = document.getElementById('Director');
    Director.innerText = data.Director;
    let BoxOffice= document.getElementById('BoxOffice');
    BoxOffice.innerText = data.BoxOffice;
    let Released = document.getElementById('Released');
    Released.innerText = data.Released;
    let imdbRating = document.getElementById('imdbRating');
    imdbRating.innerText = data.imdbRating;
    let Genre = document.getElementById('Genre');
    Genre.innerText = data.Genre;
}
function fetchMovieDetails() {
  loadingStatus = true;
  checkLoadingStatus();
  let movieName = document.getElementById("movieName");
  let apiQuery = API + movieName.value;
  //console.log(apiQuery);
  fetch(apiQuery)
    .then((response) => {
      //console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if(data.Error != "Movie not found!"){
        loadingStatus = false;
        checkLoadingStatus();
        renderMovie(data);
        movieContainer.classList.remove('d-none');
        errorContainer.classList.add('d-none');
      }
      else{
        loadingStatus = false;
        checkLoadingStatus();
        movieContainer.classList.add('d-none');
        errorContainer.classList.remove('d-none');
      }
    });
}
