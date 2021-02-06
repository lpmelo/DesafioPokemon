class PegaCidade {
  constructor(nomeCidade) {
    this.nomecidade = nomeCidade;
    let key = "6ce079aa71a79c95ed661ab729f8f323";
    let urlstr = "https://api.openweathermap.org/data/2.5/weather?q=" + nomeCidade + "&appid=" + key + "&units=metric";

    fetch(`${urlstr}`, options)
      .then(response => {
        response.json()
          .then(data => mostrarDados(data))
      })
      .catch(e => console.log('Deu erro: ' + e, message));
  }
}
function mostrarDados(data) {
  let t, weather, main,chuva;
  if (data) {
    t = data.main.temp;
    weather = data.weather;
    weather.map((index) => {
      main = index.main
      if (main == "Rain") {
        chuva = "Sim";
      } else { chuva = "Não"; }
    });
    document.getElementById('lblTemperatura').innerHTML = t;
    document.getElementById('lblChuva').innerHTML = chuva;
    PegaPokemon(); // função PokeAPI
  }
}

const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}