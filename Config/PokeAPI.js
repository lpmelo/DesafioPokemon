function PegaPokemon() {
    let tempPokemon = document.getElementById('lblTemperatura').innerText;
    let chuva = document.getElementById('lblChuva').innerText;
    let tipo = "";
    let pokemon = null;
    if (chuva == "Sim") {
        tipo = "eletric";
    } else {
        if (tempPokemon < 5) {
            tipo = "ice";
        } if (tempPokemon >= 5 && tempPokemon < 10) {
            tipo = "water";
        } if (tempPokemon >= 10 && tempPokemon < 12 || tempPokemon >= 21 && tempPokemon < 23) {
            tipo = "normal";
        } if (tempPokemon >= 12 && tempPokemon < 15) {
            tipo = "grass";
        } if (tempPokemon >= 15 && tempPokemon < 21) {
            tipo = "ground";
        } if (tempPokemon >= 23 && tempPokemon < 27) {
            tipo = "bug";   
        } if (tempPokemon >= 27 && tempPokemon <= 33) {
            tipo = "rock";
        } if (tempPokemon > 33) {
            tipo = "fire";
        }
    }
    let urlstr = "https://pokeapi.co/api/v2/type/"+tipo;
    fetch(`${urlstr}`,options)
    .then(response=>{
        response.json()
        .then(data=>EscolhePokemon(data));
        
    })
    .catch(e => console.log('Deu erro: ' + e, message));
}

function EscolhePokemon(data){
    let arrayPokemon = data.pokemon;
    let numeroPokemons = arrayPokemon.length - 1;
    let pokemonSorteado = Math.floor(Math.random() * numeroPokemons);
    let nomePokemon = arrayPokemon[pokemonSorteado].pokemon.name;
    document.getElementById("lblPokemon").innerHTML = nomePokemon;

}