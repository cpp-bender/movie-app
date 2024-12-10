function Storage() {}

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = getFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.getFilmsFromStorage = function () {
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};
