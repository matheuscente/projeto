import {page} from "./page.js"


export class home extends page {
    constructor() {
        super()
        

    }


    corpo() {
        let content = `
        <div class="cabecalho">
        <h1 class="font-g-b blue1 titulo-cabecalho">Personal info</h1>
        <span class="font-m-l gray1 span-cabecalho">Please provide your name, email address, and phone number.</span>
    </div>
    <form class="step-one form-column" action="#plan">
        <div class="form-conteiner">
            <div class="form-campo">
                <div class="label-conteiner">
                    <label for="name" class="font-m-l blue1">Name</label>
                    <span class="font-m-b red required-input none">This field is required</span>
                </div>
                <input class="font-m-n input-form blue1" type="text" name="name" id="name"
                    placeholder="Your Name" required>
            </div>
            <div class="form-campo">
                <div class="label-conteiner">
                    <label for="email blue1 font-m-l" class="font-m-l">Email Address</label>
                    <span class="font-m-b red required-input none">This field is required</span>
                </div>
                <input class="font-m-n input-form" type="email" name="email" id="email"
                    placeholder="myemail@email.com" required>
            </div>
            <div class="form-campo">
                <div class="label-conteiner">
                    <label for="phone" class="font-m-l blue1">Phone Number</label>
                    <span class="font-m-b red required-input none">This field is required</span>
                </div>
                <input class="font-m-n input-form" type="tel" name="phone" id="phone"
                    placeholder="43 99999-9999" required>
            </div>
        </div>
    </form>`
        return content
    }

    

}