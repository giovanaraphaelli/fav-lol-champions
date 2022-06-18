export function sorakaDescricao(nameCard, title, habilidade, text, gif) {
  var sorakaDescricao = document.querySelector(".soraka-descricao");
  var sorakaHabilidade = document.querySelector(".soraka-habilidade");
  var sorakaTitleHabilidade = document.querySelector(
    ".soraka-title-habilidade"
  );
  var gifSorakaHabilidade = document.querySelector(".gif-soraka-habilidade");

  if (sorakaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      sorakaDescricao.innerHTML = text;
      sorakaHabilidade.innerHTML = habilidade;
      sorakaTitleHabilidade.innerHTML = title;
      gifSorakaHabilidade.setAttribute("src", gif);
    });
  }
}
