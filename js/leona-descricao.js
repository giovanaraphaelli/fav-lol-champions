export function leonaDescricao(nameCard, title, habilidade, text, gif) {
  var leonaDescricao = document.querySelector(".leona-descricao");
  var leonaHabilidade = document.querySelector(".leona-habilidade");
  var leonaTitleHabilidade = document.querySelector(".leona-title-habilidade");
  var gifLeonaHabilidade = document.querySelector(".gif-leona-habilidade");

  if (leonaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      leonaDescricao.innerHTML = text;
      leonaHabilidade.innerHTML = habilidade;
      leonaTitleHabilidade.innerHTML = title;
      gifLeonaHabilidade.setAttribute("src", gif);
    });
  }
}
