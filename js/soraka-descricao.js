export function sorakaDescricao(nameCard, title, habilidade, text) {
  var sorakaDescricao = document.querySelector(".soraka-descricao");
  var sorakaHabilidade = document.querySelector(".soraka-habilidade");
  var sorakaTitleHabilidade = document.querySelector(
    ".soraka-title-habilidade"
  );

  if (sorakaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      sorakaDescricao.innerHTML = text;
      sorakaHabilidade.innerHTML = habilidade;
      sorakaTitleHabilidade.innerHTML = title;
    });
  }
}
