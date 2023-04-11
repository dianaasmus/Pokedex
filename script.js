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
        console.log('Loaded Pokemon', pokeJSON);

        let pokeNumber = pokeJSON['id'];
        let pokeImg = pokeJSON['sprites']['front_default'];
        let typeOne = pokeJSON['types'][0]['type']['name'];

        showCards(pokeName, pokeNumber, typeOne, pokeImg, i);
        addBgColor(typeOne, i);

        if (pokeJSON['types'][1]) {
            let typeTwo = pokeJSON['types'][1]['type']['name'];
            document.getElementById(`type-two${i}`).innerHTML = typeTwo;
        }
    }
}

function showCards(pokeName, pokeNumber, typeOne, pokeImg, i) {
    document.getElementById('cards').innerHTML += `<div class="card" id="card${i}">
            <div class="poke-name-number">
                <h3>${pokeName}</h3>
                <h4>#${pokeNumber}</h4>
            </div>
            <div class="type-img">
                <div>
                    <p>${typeOne}</p>
                    <p id="type-two${i}"></p>
                </div>
                <img src="${pokeImg}" class="poke-img">
            </div>
        </div>`;
}

function addBgColor(type, i) {
    if (type == 'grass') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(73, 207, 174, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(73, 207, 174)"; 
    }
    if (type == 'fire') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(252, 108, 110, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(252, 108, 110)";
    }
    if (type == 'water') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(132, 199, 254, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(132, 199, 254)";
    }
    if (type == 'electric') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(254, 218, 120, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(254, 218, 120)";
    }
    if (type == 'normal') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(183, 183, 170, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(183, 183, 170)";
    }
    if (type == 'fighting') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(177, 82, 71, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(177, 82, 71)";
    }
    if (type == 'flying') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(121, 168, 241, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(121, 168, 241)";
    }
    if (type == 'poison') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(156, 88, 148, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(156, 88, 148)";
    }
    if (type == 'ground') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(236, 206, 89, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(236, 206, 89)";
    }
    if (type == 'rock') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(205, 189, 114, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(205, 189, 114)";
    }
    if (type == 'bug') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(196, 207, 34, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(196, 207, 34)";
    }
    if (type == 'ghost') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(116, 114, 213, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(116, 114, 213)";
    }
    if (type == 'psychic') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(249, 95, 173, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(249, 95, 173)";
    }
    if (type == 'ice') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(150, 242, 255, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgba(150, 242, 255, 0.8)";
    }
    if (type == 'dragon') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(117, 103, 201, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgba(117, 103, 201, 0.8)";
    }
    if (type == 'dark') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(143, 106, 88, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(143, 106, 88)";
    }
    if (type == 'steel') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(196, 195, 217, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(196, 195, 217)";
    }
    if (type == 'fairy') {
        document.getElementById(`card${i}`).style.backgroundColor = "rgba(249, 177, 254, 0.8)";
        document.getElementById(`card${i}`).style.border = "4px solid rgb(249, 177, 254)";
    }
}