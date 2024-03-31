import {page} from "../pages/page.js"
import {home} from "../pages/home.js"

export class navigation {
    constructor(div, btnNext, btnBack) {
        this.navigation = div
        this.btnBack = btnBack
        this.btnNext = btnNext

    }
    //recebe o conteudo e alinha a barra de navegação de acordo com o seu tamanho
    alignBtn(item) {
        const innerWidth = Number(window.innerWidth),
        content = item.clientWidth
        if(innerWidth > 950) {
            this.navigation.style.width = content + 'px';
        } else {
            this.navigation.style.width = "100vw";
        }

        this.navigation.style.display = "flex"
    }

    //muda o href do botao back e o esconde se necessario
    backPage(identificador) {
        switch (identificador) {
            case "#home":
              this.btnBack.style.display = "none";
              break;
    
            case "#plan":
                this.btnBack.style.display = "block"
                this.btnBack.setAttribute("href", "index.html#home");
              break;
    
            case "#adds":
                this.btnBack.style.display = "block"
              this.btnBack.setAttribute("href", "index.html#plan");
              break;

              case "#finish":
                this.btnBack.style.display = "block"
              this.btnBack.setAttribute("href", "index.html#adds");
              break;

        }
    }

        //muda o href do botao next

    nextPage(identificador) {
        switch (identificador) {
            case "#home":
              this.btnNext.setAttribute("href", "index.html#plan");
              break;
    
            case "#plan":

              this.btnNext.setAttribute("href", "index.html#adds");
              break;
    
            case "#adds":
              this.btnNext.setAttribute("href", "index.html#finish");
              break;

        }
}
}