// function Title update
let button_Now_playing = document.querySelector('.Now_playing-button');
let button_of_favourites = document.querySelector('.favourites-button');
let button_select_Genres = document.querySelector('.dropdown-menu');
console.log(button_select_Genres.value);

button_Now_playing.addEventListener('click',(_) =>{
    document.querySelector('.Sort-title').value = 'Now Playing';
})

button_of_favourites.addEventListener('click',(_) =>{
    document.querySelector('.Sort-title').value = 'favourites';
})

button_select_Genres.addEventListener('change', (_) => {
    console.log(button_select_Genres);
    sortTitle.textContent = button_select_Genres.options[button_select_Genres.selectedIndex].text;
});



//<-- Modal -->
const myModal = new bootstrap.Modal('#myModal', {
    keyboard: false
  })


/*
------ local Storage ------
const data = {
    name: 'david',
    age: 20,
}

localStorage.setItem('favourites', JSON.stringify(data));

const storageData = JSON.parse(localStorage.getItem('favourites'));
---------------------------
*/