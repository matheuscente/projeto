import { item } from "../classes/item.js";
import { home } from "../pages/home.js";
import { plan } from "../pages/plan.js";
import { adds } from "../pages/adds.js";
import { finish } from "../pages/finish.js";

//alinha o botao back/next de acordo com o tamanho da tela
export function alignNavigation() {
  const innerWidth = Number(window.innerWidth);
  const navigation = document.querySelector(".navigation");
  const content = document.querySelector(".content").clientWidth;
  if (innerWidth > 950) {
    navigation.style.width = content + "px";
  } else {
    navigation.style.width = "100vw";
  }
  navigation.style.display = "flex";
}

//alinha a checkbox do 'adds' para o centro do conteiner
export function alignCheckbox() {
  const op1 = new item(
    document.querySelectorAll(".personalized-checkbox")[0],
    document.querySelectorAll(".adds-form")[0]
  );
  op1.alignItem();

  const op2 = new item(
    document.querySelectorAll(".personalized-checkbox")[1],
    document.querySelectorAll(".adds-form")[1]
  );
  op2.alignItem();

  const op3 = new item(
    document.querySelectorAll(".personalized-checkbox")[2],
    document.querySelectorAll(".adds-form")[2]
  );
  op3.alignItem();
}

export function showContent(hash) {
  const content = document.querySelector("#aplication");
  switch (hash) {
    case "":
      window.location.hash = "#home";
      content.innerHTML = home();
      break;

    case "#home":
      content.innerHTML = home();
      break;

    case "#plan":
      content.innerHTML = plan();
      break;

    case "#adds":
      content.innerHTML = adds();
      break;

    case "#finish":
      content.innerHTML = finish();
      break;
  }
}

//mudar o link do botão next
export function submit(clicked) {
  const nextButton = document.querySelector(".form-submit"),
    backButton = document.querySelector(".back")
  const hash = window.location.hash;
  if (clicked) {
    if (clicked.classList.contains("form-submit")) {
      switch (hash) {
        case "#home":
          nextButton.setAttribute("href", "index.html#plan");
          break;

        case "#plan":
          nextButton.setAttribute("href", "index.html#adds");
          break;

        case "#adds":
          nextButton.setAttribute("href", "index.html#finish");
          break;
      }
    } else{
      switch (hash) {
        case "#plan":
          backButton.setAttribute("href", "./#home");
          break;

        case "#adds":
          backButton.setAttribute("href", "./#plan");
          break;

        case "#finish":
          backButton.setAttribute("href", "./#adds");
          break;
      }
    }
  } else if (!clicked) {
    switch (hash) {
      case "#home":
        nextButton.setAttribute("href", "index.html#plan");
        break;

      case "#plan":
        nextButton.setAttribute("href", "index.html#adds");
        backButton.setAttribute("href", "index.html#home");
        break;

      case "#adds":
        nextButton.setAttribute("href", "index.html#finish");
        backButton.setAttribute("href", "index.html#plan");
        break;

      case "#finish": 
        backButton.setAttribute("href", "index.html#adds");
      break;
    }
  }
}

export function changeBarBGColor() {
  const itens = document.querySelectorAll(".button-list"),
    hash = window.location.hash

    switch (hash) {
      case "#home":
        itens.forEach((item =>{
          if(item.classList.contains('background-toolbar')) {
            item.classList.remove('background-toolbar')
          }
        }))
        itens[0].classList.add("background-toolbar")
      break;

      case "#plan":
        itens.forEach((item =>{
          if(item.classList.contains('background-toolbar')) {
            item.classList.remove('background-toolbar')
          }
        }))
        itens[1].classList.add("background-toolbar")
      break;

      case "#adds":
        itens.forEach((item =>{
          if(item.classList.contains('background-toolbar')) {
            item.classList.remove('background-toolbar')
          }
        }))
        itens[2].classList.add("background-toolbar")
      break;

      case "#finish":
        itens.forEach((item =>{
          if(item.classList.contains('background-toolbar')) {
            item.classList.remove('background-toolbar')
          }
        }))
        itens[3].classList.add("background-toolbar")
      break;


    }

}
