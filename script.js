// script.js

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".ver-sabores");
  
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const lista = botao.nextElementSibling;
      if (!lista) return;
      
      if (lista.style.display === "block") {
        lista.style.display = "none";
        botao.textContent = "Ver/Esconder Sabores";
      } else {
        lista.style.display = "block";
        botao.textContent = "Esconder Sabores";
      }
    });
  });
});