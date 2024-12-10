const form = document.getElementById("film-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}

function addFilm(e) {
  const t = title.value;
  const d = director.value;
  const u = url.value;
  if (t === "" || director === "" || url === "") {
    // throw error here
    ui.displayMessages("Error occured", "danger");
  } else {
    const newFilm = new Film(t, d, u);

    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Success", "success");
  }
  ui.clearInputs(title, director, url);
  e.preventDefault();
}
