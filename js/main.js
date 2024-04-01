import { body } from "../js/classes/body.js";
import { page } from "../js/pages/page.js";
import { home } from "../js/pages/home.js";
import { adds } from "../js/pages/adds.js";
import { plan } from "../js/pages/plan.js";
import { finish } from "../js/pages/finish.js";
import { pageList } from "../js/classes/pageList.js";
import { navigation } from "../js/classes/navigation.js";
import { clientDom } from "../js/classes/clientDom.js";
import { client } from "../js/classes/backClasses/client.js";
import { pedido } from "../js/classes/backClasses/pedido.js";

const listaPaginas = new pageList(document.querySelectorAll(".button-list"));
const index = new body(window.location.hash, listaPaginas);
const navegacao = new navigation(
  document.querySelector(".navigation"),
  document.querySelector(".form-submit"),
  document.querySelector(".back")
);
const clienteDom = new clientDom();
const cliente = new client();
const carrinho = new pedido();

let pagina = new page();

function changeIndex() {
  index.addHash();
  index.mudarConteudo(navegacao, pagina);
  navegacao.nextPage(index.identificador);
  navegacao.backPage(index.identificador);
  listaPaginas.trocarBG(index.identificador);
}

window.addEventListener("load", () => {
  changeIndex();
  if (index.identificador == "#home") {
    clienteDom.name = document.getElementById("name");
    clienteDom.email = document.getElementById("email");
    clienteDom.telefone = document.getElementById("phone");
    if (
      clienteDom.getName() ||
      clienteDom.getEmail() ||
      clienteDom.getPhone()
    ) {
      clienteDom.name.value = clienteDom.getName();
      clienteDom.email.value = clienteDom.getEmail();
      clienteDom.telefone.value = clienteDom.getPhone();
    }
  } else if (index.identificador == "#plan") {
    if (
      !clienteDom.getName() ||
      !clienteDom.getEmail ||
      !clienteDom.getPhone()
    ) {
      window.location.hash = "#home";
      changeIndex();
    }
    pagina = new plan();
    pagina.plan.forEach((plan, index) => {
      plan.addEventListener("input", () => {
        if (plan.checked) {
          pagina.opcao[index].style.borderColor = "var(--b2)";
          if (index == "1") {
            carrinho.plano = "Advanced";
            pagina.timePlan.addEventListener('input', () => {
                if (!pagina.timePlan.checked) {
                  carrinho.preco = 12;
                } else if(pagina.timePlan.checked){
                  carrinho.preco = 120;
                }
            })
            if (!pagina.timePlan.checked) {
              carrinho.preco = 12;
            } else if(pagina.timePlan.checked){
              carrinho.preco = 120;
            }
            pagina.opcao[0].style.borderColor = "var(--c3)";
            pagina.opcao[2].style.borderColor = "var(--c3)";
          } else if (index == "0") {
            carrinho.plano = "Arcade";
            pagina.timePlan.addEventListener('input', () => {
                if (!pagina.timePlan.checked) {
                  carrinho.preco = 9;
                } else if(pagina.timePlan.checked){
                  carrinho.preco = 90;
                }
            })
            if (!pagina.timePlan.checked) {
              carrinho.preco = 9;
            } else if(pagina.timePlan.checked){
              carrinho.preco = 90;
            }
            pagina.opcao[1].style.borderColor = "var(--c3)";
            pagina.opcao[2].style.borderColor = "var(--c3)";
          } else if (index == "2") {
            carrinho.plano = "Pro";
            pagina.timePlan.addEventListener('input', () => {
                if (!pagina.timePlan.checked) {
                  carrinho.preco = 15;
                } else if(pagina.timePlan.checked){
                  carrinho.preco = 150;
                }
            })
            if (!pagina.timePlan.checked) {
              carrinho.preco = 15;
            } else if(pagina.timePlan.checked){
              carrinho.preco = 150;
            }
            pagina.opcao[0].style.borderColor = "var(--c3)";
            pagina.opcao[1].style.borderColor = "var(--c3)";
          }
        }
      });
    });
    pagina.name = document.querySelectorAll(".plan-title");
    pagina.freeMonth = document.querySelectorAll(".free-month");
    pagina.preco = document.querySelectorAll(".plan-price");
    pagina.timePlan.addEventListener("click", () => {
      pagina.showPrice();
    });
  }
});

window.addEventListener("hashchange", () => {
  index.identificador = window.location.hash;
  index.mudarConteudo(navegacao, pagina);
  listaPaginas.trocarBG(index.identificador);
  navegacao.nextPage(index.identificador);
  navegacao.backPage(index.identificador);
  if (index.identificador == "#home") {
    clienteDom.name = document.getElementById("name");
    clienteDom.email = document.getElementById("email");
    clienteDom.telefone = document.getElementById("phone");
    if (clienteDom.getName()) {
      clienteDom.name.value = clienteDom.getName();
    }

    if (clienteDom.getEmail()) {
      clienteDom.email.value = clienteDom.getEmail();
    }

    if (clienteDom.getPhone()) {
      clienteDom.telefone.value = clienteDom.getPhone();
    }
    clienteDom.name.addEventListener("input", () => {
      clienteDom.setName();
    });

    clienteDom.email.addEventListener("input", () => {
      clienteDom.setEmail();
    });

    clienteDom.telefone.addEventListener("input", () => {
      clienteDom.setPhone();
    });
    if (clienteDom.getName() || clienteDom.getEmail() || clienteDom.getPhone()) {
        clienteDom.name.value = clienteDom.getName();
        clienteDom.email.value = clienteDom.getEmail();
        clienteDom.telefone.value = clienteDom.getPhone();
      }
  } else if (index.identificador == "#plan") {
    if (
      !clienteDom.getName() ||
      !clienteDom.getEmail ||
      !clienteDom.getPhone()
    ) {
      window.location.hash = "#home";
      changeIndex();
    }
    pagina = new plan();

    pagina.plan.forEach((plan, index) => {
      plan.addEventListener("input", () => {
        if (plan.checked) {
          pagina.opcao[index].style.borderColor = "var(--b2)";
          if (index == "1") {
            carrinho.plano = "Advanced";
            pagina.timePlan.addEventListener('input', () => {
                if (!pagina.timePlan.checked) {
                  carrinho.preco = 12;
                } else if(pagina.timePlan.checked){
                  carrinho.preco = 120;
                }
            })
            if (!pagina.timePlan.checked) {
              carrinho.preco = 12;
            } else if(pagina.timePlan.checked){
              carrinho.preco = 120;
            }
            pagina.opcao[0].style.borderColor = "var(--c3)";
            pagina.opcao[2].style.borderColor = "var(--c3)";
          } else if (index == "0") {
            carrinho.plano = "Arcade";
            pagina.timePlan.addEventListener('input', () => {
                if (!pagina.timePlan.checked) {
                  carrinho.preco = 9;
                } else if(pagina.timePlan.checked){
                  carrinho.preco = 90;
                }
            })
            if (!pagina.timePlan.checked) {
              carrinho.preco = 9;
            } else if(pagina.timePlan.checked){
              carrinho.preco = 90;
            }
            pagina.opcao[1].style.borderColor = "var(--c3)";
            pagina.opcao[2].style.borderColor = "var(--c3)";
          } else if (index == "2") {
            carrinho.plano = "Pro";
            pagina.timePlan.addEventListener('input', () => {
                if (!pagina.timePlan.checked) {
                  carrinho.preco = 15;
                } else if(pagina.timePlan.checked){
                  carrinho.preco = 150;
                }
            })
            if (!pagina.timePlan.checked) {
              carrinho.preco = 15;
            } else if(pagina.timePlan.checked){
              carrinho.preco = 150;
            }
            pagina.opcao[0].style.borderColor = "var(--c3)";
            pagina.opcao[1].style.borderColor = "var(--c3)";
          }
        }
      });
    });
    pagina.name = document.querySelectorAll(".plan-title");
    pagina.freeMonth = document.querySelectorAll(".free-month");
    pagina.preco = document.querySelectorAll(".plan-price");
    pagina.timePlan.addEventListener("click", () => {
      pagina.showPrice();
    });
  }

  
});

navegacao.btnNext.addEventListener("click", () => {
  if (index.identificador == "#home") {
    const required = document.querySelectorAll(".required-input");
    if (!clienteDom.name.value) {
      event.preventDefault();
      required[0].classList.remove("none");
      clienteDom.name.style.borderColor = "var(--v)";
    }
    if (!clienteDom.email.value) {
      event.preventDefault();
      required[1].classList.remove("none");
      clienteDom.email.style.borderColor = "var(--v)";
    }
    if (!clienteDom.telefone.value) {
      event.preventDefault();
      required[2].classList.remove("none");
      clienteDom.telefone.style.borderColor = "var(--v)";
    }
  } else {
    navegacao.nextPage(index.identificador);
    index.mudarConteudo(navegacao, pagina);
    console.log(carrinho);
  }
});

navegacao.btnBack.addEventListener("click", () => {
  index.mudarConteudo(navegacao);
  navegacao.backPage(index.identificador);
});
