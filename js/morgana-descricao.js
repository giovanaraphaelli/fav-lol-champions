export function morganaDescricao(nameCard, title, habilidade, text) {
  var morganaDescricao = document.querySelector(".morgana-descricao");
  var morganaHabilidade = document.querySelector(".morgana-habilidade");
  var morganaTitleHabilidade = document.querySelector(
    ".morgana-title-habilidade"
  );

  if (morganaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      morganaDescricao.innerHTML = text;
      morganaHabilidade.innerHTML = habilidade;
      morganaTitleHabilidade.innerHTML = title;
    });
  }
}
