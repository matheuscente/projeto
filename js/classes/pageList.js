import {body} from "./body.js"

export class pageList {
    constructor(item) {
        this.item = item;
    }

    // troca o background do item de acordo co a pagina ativa

    trocarBG(identificador) {
        this.item.forEach((item => {
            if(item.classList.contains('bg-page-list')) {
                item.classList.remove('bg-page-list')
            }
        }))

        switch(identificador) {
            case "#home": 
                this.item[0].classList.add('bg-page-list')
            break;

            case "#plan":
                this.item[1].classList.add('bg-page-list')
            break;

            case "#adds":
                this.item[2].classList.add('bg-page-list')
            break;

            case "#finish":
                this.item[3].classList.add('bg-page-list')
            break;
        }
    }
}