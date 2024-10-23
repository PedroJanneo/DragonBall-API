const getData = (listaDePersonagens) => {
  let cardPersonagem = document.getElementById("CardPersonagem");
  listaDePersonagens.forEach(function (item) {
    // Criamos uma tag no html para uma div
    let divCaixaPersonagem = document.createElement("div");
    let h2Nome = document.createElement("h2");

    // Permite criar uma área de texto para colocar em algum elemento HTML
    let textoNome = document.createTextNode(item.name);
    let figureImagem = document.createElement("figure");
    let img = document.createElement("img");
    let divCaixaSobre = document.createElement("div");
    let pSobre = document.createElement("p");
    let textoDescricao = document.createTextNode(item.description);

    // Adiciona um novo atributo em uma tag no HTML
    divCaixaPersonagem.setAttribute("class", "caixaPersonagens");
    h2Nome.setAttribute("class", "Nome");
    figureImagem.setAttribute("class", "imagem");
    img.setAttribute("src", item.image);
    img.setAttribute("alt", `Imagem de ${item.name}`);
    divCaixaSobre.setAttribute("class", item.description);

    // Adiciona a nova div dentro do elemento pai (CardPersonagem)
    cardPersonagem.appendChild(divCaixaPersonagem);
    divCaixaPersonagem.appendChild(h2Nome);
    h2Nome.appendChild(textoNome);
    divCaixaPersonagem.appendChild(figureImagem);
    figureImagem.appendChild(img);
    divCaixaPersonagem.appendChild(divCaixaSobre);
    divCaixaSobre.appendChild(pSobre);
    pSobre.appendChild(textoDescricao);
  });
};

const getDataAPi = async () => {
  let url = "https://dragonball-api.com/api/characters?name=goku"; /*https://dragonball-api.com/api/characters?name=goku   */

  let response = await fetch(url);
  let dadosPersonagens = await response.json();

  getData(dadosPersonagens);
};

window.addEventListener("load", function () {
  getDataAPi();
});
