// prototype
/*
function UI() {}

UI.prototype.addFilmToUI = function (newFilm) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
};

UI.prototype.clearInputs = function (a, b, c) {
  a.value = "";
  b.value = "";
  c.value = "";
};

UI.prototype.displayMessages = function (message, type) {
  const cardBody = document.querySelector(".card-body");
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  cardBody.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 1000);
};

UI.prototype.deleteFilmFromUI = function (target) {
  target.parentElement.parentElement.remove();
};

UI.prototype.clearAllFilmsFromUI = function () {
  const filmList = document.getElementById("films");
  while (filmList.firstElementChild != null) {
    filmList.firstElementChild.remove();
  }
};
*/

// es6
class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
      <tr>
      <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>`;
  }

  static clearInputs(a, b, c) {
    a.value = "";
    b.value = "";
    c.value = "";
  }

  static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    cardBody.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 1000);
  }

  static deleteFilmFromUI(target) {
    target.parentElement.parentElement.remove();
  }

  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    while (filmList.firstElementChild != null) {
      filmList.firstElementChild.remove();
    }
  }
}
