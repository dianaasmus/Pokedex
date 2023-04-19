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

// ================================================================== Load more Button 
async function loadMore() {
    document.getElementById('load-more-btn').classList.add('d-none');
    for (let i = amountsShowing; i < amountsShowing + 100; i++) {
        await RenderPokemonInfo(i);
    }
    amountsShowing += 20;

    document.getElementById('load-more-pokemon-btn').classList.remove('d-none');
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
    openCard(i + 1);
    if (i > amountsShowing) {
        i = 0;
    }
}

function previous(i) {
    if (i == 0) {
        i = 4;
    }
    openCard(i - 1);
}
