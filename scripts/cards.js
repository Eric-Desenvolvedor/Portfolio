let divProjetos = document.querySelector("#projects-container");

fetch("scripts/json/cards.json")
  .then((response) => response.json())
  .then((data) => {
    data.cards.forEach((card) => {
      divProjetos.innerHTML += `
      <div class="card-div">
        <p class="p-card">${card.name}</p>
        <img class="img-card" src="${card.img}" alt="Imagem do Site">
        <a class="a-card" target="_blank" href="${card.link}">Link do Projeto</a>
      </div>
      `;
    });
  })
  .catch((err) => console.error("Erro ao carregar JSON:", err));
