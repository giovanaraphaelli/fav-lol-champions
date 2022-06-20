export function sorakaDescricao(nameCard, title, habilidade, text, gif) {
  var sorakaDescricao = document.querySelector(".soraka-descricao");
  var sorakaHabilidade = document.querySelector(".soraka-habilidade");
  var sorakaTitleHabilidade = document.querySelector(
    ".soraka-title-habilidade"
  );
  var gifSorakaHabilidade = document.querySelector(".gif-soraka-habilidade");
  const btnSoraka = document.querySelectorAll(".btn-habilidade.soraka");

  if (sorakaDescricao) {
    document.querySelector(nameCard).addEventListener("click", () => {
      sorakaDescricao.innerHTML = text;
      sorakaHabilidade.innerHTML = habilidade;
      sorakaTitleHabilidade.innerHTML = title;
      gifSorakaHabilidade.setAttribute("src", gif);
    });
  }
  function activeBtn(event) {
    btnSoraka.forEach((btn) => {
      btn.classList.remove("ativo");
    });
    event.currentTarget.classList.add("ativo");
  }

  btnSoraka.forEach((item) => {
    item.addEventListener("click", activeBtn);
  });
}
