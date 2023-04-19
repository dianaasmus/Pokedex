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
function addHeart(i) {
    document.getElementById(`heart${i}`).classList.remove('d-none');
}

function removeHeart(i) {
    document.getElementById(`heart${i}`).classList.add('d-none');
}

// ================================================================== next / previous Pokemon 
function next(i) {
    if (i == 119) {
        document.getElementById('arrow-right').disabled = true;
    } else {
        openCard(i + 1);
    }
}

function previous(i) {
    if (i == 0) {
        document.getElementById('arrow-left').disabled = true;
    } else {
        openCard(i - 1);
    }
}
