const form = document.getElementById("film-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]; 

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  cardBody.addEventListener("click", deleteFilm);
}

function deleteFilm(e){
  if(e.target.id === "delete-film"){
    ui.deleteFilmFromUI(e.target);
    const t = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    storage.deleteFilmFromStorage(t);
    ui.displayMessages("Deleted", "success");
  }
}

function loadAllFilms() {
    let films = storage.getFilmsFromStorage();
    for(let i = 0; i<films.length; i++){
        ui.addFilmToUI(films[i]);
    }
}

function addFilm(e) {
  e.preventDefault();
  const t = title.value;
  const d = director.value;
  const u = url.value;
  if (t === "" || director === "" || url === "") {
    ui.displayMessages("Error occured", "danger");
  } else {
    const newFilm = new Film(t, d, u);
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Success", "success");
    ui.clearInputs(title, director, url);
  }
}
