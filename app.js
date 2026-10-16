// Variaveis Globais
const url = "https://rickandmortyapi.com/api/character";

let json;

async function carregar(urlDaConsulta) {
    console.log("Buscando dados da API...");
    const response = await fetch(urlDaConsulta);
    json = await response.json();    
    console.log(json);

}

carregar(url);