//* URL de la api
const URL = 'https://students-api.up.railway.app/movies'

//* Selección del contenedor principal
let container = document.getElementById('container');

//* JQUERY

$.get(URL, (response) => {
    //* Iteración de los elementos
    response.forEach(item => {

    //* Creación del contenedor de las tarjetas
    const card = document.createElement('div');

    //* Creación de elementos para agregar a la card

    // const e_title = document.createElement('h2');
    // const e_year = document.createElement('p');
    // const e_director = document.createElement('p');
    // const e_duration = document.createElement('p');
    // const e_genre = document.createElement('p');
    // const e_rate = document.createElement('p');
    // const e_poster = document.createElement('img');

    //* Asignación de los valores a cada elemento de la card
    // e_title.textContent = item.title;
    // e_year.textContent = item.year;
    // e_director.textContent = item.director;
    // e_duration.textContent = item.duration;
    // e_genre.textContent = item.genre;
    // e_rate.textContent = item.rate;
    // e_poster.src = item.poster;

    //* Asignación de cada item a los elementos de la card
    // card.append(
    //     e_title,
    //     e_year,
    //     e_director,
    //     e_duration,
    //     e_genre,
    //     e_rate,
    //     e_poster
    // );

    //* Creación de la card con innerHtml

    card.innerHTML = `<div class="card border-light shadow mb-5">
      <img class="card-img-center" src="${item.poster}">
      <div class="card-body text-center">
      <h5><a class="card-title text-secondary font-weight-bold" href="#">${
        item.title
      }</a></h5>
      <p class="card-text"><span class="font-weight-bold">Year: </span>${
        item.year
      }<br>
      <span class="font-weight-bold">Director: </span>${item.director}<br>
      <span class="font-weight-bold">Duration: </span>${item.duration}<br>
      <span class="font-weight-bold">Genre: </span>${item.genre.join(", ")}<br>
      <span class="font-weight-bold">Rate: </span>${item.rate}</p>
      </div>
      </div>`
      
      //* Asignación de la card al contenedor creado
      container.appendChild(card);
    });
    
});





