export function luxDescricao(nameCard, title, habilidade, text, gif) {
  var luxDescricao = document.querySelector(".lux-descricao");
  var luxHabilidade = document.querySelector(".lux-habilidade");
  var luxTitleHabilidade = document.querySelector(".lux-title-habilidade");
  var gifLuxHabilidade = document.querySelector(".gif-lux-habilidade");
  const btnLux = document.querySelectorAll(".btn-habilidade.lux");

  if (luxDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      luxDescricao.innerHTML = text;
      luxHabilidade.innerHTML = habilidade;
      luxTitleHabilidade.innerHTML = title;
      gifLuxHabilidade.setAttribute("src", gif);
    });

    function activeBtn(event) {
      btnLux.forEach((btn) => {
        btn.classList.remove("ativo");
      });
      event.currentTarget.classList.add("ativo");
    }

    btnLux.forEach((item) => {
      item.addEventListener("click", activeBtn);
    });
  }
}
