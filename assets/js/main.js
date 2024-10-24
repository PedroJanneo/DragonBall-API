const getData = (listaDePersonagens) => {
  let cardPersonagem = document.getElementById("CardPersonagem");

  cardPersonagem.innerHTML = ""; // Limpa o conteúdo anterior, se necessário
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
      item.description || "Descrição não disponível"
    );
    let textoRace = document.createTextNode(
      `Raça: ${item.race || "Raça desconhecida"}`
    );
    let textoGender = document.createTextNode(
      `Gênero: ${item.gender || "Gênero desconhecido"}`
    );
    let textoAffiliation = document.createTextNode(
      `Afilição: ${item.affiliation || "Afilição desconhecida"}`
    );

    divCaixaPersonagem.setAttribute("class", "caixaPersonagens");
    h2Nome.setAttribute("class", "Nome");
    figureImagem.setAttribute("class", "imagem");
    img.setAttribute("src", item.image || "default-image-url.jpg");
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
  let url = "https://dragonball-api.com/api/characters?limit=10"
  let response = await fetch(url)
  let dadosPersonagens = await response.json()

  getData(dadosPersonagens)
}

window.addEventListener('load', function(){
  getApiAl()
})