let pokedexJSON = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
let pokemon = []; 
let pokeID = [];
let currentPokemon;
let amountsShowing = 61;
let load;
let pokemonName = [];
let pokeImgs = [];
let typeOneS = [];


// load Pokemon Cards
function init() {
    renderPokemonInfo();
}

async function loadPokeJSON() {
    let response = await fetch(pokedexJSON);
    pokedexJson = await response.json();
    return pokedexJson;
}

async function renderPokemonInfo() {
    for (let i = 0; i < amountsShowing; i++) {
        await RenderPokemonInfo(i);
    }
}

async function RenderPokemonInfo(i) {
    pokedexJson = await loadPokeJSON();
    let pokeName = pokedexJson['results'][i]['name'];
    pokemonName.push(pokeName);
    singlePokemonJSON = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let urlResponse = await fetch(singlePokemonJSON);
    currentPokemon = await urlResponse.json();
    pokemon.push(currentPokemon);
    renderPokemon(i);
}

async function renderPokemon(i) {
    let { pokeImg, typeOne } = loadVariables(i);
    showCards(i, pokeImg, typeOne);
    addBgColor(typeOne, i);
    if (typeTwoExists(i)) {
        renderTypeTwo(i);
    }
}

function loadVariables(i) {
    let pokeId = pokemon[i]['id'];
    pokeID.push(pokeId);
    let pokeImg = pokemon[i]['sprites']['other']['official-artwork']['front_default'];
    pokeImgs.push(pokeImg);
    let typeOne = pokemon[i]['types'][0]['type']['name'];
    typeOneS.push(typeOne);
    return { pokeImg, typeOne };
}

function typeTwoExists(i) {
    return pokemon[i]['types'][1];
}

function renderTypeTwo(i) {
    let typeTwo = pokemon[i]['types'][1]['type']['name'];
    document.getElementById(`type-two${i}`).innerHTML = typeTwo;
    document.getElementById(`type-two${i}`).classList.add('type-style');
}

function showCards(i, pokeImg, typeOne) {
    document.getElementById('cards').innerHTML += `
        <div onmouseover="scaleUp(this)" onmouseout="scaleDown(this)" class="card" id="card${i}" onclick="openCard(${i}, '${pokeImg}', '${typeOne}')">
            <div class="poke-name-number">
                <h3>${pokemonName[i]}</h3>
            </div>
            <div class="type-img">
                <div>
                    <p class="type-style">${typeOne}</p>
                    <p id="type-two${i}"></p>
                </div>
                <img src="${pokeImg}" class="poke-img">
            </div>
        </div>`;
}


// Card Color 
function addBgColor(type, i) {
    let card = document.getElementById(`card${i}`);

    if (type == 'grass') {
        card.style.backgroundColor = "rgba(73, 207, 174, 0.8)";
        card.style.border = "4px solid rgb(73, 207, 174)";
    }
    if (type == 'fire') {
        card.style.backgroundColor = "rgba(252, 108, 110, 0.8)";
        card.style.border = "4px solid rgb(252, 108, 110)";
    }
    if (type == 'water') {
        card.style.backgroundColor = "rgba(132, 199, 254, 0.8)";
        card.style.border = "4px solid rgb(132, 199, 254)";
    }
    if (type == 'electric') {
        card.style.backgroundColor = "rgba(254, 218, 120, 0.8)";
        card.style.border = "4px solid rgb(254, 218, 120)";
    }
    if (type == 'normal') {
        card.style.backgroundColor = "rgba(183, 183, 170, 0.8)";
        card.style.border = "4px solid rgb(183, 183, 170)";
    }
    if (type == 'fighting') {
        card.style.backgroundColor = "rgba(177, 82, 71, 0.8)";
        card.style.border = "4px solid rgb(177, 82, 71)";
    }
    if (type == 'flying') {
        card.style.backgroundColor = "rgba(121, 168, 241, 0.8)";
        card.style.border = "4px solid rgb(121, 168, 241)";
    }
    if (type == 'poison') {
        card.style.backgroundColor = "rgba(156, 88, 148, 0.8)";
        card.style.border = "4px solid rgb(156, 88, 148)";
    }
    if (type == 'ground') {
        card.style.backgroundColor = "rgba(236, 206, 89, 0.8)";
        card.style.border = "4px solid rgb(236, 206, 89)";
    }
    if (type == 'rock') {
        card.style.backgroundColor = "rgba(205, 189, 114, 0.8)";
        card.style.border = "4px solid rgb(205, 189, 114)";
    }
    if (type == 'bug') {
        card.style.backgroundColor = "rgba(196, 207, 34, 0.8)";
        card.style.border = "4px solid rgb(196, 207, 34)";
    }
    if (type == 'ghost') {
        card.style.backgroundColor = "rgba(116, 114, 213, 0.8)";
        card.style.border = "4px solid rgb(116, 114, 213)";
    }
    if (type == 'psychic') {
        card.style.backgroundColor = "rgba(249, 95, 173, 0.8)";
        card.style.border = "4px solid rgb(249, 95, 173)";
    }
    if (type == 'ice') {
        card.style.backgroundColor = "rgba(150, 242, 255, 0.8)";
        card.style.border = "4px solid rgba(150, 242, 255, 0.8)";
    }
    if (type == 'dragon') {
        card.style.backgroundColor = "rgba(117, 103, 201, 0.8)";
        card.style.border = "4px solid rgba(117, 103, 201, 0.8)";
    }
    if (type == 'dark') {
        card.style.backgroundColor = "rgba(143, 106, 88, 0.8)";
        card.style.border = "4px solid rgb(143, 106, 88)";
    }
    if (type == 'steel') {
        card.style.backgroundColor = "rgba(196, 195, 217, 0.8)";
        card.style.border = "4px solid rgb(196, 195, 217)";
    }
    if (type == 'fairy') {
        card.style.backgroundColor = "rgba(249, 177, 254, 0.8)";
        card.style.border = "4px solid rgb(249, 177, 254)";
    }
}







