let favPokemonS = [];
// ================================================================== search 
function enter(event) {
    if (event.keyCode === 13) {
        setSearchVaribles();
        document.getElementById('load-more-btn').classList.add('d-none');
    }
}

function getInput() {
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.trim();
    return searchValue;
}

function setSearchVaribles() {
    let searchInput = getInput();
    document.getElementById('cards').innerHTML = '';
    search = searchInput.toLowerCase();
    filterSearchedPokemon(search);
}

async function filterSearchedPokemon(search) {
    for (let i = 0; i < amountsShowing; i++) {
        let searchedName = await pokemonName[i];
        if (searchedName.toLowerCase().includes(search)) {
            addSearchedCard(i);
        }
    }
}

function addSearchedCard(i) {
    showCards(i, pokeImgs[i], typeOneS[i]);
    addBgColor(typeOneS[i], i);
}

function emptyInput() {
    document.getElementById('load-more-btn').classList.remove('d-none');
    document.getElementById('search').value = '';
    setSearchVaribles();
}

// ================================================================== Load more Button 
async function loadMore() {
    amountsShowing += +61;
    let load = amountsShowing - 61;

    if (amountsShowing >= 1281) {
        document.getElementById('load-more-btn').classList.add('d-none');
    } else {
        for (let i = load; i < amountsShowing; i++) { // kein: 'amountsShowing + 50;' = undefined !!
            await RenderPokemonInfo(i);
        }
    }
}

// ================================================================== add heart
function addHeart(i, pokeImg, typeOne) {
    favPokemonS.push(i);
    let favPokemonArray = JSON.stringify(favPokemonS);
    localStorage.setItem('Favorites', favPokemonArray);
    
    let favPokemon = document.getElementById(`heart${i}`);
    favPokemon.classList.remove('d-none');
    openCard(i, pokeImg, typeOne);
}

function loadFavPokemon() {
    let favPokemonArray = localStorage.getItem('Favorites');
    favPokemonS = JSON.parse(favPokemonArray);
}

function removeHeart(i) {
    document.getElementById(`heart${i}`).classList.add('d-none');
}

// ================================================================== next / previous Pokemon 
function next(i) {
    i++;

    if (i <= 1281) {
        openCard(i);

    } else {
        document.getElementById('arrow-right').classList.add('d-none');
        document.getElementById('single-card').style.right = "33px";
    }
}

function previous(i) {
    i--;

    if (i >= 1) {
        openCard(i);
    } else {
        openCard(i);
        document.getElementById('arrow-left').classList.add('d-none');
        document.getElementById('single-card').style.left = "31px";
    }
}

// loader 
function removeLoader() {
    let loadingPage = document.getElementById("loading-page");
    loadingPage.classList.add('d-none');
    document.body.classList.remove('overflow');
}
