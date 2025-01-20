// Selección del contenedor principal
let container = document.getElementById('container');

// Iteración de los elementos
tempData.forEach(item => {

    // Creación del contenedor de las tarjetas
    const card = document.createElement('div');

    // Creación de elementos para agregar a la card
    const e_title = document.createElement('h2');
    const e_year = document.createElement('p');
    const e_director = document.createElement('p');
    const e_duration = document.createElement('p');
    const e_genre = document.createElement('p');
    const e_rate = document.createElement('p');
    const e_poster = document.createElement('img');

    // Asignación de los valores a cada elemento de la card
    e_title.textContent = item.title;
    e_year.textContent = item.year;
    e_director.textContent = item.director;
    e_duration.textContent = item.duration;
    e_genre.textContent = item.genre;
    e_rate.textContent = item.rate;
    e_poster.src = item.poster;

    //Asignación de cada item a los elementos de la card
    card.append(
        e_title,
        e_year,
        e_director,
        e_duration,
        e_genre,
        e_rate,
        e_poster
    );

    //Asignacion de la card al contenedor creado
    container.appendChild(card);
});


