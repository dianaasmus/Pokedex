let pokedexJSON = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
let pokemon = [];
let pokeID = [];
let currentPokemon;
let amountsShowing = 61;
let pokemonName = [];
let pokeImgs = [];
let typeOneS = [];


// ================================================================== load Pokemon Cards
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
    await showCards(i, pokeImg, typeOne);
    await addBgColor(typeOne, i);
    if (typeTwoExists(i)) {
        renderTypeTwo(i);
    }
    if (i == 59) {
        removeLoader();
    }
}

function loadVariables(i) {
    let pokeId = pokemon[i]['id'];
    pokeID.push(pokeId);
    let pokeImg = pokemon[i]['sprites']['other']['official-artwork']['front_default'];
    pokeImgs.push(pokeImg);
    let typeOne = pokemon[i]['types'][0]['type']['name'];
    typeOneS.push(typeOne);
    setStats(i);
    return { pokeImg, typeOne };
}

function setStats(i) {
    let statHP = pokemon[i]['stats'][0]['base_stat'];
    let statAttack = pokemon[i]['stats'][1]['base_stat'];
    let statDefense = pokemon[i]['stats'][2]['base_stat'];
    let statSpeed = pokemon[i]['stats'][5]['base_stat'];
    pushStats(statHP, statAttack, statDefense, statSpeed);
}

function pushStats(statHP, statAttack, statDefense, statSpeed) {
    statHPs.push(statHP);
    statAttacks.push(statAttack);
    statDefenses.push(statDefense);
    statSpeeds.push(statSpeed);
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
                <div class="resposive-none">
                    <p class="type-style">${typeOne}</p>
                    <p id="type-two${i}"></p>
                </div>
                <img src="${pokeImg}" class="poke-img">
            </div>
        </div>`;
}


// ================================================================== Card Color 
function addBgColor(type, i) {
    let card = document.getElementById(`card${i}`);

    switch (type) {
        case 'grass':
            card.style.backgroundColor = "rgba(73, 207, 174, 1)";
            break;
        case 'fire':
            card.style.backgroundColor = "rgba(252, 108, 110,1)";
            break;
        case 'water':
            card.style.backgroundColor = "rgba(132, 199, 254, 1)";
            break;
        case 'electric':
            card.style.backgroundColor = "rgba(254, 218, 120, 1)";
            break;
        case 'normal':
            card.style.backgroundColor = "rgba(183, 183, 170, 1)";
            break;
        case 'fighting':
            card.style.backgroundColor = "rgba(177, 82, 71, 1)";
            break;
        case 'flying':
            card.style.backgroundColor = "rgba(121, 168, 241, 1)";
            break;
        case 'poison':
            card.style.backgroundColor = "rgba(156, 88, 148, 1)";
            break;
        case 'ground':
            card.style.backgroundColor = "rgba(236, 206, 89, 1)";
            break;
        case 'rock':
            card.style.backgroundColor = "rgba(205, 189, 114, 1)";
            break;
        case 'bug':
            card.style.backgroundColor = "rgba(196, 207, 34, 1)";
            break;
        case 'ghost':
            card.style.backgroundColor = "rgba(116, 114, 213, 1)";
            break;
        case 'psychic':
            card.style.backgroundColor = "rgba(249, 95, 173, 1)";
            break;
        case 'ice':
            card.style.backgroundColor = "rgba(150, 242, 255, 1)";
            break;
        case 'dragon':
            card.style.backgroundColor = "rgba(117, 103, 201, 1)";
            break;
        case 'dark':
            card.style.backgroundColor = "rgba(143, 106, 88, 1)";
            break;
        case 'steel':
            card.style.backgroundColor = "rgba(196, 195, 217, 1)";
            break;
        case 'fairy':
            card.style.backgroundColor = "rgba(249, 177, 254, 1)";
            break;
    }
}







