const getData = (listaDePersonagens) => {
  let cardPersonagem = document.getElementById("CardPersonagem");
  cardPersonagem.innerHTML = "";

  listaDePersonagens.items.forEach(function (item) {
    let divCaixaPersonagem = document.createElement("div");
    let h2Nome = document.createElement("h2");
    let textoNome = document.createTextNode(item.name);
    let figureImagem = document.createElement("figure");
    let img = document.createElement("img");
    let divCaixaSobre = document.createElement("div");
    let divCaixaMaisSobre = document.createElement("div");
    let pSobre = document.createElement("p");
    let pSobreMais = document.createElement("p");

    let textoDescricao = document.createTextNode(
      item.description
    );
    let textoRace = document.createTextNode(
      `Raça: ${item.race }`
    );
    let textoGender = document.createTextNode(
      `Gênero: ${item.gender }`
    );
    let textoAffiliation = document.createTextNode(
      `Afilição: ${item.affiliation}`
    );

    divCaixaPersonagem.setAttribute("class", "caixaPersonagens");
    h2Nome.setAttribute("class", "Nome");
    figureImagem.setAttribute("class", "imagem");
    img.setAttribute("src", item.image );
    img.setAttribute("alt", `Imagem de ${item.name}`);
    divCaixaSobre.setAttribute("class", "descricao");
    divCaixaMaisSobre.setAttribute("class", "maisSobre");

    cardPersonagem.appendChild(divCaixaPersonagem);
    divCaixaPersonagem.appendChild(h2Nome);
    h2Nome.appendChild(textoNome);
    divCaixaPersonagem.appendChild(figureImagem);
    figureImagem.appendChild(img);
    divCaixaPersonagem.appendChild(divCaixaSobre);
    divCaixaPersonagem.appendChild(divCaixaMaisSobre);
    divCaixaSobre.appendChild(pSobre);
    divCaixaMaisSobre.appendChild(pSobreMais);

    pSobre.appendChild(textoDescricao);
    pSobreMais.appendChild(textoRace);
    pSobreMais.appendChild(document.createElement("br"));
    pSobreMais.appendChild(textoGender);
    pSobreMais.appendChild(document.createElement("br"));
    pSobreMais.appendChild(textoAffiliation);
  });
};

const getAPIAll = async () => {
  let url = "https://dragonball-api.com/api/characters?limit=58";
  let response = await fetch(url);
  
  return await response.json(); // Retorna os dados em formato JSON
};

const getAPi = async (event) => {
  event.preventDefault(); // Previne o recarregamento da página
  let inputP = document.getElementById("escolherPersonagem");
  let personagem = inputP.value.toLowerCase(); 
  let todosPersonagens = await getAPIAll(); // Obter todos os personagens

  if (todosPersonagens) {
    let personagensFiltrados = {
      items: todosPersonagens.items.filter(item =>
        item.name.toLowerCase().includes(personagem) // Filtra pelo nome
      )
    };

    // Passar os personagens filtrados para a função getData
    getData(personagensFiltrados);
  }
};

let pesquisar = document.getElementById("enviar");
pesquisar.addEventListener('click', getAPi);

window.addEventListener('load', async function() {
  let todosPersonagens = await getAPIAll();
  if (todosPersonagens) {
    getData(todosPersonagens); // Exibe todos os personagens ao carregar
  }
  alert("Este site ira trazer dados em espanhol")
});
