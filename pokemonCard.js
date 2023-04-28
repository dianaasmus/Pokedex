let statHPs = [];
let statAttacks = [];
let statDefenses = [];
let statSpeeds = [];

// ================================================================== Show Card
function openCard(i, pokeImg, typeOne) {
    let cardContainer = document.getElementById('card-container');
    document.body.classList.add('overflow');
    cardContainer.innerHTML = addCardContainer(i, pokeID, pokemonName, typeOne, pokeImg);
    if (i == 0) {
        document.getElementById('arrow-left').classList.add('d-none');
        document.getElementById('single-card').style.left = "31px";
    }
    addCardBgColor(i, typeOne);
    addpokeNumber(i);
    if (typeTwoExists(i)) {
        renderTypeTwoInCard(i);
    }
}

function addCardContainer(i, pokeID, pokemonName, typeOne, pokeImg) {
    return `
    <div onclick="closeCard()" class="close-container"></div>
   <div id="single-card">
    <button class="arrow" id="arrow-left" onclick="previous(${i}, ${pokeID[i]}, '${pokemonName[i]}', '${typeOne}')"></button>
        <div id="open-cards${i}" class="z-index">
            <div class="card-top">
                <img src="img/grey-heart.png" class="card-icon" onclick="addHeart(${i})">
                <img src="img/white-heart.png" class="card-icon heart d-none" id="heart${i}" onclick="removeHeart(${i})">
                <h4 id="poke-number${i}"></h4>
            </div>
        
            <div id="poke-details${i}">
                <div class="poke-details">
                    <img src="${pokeImgs[i]}" onmouseover="scaleUpPokemon(this)" onmouseout="scaleDownPokemon(this)" class="poke-img-card" onclick="showAbout(${i}, '${pokeImg}', '${pokemonName[i]}', '${typeOne}')">
                    <div class="poke-name">
                        <h5>${pokemonName[i]}</h5>
                    </div>
                    <div class="card-type">
                        <p class="type-style-card">${typeOneS[i]}</p>
                        <p id="type-two-card${i}"></p>
                    </div>
                </div>
            </div>
        </div>
    <button class="arrow" id="arrow-right" onclick="next(${i}, ${i}, ${pokeID}, '${pokemonName[i]}', '${typeOne}')"></button>

    </div>`;
}

function scaleUpPokemon(x) {
    x.style.transform = "scale(1.10)";
}

function scaleDownPokemon(x) {
    x.style.transform = "scale(1)";
    x.style.transition = "transform 225ms ease-in-out";
}

function showAbout(i, pokeImg, pokeName, typeOne) {
    let card = document.getElementById(`poke-details${i}`);
    card.innerHTML = `
        <div class="poke-details-2">
                <img src="${pokeImgs[i]}" class="poke-img-card" onclick="openCard(${i}, '${pokeImg}', '${typeOne}')" onmouseover="scaleUpPokemon(this)" onmouseout="scaleDownPokemon(this)">
                <div class="poke-name">
                    <h5>${pokeName}</h5>
                </div>
                <div id="about">
                    <div class="about-strengths">
                        <div class="about-text about" id="about-text${i}" onclick="generateAboutInfos(${i})">ABOUT</div>
                        <div class="about-text" id="strengths-text${i}" onclick="showStrengthsPokemon(${i})">STATS</div>
                    </div>
                    <div class="about-field" id="about-strengths-field${i}"></div>
                </div>
            </div>
    `;
    generateAboutInfos(i);
}

function renderTypeTwoInCard(i) {
    let typeTwo = pokemon[i]['types'][1]['type']['name'];
    document.getElementById(`type-two-card${i}`).innerHTML = typeTwo;
    document.getElementById(`type-two-card${i}`).classList.add('type-style');
}

// ================================================================== Hover
function scaleUp(x) {
    x.style.transform = "scale(1.07)";
}

function scaleDown(x) {
    x.style.transform = "scale(1)";
}

// ================================================================== about / strengths 
function showAboutPokemon(i, height, weight, ability, habitat) {
    document.getElementById(`strengths-text${i}`).style.backgroundColor = "";
    document.getElementById(`about-strengths-field${i}`).innerHTML = addAboutContent(height, weight, ability, habitat);
    document.getElementById(`about-text${i}`).style.backgroundColor = "rgba(255, 255, 255, 0.05)";
}

function showStrengthsPokemon(i) {
    document.getElementById(`about-text${i}`).style.backgroundColor = "";
    document.getElementById(`about-text${i}`).classList.remove('about');
    document.getElementById(`strengths-text${i}`).style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    addChart(i);
}

function addChart(i) {
    document.getElementById(`about-strengths-field${i}`).innerHTML = `
    <div class="chart">
        <canvas id="myChart"></canvas>
    </div>
    `;
    setChart(i);
}

function setChart(i) {
    let ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            legend: {
                display: false,  
            },
            labels: ['HP', 'Attack', 'Defense', 'Speed'],
            datasets: [{
                labels: false,
                data: [statHPs[i], statAttacks[i], statDefenses[i], statSpeeds[i]],
                borderWidth: 1,
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
        }
    });
}


async function generateAboutInfos(i) {
    let height = pokemon[i]['height'];
    let weight = pokemon[i]['weight'];
    let ability = pokemon[i]['abilities'][0]['ability']['name'];
    let habitat = await getHabitat(i);
    showAboutPokemon(i, height, weight, ability, habitat);
}

async function getHabitat(i) {
    species = pokemon[i]['species']['url'];
    let urlResponse = await fetch(species);
    let speciesJson = await urlResponse.json();
    let habitat = await speciesJson['habitat']['name'];
    return habitat;
}

function addAboutContent(height, weight, ability, habitat) {
    return `
        <div class="about-filled-content">
            <p>Height:<span>${height}0 cm</span></p>
            <p>Weight:<span>${weight}00 g</span></p>
            <p>Ability:<span>${ability}</span></p>
            <p>Habitat:<span>${habitat}</span></p>
        </div>
    `;
}

// ================================================================== Color 
function addCardBgColor(i) {
    let singlecard = document.getElementById(`open-cards${i}`);

    switch (typeOneS[i]) {
        case 'grass':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(63, 121, 82)";
            break;
        case 'fire':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(252, 108, 110)";
            break;
        case 'water':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(132, 199, 254)";
            break;
        case 'electric':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(254, 218, 120)";
            break;
        case 'normal':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(183, 183, 170)";
            break;
        case 'fighting':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(177, 82, 71)";
            break;
        case 'flying':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(121, 168, 241)";
            break;
        case 'poison':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(156, 88, 148)";
            break;
        case 'ground':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(236, 206, 89)";
            break;
        case 'rock':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(205, 189, 114)";
            break;
        case 'bug':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(196, 207, 34)";
            break;
        case 'ghost':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(116, 114, 213)";
            break;
        case 'psychic':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(249, 95, 173)";
            break;
        case 'ice':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(150, 242, 255)";
            break;
        case 'dragon':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(117, 103, 201)";
            break;
        case 'dark':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(143, 106, 88)";
            break;
        case 'steel':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(196, 195, 217)";
            break;
        case 'fairy':
            singlecard.style.backgroundImage = "linear-gradient( rgb(22, 25, 26), rgb(249, 177, 254)";
            break;
    }
    singlecard.classList.add('open-cards');
}

function addpokeNumber(i) {
    let pokeNumberField = document.getElementById(`poke-number${i}`);

    if (pokeID[i] <= 9) {
        pokeNumberField.innerHTML = `#000${pokeID[i]}`;
    }
    if (pokeID[i] > 9 && pokeID[i] <= 99) {
        pokeNumberField.innerHTML = `#00${pokeID[i]}`;
    }
    if (pokeID[i] > 99) {
        pokeNumberField.innerHTML = `#0${pokeID[i]}`;
    }
    if (pokeID[i] > 999) {
        pokeNumberField.innerHTML = `#${pokeID[i]}`;
    }
}

function closeCard() {
    document.getElementById('card-container').innerHTML = '';
    document.body.classList.remove('overflow');
}





