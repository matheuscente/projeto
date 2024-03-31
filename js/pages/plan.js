import {page} from "./page.js"

export class plan extends page {
    constructor(name, preco, freeMonth) {
        super()
        this.timePlan = document.querySelector('#checkbox')
        this.name = name
        this.preco = preco
        this.freeMonth = freeMonth
    }

    showPrice() {
        if(this.timePlan.checked) {
            this.preco[0].innerText = '$90/yr'
            this.preco[1].innerText = '$120/yr'
            this.preco[2].innerText = '$150/yr'
            this.freeMonth.forEach((item) => {
                item.classList.remove('none')
            })


            
        } else {
            this.preco[0].innerText = '$9/yr'
            this.preco[1].innerText = '$12/yr'
            this.preco[2].innerText = '$15/yr'
            this.freeMonth.forEach((item) => {
                item.classList.add('none')
            })
        }
    }
    corpo() {
        let content = `<div class="cabecalho">
        <h1 class="font-g-b blue1">Select your plan</h1>
        <span class="font-m-l gray1">You have the option of monthly or yearly billing</span>
    </div>
    <form class=" form-plan form-column" action="#plan">
        <div class="flex-radio">
            <label for="op1" class="label-option">
                <div class="icon-radio">
                    <img class="icon" src="../images/icons/icon-arcade.svg" width="40" height="40"
                        alt="icone plano arcade">
                </div>
                <div class="desc-flex-radio">
                <input class="input-radio" type="radio" id="op1" name="plan" value="9">
                <h2 class="font-m-b blue1 plan-title">Arcade</h2>
                <span class="font-m-l gray1 span-option plan-price">$9/mo</span>
                <span class="font-p-n blue1 span-option free-month none">2 months free</span>
            </div>
            </label>
    
            <label for="op2" class="label-option">
                <div class="icon-radio">
                    <img class="icon" src="../images/icons/icon-advanced.svg" width="40" height="40"
                        alt="icone plano advanced">
                </div>
                <div class="desc-flex-radio">
                <input class="input-radio" type="radio" id="op2" name="plan" value="12">
                <h2 class="font-m-b blue1 plan-title">Advanced</h2>
                <span class="font-m-l gray1 span-option plan-price">$12/mo</span>
                <span class="font-p-n blue1 span-option free-month none">2 months free</span>
            </div>
            </label>
    
            <label for="op3" class="label-option">
                <div class="icon-radio">
                    <img class="icon" src="../images/icons/icon-pro.svg" width="40" height="40"
                        alt="icone plano pro">
                </div>
                <div class="desc-flex-radio">
                <input class="input-radio" type="radio" id="op3" name="plan" value="15">
                <h2 for="op3" class="font-m-b blue1 plan-title">Pro</h2>
                <span class="font-m-l gray1 span-option plan-price">$9/mo</span>
                <span class="font-p-n blue1 span-option free-month none">2 months free</span>
                </div>
            </label>
    
        </div>
        <div class="select-plan-time">
            <label class="label-checkbox" for="checkbox">
                <span class="time font-m-n">Monthly</span>
                <div class="conteiner-check">
                    <input class="checkbox" id="checkbox" type="checkbox">
                    <span class="ball"></span>
                </div>
                <span class="time font-m-n">Yearly</span>
            </label>
        </div>
    </form>`
        return content
    }

}