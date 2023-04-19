// ================================================================== search 
function enter(event) {
    if (event.keyCode === 13) {
        setSearchVaribles();
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
    document.getElementById('load-more-btn').classList.add('d-none');
}

function emptyInput() {
    document.getElementById('search').value = '';
    setSearchVaribles();
}

// ================================================================== Load more Button 
async function loadMore() {
    document.getElementById('load-more-btn').classList.add('d-none');
    for (let i = amountsShowing; i < allAmounts; i++) {
        await RenderPokemonInfo(i);
    }
    // amountsShowing += 20;
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
