// let pokemonJson = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
let currentPokemon;
let first100 = 100;

// ================================================================== search 
function openInput() {
    document.getElementById('input').classList.remove('d-none');
    document.getElementById('search-icon').classList.add('d-none');
}

function closeInput() {
    document.getElementById('input').classList.add('d-none');
    document.getElementById('search-icon').classList.remove('d-none');
}

function getInputFromMenu() {
    const searchInput = document.getElementById('search-icon');
    const searchValue = searchInput.value;
    return searchValue;
}

function enter(event) {
    if (event.keyCode === 13) {
        let searchInput = getInputFromMenu();
        search = searchInput.toLowerCase();

        document.getElementById('cards').innerHTML = '';

        generateSearchedCard();
    }
}

function generateSearchedCard() {
    for (let i = 0; i < first100; i++) {
        let pokeName = allPokeJSON['results'][i]['name'];
        let typeOne = pokeJSON['types'][0]['type']['name'];
        let pokeImg = pokeJSON['sprites']['front_default'];

        if (pokeName.toLowerCase().icludes(search)) {
            showCards(pokeName, typeOne, pokeImg, i);
        }
    }
}

// ================================================================== load Pokemon 
async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    let response = await fetch(url);
    allPokeJSON = await response.json();
    renderPokemon(allPokeJSON);
}

async function renderPokemon(allPokeJSON) {
    for (let i = 0; i < first100; i++) {
        let pokeName = allPokeJSON['results'][i]['name'];
        let pokeURL = allPokeJSON['results'][i]['url'];

        let pokeResponse = await fetch(pokeURL);
        pokeJSON = await pokeResponse.json();

        let pokeImg = pokeJSON['sprites']['front_default'];
        let typeOne = pokeJSON['types'][0]['type']['name'];

        showCards(pokeName, typeOne, pokeImg, i);
        addBgColor(typeOne, i);

        if (pokeJSON['types'][1]) {
            let typeTwo = pokeJSON['types'][1]['type']['name'];
            document.getElementById(`type-two${i}`).innerHTML = typeTwo;
            document.getElementById(`type-two${i}`).classList.add('type-style');
        }
    }
}

function showCards(pokeName, typeOne, pokeImg, i) {
    document.getElementById('cards').innerHTML += `<div onmouseover="scaleUp(this)" onmouseout="scaleDown(this)" class="card" id="card${i}" onclick="openCard('${pokeName}', '${pokeImg}', '${typeOne}', ${i})">
            <div class="poke-name-number">
                <h3>${pokeName}</h3>
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

function addTypeTwo() {

}
// ================================================================== Hover
function scaleUp(x) {
    x.style.transform = "scale(1.05)";
}

function scaleDown(x) {
    x.style.transform = "scale(1)";
}

// ================================================================== Card Color 
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

// ================================================================== Show Card
function openCard(pokeName, pokeImg, typeOne, typeTwo, i) {
    let cardContainer = document.getElementById('card-container');
    let card = document.getElementById('single-card');

    cardContainer.innerHTML = `
   <div id="single-card">
        <div id="open-cards${i}">
            <div class="card-top">
                <img src="img/close-card.png" class="card-icon" onclick="closeCard()">
                <h4>#001</h4>
                <img src="img/grey-heart.png" class="card-icon">
            </div>
            <div id="poke-details">
                <img src="${pokeImg}" class="poke-img-card">
                <div class="poke-name">
                    <h5>${pokeName}</h5>
                    <div class="card-type">
                        <p class="type-style-card">${typeOne}</p>
                        <p id="type-two-card${i}"></p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>`;


    if (typeTwo) {
        // let typeTwo = pokeJSON['types'][1]['type']['name'];
        document.getElementById(`type-two-card${i}`).innerHTML = typeTwo;
        document.getElementById(`type-two-card${i}`).classList.add('type-style');
    }

    addCardBgColor(typeOne, i);
}

function addCardBgColor(type, i) {
    let singlecard = document.getElementById(`open-cards${i}`);

    if (type == 'grass') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(63, 121, 82)";
    }
    if (type == 'fire') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(252, 108, 110, 0.8)";
    }
    if (type == 'water') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(132, 199, 254, 0.8)";
    }
    if (type == 'electric') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(254, 218, 120, 0.8)";
    }
    if (type == 'normal') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(183, 183, 170, 0.8)";
    }
    if (type == 'fighting') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(177, 82, 71, 0.8)";
    }
    if (type == 'flying') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(121, 168, 241, 0.8)";
    }
    if (type == 'poison') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(156, 88, 148, 0.8)";
    }
    if (type == 'ground') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(236, 206, 89, 0.8)";
    }
    if (type == 'rock') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(205, 189, 114, 0.8)";
    }
    if (type == 'bug') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(196, 207, 34, 0.8)";
    }
    if (type == 'ghost') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(116, 114, 213, 0.8)";
    }
    if (type == 'psychic') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(249, 95, 173, 0.8)";
    }
    if (type == 'ice') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(150, 242, 255, 0.8)";
    }
    if (type == 'dragon') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(117, 103, 201, 0.8)";
    }
    if (type == 'dark') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(143, 106, 88, 0.8)";
    }
    if (type == 'steel') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(196, 195, 217, 0.8)";
    }
    if (type == 'fairy') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgba(249, 177, 254, 0.8)";
    }

    singlecard.classList.add('open-cards');
}

function closeCard() {
    document.getElementById('card-container').innerHTML = '';
}

// ================================================================== add heart
