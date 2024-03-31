import {home} from "../pages/home.js"
import {adds} from "../pages/adds.js"
import {plan} from "../pages/plan.js"
import {finish} from "../pages/finish.js"
import {page} from "../pages/page.js"

export class body {
    constructor(identificador, listaPaginas) {
        this.identificador = identificador;
        this.listaPaginas = listaPaginas;
        this.conteudo = document.getElementById('aplication')
    }

    //adiciona o hash caso nao exita

    addHash() {
        if(this.identificador == "") {
            window.location.hash = "#home"
            this.identificador = window.location.hash
        }
    }

    //muda o conteudo de acordo com o hash da pagina e alina a navegacao de acordo com seu tamanho

    mudarConteudo(navegacao, pagina) {
        if (this.conteudo.hasChildNodes()) {
            this.conteudo.innerHTML = ""
        }
        switch(this.identificador) {
            case "#home":
                 pagina = new home()
                pagina.montarConteiner(this.conteudo)
                navegacao.alignBtn(this.conteudo)
            break;

            case "#plan":
                 pagina = new plan()
                pagina.montarConteiner(this.conteudo)
                navegacao.alignBtn(this.conteudo)
            break;

            case "#adds":
                 pagina = new adds()
                pagina.montarConteiner(this.conteudo)
                navegacao.alignBtn(this.conteudo)
            break;

            case "#finish":
                 pagina = new finish()
                pagina.montarConteiner(this.conteudo)
                navegacao.alignBtn(this.conteudo)
            break;
                
        }
    }



}