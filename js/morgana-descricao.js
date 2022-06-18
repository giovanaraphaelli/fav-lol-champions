export function morganaDescricao(nameCard, title, habilidade, text, gif) {
  var morganaDescricao = document.querySelector(".morgana-descricao");
  var morganaHabilidade = document.querySelector(".morgana-habilidade");
  var morganaTitleHabilidade = document.querySelector(
    ".morgana-title-habilidade"
  );
  var gifMorganaHabilidade = document.querySelector(".gif-morgana-habilidade");

  if (morganaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      morganaDescricao.innerHTML = text;
      morganaHabilidade.innerHTML = habilidade;
      morganaTitleHabilidade.innerHTML = title;
      gifMorganaHabilidade.setAttribute("src", gif);
    });
  }
}
