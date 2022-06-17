export function leonaDescricao(nameCard, title, habilidade, text) {
  var leonaDescricao = document.querySelector(".leona-descricao");
  var leonaHabilidade = document.querySelector(".leona-habilidade");
  var leonaTitleHabilidade = document.querySelector(".leona-title-habilidade");

  if (leonaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      leonaDescricao.innerHTML = text;
      leonaHabilidade.innerHTML = habilidade;
      leonaTitleHabilidade.innerHTML = title;
    });
  }
}
