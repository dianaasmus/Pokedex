// ================================================================== Show Card
function openCard(i, pokeImg, typeOne) {
    // console.log(pokeJSON);
    let cardContainer = document.getElementById('card-container');
    document.getElementById('body').classList.add('overflow');

    cardContainer.innerHTML = `
   <div id="single-card">
    <img src="img/arrow-left.png" class="arrow" id="arrow-left" onclick="previous(${i}, ${pokeID}, '${pokemonName[i]}', '${typeOne}')">
        <div id="open-cards${i}">
            <div class="card-top">
                <img src="img/close-card.png" class="card-icon" onclick="closeCard()">
                <h4 id="poke-number${i}"></h4>
                <img src="img/grey-heart.png" class="card-icon" onclick="addHeart(${i})">
                <img src="img/white-heart.png" class="card-icon heart d-none" id="heart${i}" onclick="removeHeart(${i})">
            </div>
        
            <div id="poke-details${i}">
                <div class="poke-details">
                    <img src="${pokeImg}" onmouseover="scaleUpPokemon(this)" onmouseout="scaleDownPokemon(this)" class="poke-img-card" onclick="showAbout(${i}, '${pokeImg}', '${pokemonName[i]}', '${typeOne}')">
                    <div class="poke-name">
                        <h5>${pokemonName[i]}</h5>
                    </div>
                
                    <div class="card-type">
                        <p class="type-style-card">${typeOne}</p>
                        <p id="type-two-card${i}"></p>
                    </div>
                </div>
            </div>

        </div>
    <img src="img/arrow-right.png" class="arrow" id="arrow-left" onclick="next(${i}, ${pokeID}, '${pokemonName[i]}', '${typeOne}')">
    </div>`;

    addCardBgColor(i, typeOne);
    addpokeNumber(i);

    // if (pokeJSON['types'][1]) {
    //     typeTwo = pokeJSON['types'][1]['type']['name']
    //     document.getElementById(`type-two-card${i}`).innerHTML = typeTwo;
    //     document.getElementById(`type-two-card${i}`).classList.add('type-style');
    // }
}

function scaleUpPokemon(x) {
    x.style.transform = "scale(1.05)";
}

function scaleDownPokemon(x) {
    x.style.transform = "scale(1)";
}

function showAbout(i, pokeImg, pokeName, typeOne) {
    document.getElementById(`poke-details${i}`).innerHTML = `
        <div class="poke-details-2">
                <img src="${pokeImg}" class="poke-img-card" onclick="openCard(${i}, '${pokeImg}', '${typeOne}')">
                <div class="poke-name">
                    <h5>${pokeName}</h5>
                </div>
                <div id="about">
                    <div class="about-strengths">
                        <div>ABOUT</div>
                        <div>STRENGTHS</div>
                    </div>

                </div>
            </div>
    `;
}

// ================================================================== search 
function searchPokemon() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();

    for (let i = 0; i < first100; i++) {
        let pokeName = allPokeJSON['results'][i]['name'];
        let typeOne = pokeJSON['types'][0]['type']['name'];
        let pokeImg = pokeJSON['sprites']['front_default'];

        if (pokeName.toLowerCase().includes(input)) {
            document.getElementById('cards').innerHTML = '';
            showCards(pokeName, typeOne, pokeImg, i);
        }
    }
}

// ================================================================== Hover
function scaleUp(x) {
    x.style.transform = "scale(1.05)";
}

function scaleDown(x) {
    x.style.transform = "scale(1)";
}

// ================================================================== Color 
function addCardBgColor(i, type) {
    let singlecard = document.getElementById(`open-cards${i}`);

    if (type == 'grass') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(63, 121, 82)";
    }
    if (type == 'fire') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(252, 108, 110)";
    }
    if (type == 'water') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(132, 199, 254)";
    }
    if (type == 'electric') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(254, 218, 120)";
    }
    if (type == 'normal') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(183, 183, 170)";
    }
    if (type == 'fighting') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(177, 82, 71)";
    }
    if (type == 'flying') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(121, 168, 241)";
    }
    if (type == 'poison') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(156, 88, 148)";
    }
    if (type == 'ground') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(236, 206, 89)";
    }
    if (type == 'rock') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(205, 189, 114)";
    }
    if (type == 'bug') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(196, 207, 34)";
    }
    if (type == 'ghost') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(116, 114, 213)";
    }
    if (type == 'psychic') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(249, 95, 173)";
    }
    if (type == 'ice') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(150, 242, 255)";
    }
    if (type == 'dragon') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(117, 103, 201)";
    }
    if (type == 'dark') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(143, 106, 88)";
    }
    if (type == 'steel') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(196, 195, 217)";
    }
    if (type == 'fairy') {
        singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(249, 177, 254)";
    }

    singlecard.classList.add('open-cards');
}

function addpokeNumber(i) {
    let pokeNumberField = document.getElementById(`poke-number${i}`);

    if (pokeID <= 9) {
        pokeNumberField.innerHTML = `#00${pokeID}`;
    }
    if (pokeID > 9 && pokeID <= 99) {
        pokeNumberField.innerHTML = `#0${pokeID}`;
    }
    if (pokeID > 99) {
        pokeNumberField.innerHTML = `#${pokeID}`;
    }

}

function closeCard() {
    document.getElementById('card-container').innerHTML = '';
    document.getElementById('body').classList.remove('overflow');
}

// ================================================================== add heart
function addHeart(i) {
    document.getElementById(`heart${i}`).classList.remove('d-none');
}

function removeHeart(i) {
    document.getElementById(`heart${i}`).classList.add('d-none');
}

// ================================================================== next / previous Pokemon 
async function next(i, pokeId, pokeName, typeOne) {
    i++;
    pokeName = allPokeJSON['results'][pokeId]['name'];
    pokeId++;
    pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

    pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let URLresponse = await fetch(pokeUrl);
    type = await URLresponse.json();

    typeOne = type['types'][0]['type']['name'];

    if (i > first100) {
        i = 0;
    }

    openCard(i, pokeId, pokeName, pokeImg, typeOne);
    addCardBgColor(i, typeOne);

    if (type['types'][1]) {
        typeTwo = type['types'][1]['type']['name']
        document.getElementById(`type-two-card${i}`).innerHTML = typeTwo;
        document.getElementById(`type-two-card${i}`).classList.add('type-style');
    }
}


function previous(i, pokeId, pokeName) {
    i--;
    pokeId--;

    // typeOne = pokeJSON['types'][0]['type']['name'];

    if (pokeId === 101) {
        pokeId = 1;
        i = 1;
    }
    if (pokeId === 0) {
        pokeId = 100;
    }

    pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
    pokeName = allPokeJSON['results'][pokeId]['name'];


    openCard(i, pokeId, pokeName, pokeImg);
}



