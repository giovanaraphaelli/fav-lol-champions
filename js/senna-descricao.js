export function sennaDescricao(nameCard, title, habilidade, text, gif) {
  var sennaDescricao = document.querySelector(".senna-descricao");
  var sennaHabilidade = document.querySelector(".senna-habilidade");
  var sennaTitleHabilidade = document.querySelector(".senna-title-habilidade");
  var gifSennaHabilidade = document.querySelector(".gif-senna-habilidade");

  if (sennaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      sennaDescricao.innerHTML = text;
      sennaHabilidade.innerHTML = habilidade;
      sennaTitleHabilidade.innerHTML = title;
      gifSennaHabilidade.setAttribute("src", gif);
    });
  }
}
