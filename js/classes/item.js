export class item {
    constructor (checkBox, conteiner) {
        this.checkBox = checkBox;
        this.conteiner = conteiner;
        this.heightConteiner = conteiner.clientHeight
    }

    alignItem() {

    const heightConteiner = this.conteiner.clientHeight
    this.checkBox.style.top = (heightConteiner / 2.5) + "px"

}
}