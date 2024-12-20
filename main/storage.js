class Storage {
  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  }

  static deleteFilmFromStorage(target) {
    const title = target.parentElement.previousElementSibling.previousElementSibling
    .textContent;
    let films = this.getFilmsFromStorage();
    for (let i = 0; i < films.length; i++) {
      if (films[i].title === title) {
        films.splice(i, 1);
      }
    }
    localStorage.setItem("films", JSON.stringify(films));
  }

  static clearAllFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
