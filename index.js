function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
            renderCharacters(data.results); // 👈 ahora sí
        })
        .catch(error => console.log(error));
}
function renderCharacters(arr) {
    // Función que renderiza los personajes en el DOM
    for (let index = 0; index < arr.length; index++) {
        // Bucle que itera sobre cada personaje en el array
        document.querySelector('.character-detail').innerHTML += `
        // Agrega el HTML de la tarjeta del personaje al elemento con clase 'item'
        <div class="card" style="width: 18rem;">
            <img src="${arr[index].image}" class="card-img-top" alt="${arr[index].name}">
            // Imagen del personaje
            <div class="card-body">
                <h5 class="card-title">${arr[index].name}</h5>
                // Nombre del personaje como título
                <p class="card-text">${arr[index].species}</p>
                // Especie del personaje como texto
                <a href="#" class="btn btn-primary">Ver más</a>
                // Botón para ver más información (aún no funcional)
            </div>
        </div>`;
    }
}