// Variaveis Globais
const url = "https://rickandmortyapi.com/api/character";

let json;


//OBTENDO A INSTACIA DOS COMPONENTES HTML

const textTotalPersonagens = document.getElementById("totalPersonagens"); // exibindo o total de personagens no HTML
const textTotalPaginas = document.getElementById("totalPaginas"); // exibindo o total de personagens no HTML

const textNomePersonagem = document.getElementById("nomePrimeiroPersonagem"); // exibindo o nome do personagem no HTML


async function carregar(urlDaConsulta) {
    console.log("Buscando dados da API...");
    const response = await fetch(urlDaConsulta);
    json = await response.json();    
    console.log(json);

    //Mostrando o total de personagens 

    const totalPersonagens = Number(json.info.count); // mostrando o total de personagens 
    console.log("Total de personagens:", totalPersonagens);

    const totalPaginas = Number(json.info.pages); // mostrando o total de paginas 
    console.log("Total de páginas:", totalPaginas);

    textTotalPersonagens.innerText = ` A API retornou: ${totalPersonagens} personagens.`; // exibindo o total de personagens no HTML
    textTotalPaginas.innerText = ` A API retornou: ${totalPaginas} páginas.`; // exibindo o total de personagens no HTML.


    const nomePrimeiroPersonagem = json.results[0].name;
    textNomePersonagem.innerText = ` O nome do primeiro personagem é: ${nomePrimeiroPersonagem}`; // exibindo o nome do personagem no HTML

}

carregar(url);

