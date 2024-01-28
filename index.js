const API_Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGQwZmYxOWJlNzEzYjkyMmQzYWRfZjUyMWM3ZDczNCIsInN1YiI6IjY1ODMzNWY5ZTI5NWI0M2NiYjY4NTMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBTase5fJJEEeMpSTLMDBWxp4pY1S7OKVnSIoV5NzHk";
let globalData;

function selectGenre(event) {
  console.log(event.target.value);

  // Clear existing items before fetching and displaying new ones
  clearItems();

  let selectedGenreId = event.target.value;

  // Filter data based on the selected genre
  let filteredData = { ...globalData, results: globalData.results.filter(obj => obj.genre_ids.includes(selectedGenreId)) };

  // Display the filtered data
  printImg(filteredData);
}

function clearItems() {
  // Use querySelectorAll and forEach to remove items
  document.querySelectorAll(".item").forEach(item => {
    item.remove();
  });
}

function printImg(response) {
  // Check if globalData is undefined or null, not just falsy
  if (!globalData) {
    globalData = response;
  }

  console.log(response);

  // Use const or let to declare variables
  const section = document.querySelector('.container');
  const box = document.querySelector(".box");

  response.results.forEach(item => {
    // Declare variables for elements inside the loop
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');

    div.className = 'item';
    img.src = "https://www.themoviedb.org/t/p/w220_and_h330_face" + item.backdrop_path;

    // Add event listener to log image click
    img.onclick = () => {
      console.log(`Image clicked: ${item.backdrop_path}`);
    };

    a.appendChild(img);
    div.appendChild(a);
    box.appendChild(div);
  });

  // Move these outside the loop to avoid redundant DOM manipulation
  section.appendChild(box);
  document.body.appendChild(section);
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_Token}`
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing', options)
  .then(response => response.json())
  .then(response => printImg(response))
  .catch(err => console.error(err));

let genreSelector = document.querySelector("#genre");
genreSelector.addEventListener("change", event => selectGenre(event));
