// let pokemonJson = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
let currentPokemon;
let first100 = 100;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    let response = await fetch(url);
    allPokeJSON = await response.json();
    // console.log('Loaded JSON', allPokeJSON);
    renderPokemon(allPokeJSON);
}

async function renderPokemon(allPokeJSON) {
    for (let i = 0; i < first100; i++) {
    let pokeName = allPokeJSON['results'][i]['name'];
    let pokeURL = allPokeJSON['results'][i]['url'];

    let pokeResponse = await fetch(pokeURL);
    pokeJSON = await pokeResponse.json();
    // console.log('Loaded Pokemon', pokeJSON);

    let pokeNumber = pokeJSON['id'];
    let pokeImg = pokeJSON['sprites']['front_default'];
    // console.log(pokeNumber);
    // console.log('img is', pokeImg);
    document.getElementById('cards').innerHTML += showCards(pokeName, pokeNumber, pokeImg);
    }
}

function showCards(pokeName, pokeNumber, pokeImg) {
    // let pokeImg = currentPokemon['sprites']['front_default'];
     return `<div class="card">
            <div class="poke-name-number">
                <h3>${pokeName}</h3>
                <h4>#${pokeNumber}</h4>
            </div>
                <img src="${pokeImg}" class="poke-img">
        </div>`;
    // document.getElementById('poke-img').src += pokeImg;
}