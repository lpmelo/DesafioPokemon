var nc = "";
class peganome {
    constructor(nomecidade){ 
      this.nc = nomecidade;
      var key ="6ce079aa71a79c95ed661ab729f8f323";
      var urlstr = "https://api.openweathermap.org/data/2.5/weather?q="+nomecidade+"&appid="+key;
      const mostrardados = (result)=>{ // Utilizando Arrow Function para economizar linhas, poderia ser uma function padrão, ex: const mostrardados = function mostrardados(result)
        for(const campo in result){
          //if(document.que)
          console.log(campo);
        }
      }
      const options={
      method: 'GET',
      mode: 'cors',
      cache: 'default'
}
fetch(`${urlstr}`,options)
  .then(response =>{ response.json()  
    .then(data => console.log(mostrardados(data)))})
  .catch(e => console.log('Deu erro: '+e,message));
    }
 }