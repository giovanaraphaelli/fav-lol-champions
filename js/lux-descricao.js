export function luxDescricao(nameCard, title, habilidade, text) {
  var luxDescricao = document.querySelector(".lux-descricao");
  var luxHabilidade = document.querySelector(".lux-habilidade");
  var luxTitleHabilidade = document.querySelector(".lux-title-habilidade");

  if (luxDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      luxDescricao.innerHTML = text;
      luxHabilidade.innerHTML = habilidade;
      luxTitleHabilidade.innerHTML = title;
    });
  }
}
