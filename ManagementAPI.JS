const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDExNjg3YTAyZGNmM2Q3MzVlZDQyNGIwZjEzNzEyZSIsInN1YiI6IjY1NmY1NDllNjUxN2Q2MDE1MTY3MTUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VGUc98txJxaElogmtaqJWn1CQYwksUP-5eisv_t_vDI';
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const POPULARITY = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const CUSTOM_MOVIE = `https://api.themoviedb.org/3/search/movie?query=${POPULARITY}include_adult=false&language=en-US&page=1`;

const MOVIE_BY_ID = `https://api.themoviedb.org/3/movie/${POPULARITY}` // movie_id

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    }
  };
  
  fetch(TOP_RATED_URL, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

