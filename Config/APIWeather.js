class pegacidade {
  constructor(nomecidade) {
    this.nomecidade = nomecidade;
    var key = "6ce079aa71a79c95ed661ab729f8f323";
    var urlstr = "https://api.openweathermap.org/data/2.5/weather?q=" + nomecidade + "&appid=" + key +"&units=metric";
    
    
    fetch(`${urlstr}`, options)
      .then(response => {
        response.json()
          .then(data => mostrardados(data))
      })
      .catch(e => console.log('Deu erro: ' + e, message));
  }
}

function mostrardados(data){
  t = data;
  c = data;
if (t){
  t = t.main.temp.toString(); 
}
if (c){
  c = c.weather[0];
  console.log(c);
}
}

var t= null;

const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}