function Storage() {}

Storage.prototype.getFilmsFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
};

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmsFromStorage();
  films.push(newFilm);
  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.deleteFilmFromStorage = function (title) {
  let films = this.getFilmsFromStorage();
  for (let i = 0; i < films.length; i++) {
    if (films[i].title === title) {
      films.splice(i, 1);
    }
  }
  localStorage.setItem("films", JSON.stringify(films));
};
