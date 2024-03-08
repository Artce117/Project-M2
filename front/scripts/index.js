// let url = "https://students-api.2.us-1.fl0.io/movies";
let url = "https://api.1rodemayo.com/movies";

$.get(url, (data, status) => {
  setCardHandler(data);
});

//handler
const setCardHandler = (data) => {
  //Seleccionar contenedor donde se van a mostrar las cards
  const cardsContainer = document.getElementById("card-deck");
  //Convertir objetos de tempData a tarjetas HTML
  data.map((card) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="card border-light shadow mb-5">
    <img class="card-img-center" src="${card.poster}">
    <div class="card-body text-center">
    <h5><a class="card-title text-secondary font-weight-bold" href="#">${card.title}</a></h5>
    <p class="card-text"><span class="font-weight-bold">Year: </span>${card.year}<br>
    <span class="font-weight-bold">Director: </span>${card.director}<br>
    <span class="font-weight-bold">Duration: </span>${card.duration}<br>
    <span class="font-weight-bold">Genre: </span>${card.genre.join(", ")}<br>
    <span class="font-weight-bold">Rate: </span>${card.rate}</p>
    </div>
    </div>`;
    //Appendear cards a contenedor
    cardsContainer.appendChild(newCard);
  });
};

window.addEventListener('load', setCardHandler);