const form = document.getElementById("film-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  cardBody.addEventListener("click", deleteFilm);
  clearFilms.addEventListener("click", clearAllFilms);
}

function clearAllFilms() {
  if (confirm("Are you sure, you want to delete all films?")) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    const t =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
        Storage.deleteFilmFromStorage(t);
    UI.displayMessages("Deleted", "success");
  }
}

function loadAllFilms() {
  let films = Storage.getFilmsFromStorage();
  for (let i = 0; i < films.length; i++) {
    UI.addFilmToUI(films[i]);
  }
}

function addFilm(e) {
  e.preventDefault();
  const t = title.value;
  const d = director.value;
  const u = url.value;
  if (t === "" || director === "" || url === "") {
    UI.displayMessages("Error occured", "danger");
  } else {
    const newFilm = new Film(t, d, u);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.displayMessages("Success", "success");
    UI.clearInputs(title, director, url);
  }
}
