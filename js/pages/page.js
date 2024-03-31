export class page {
    constructor() {
    }
    corpo() {}
    montarConteiner(conteiner) {
        conteiner.innerHTML = this.corpo()
    }
}