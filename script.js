// BOTÃO PEDIDO

const pedidoBtn = document.getElementById("pedidoBtn");

pedidoBtn.addEventListener("click", () => {

  alert("Pedido iniciado com sucesso 🍰");

  window.open(
    "https://wa.me/5585999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!",
    "_blank"
  );

});

// BOTÕES COMPRAR

const comprarBtns = document.querySelectorAll(".comprar");

comprarBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    btn.innerHTML = "Adicionado ✔";
    btn.style.background = "#25d366";

    setTimeout(() => {
      btn.innerHTML = "Comprar";
      btn.style.background = "#ff4081";
    }, 2000);

  });

});

// EFEITO MENU

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.style.background = "#fff";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  }else{
    header.style.background = "white";
  }

});

// MENSAGEM CONSOLE

console.log("Sweet Dreams carregado com sucesso 🍩");