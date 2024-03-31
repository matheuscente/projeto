import {page} from "./page.js"

export class adds extends page {
    constructor() {
        super()
    }

    corpo() {
        let content = `
        <div class="cabecalho">
    <h1 class="font-g-b blue1">Pick add-ons</h1>
    <span class="font-m-l gray1">Add-ons help enhance your gaming experience</span>
</div>
<form class=" form-plan form-column" action="#plan">
        <label for="online-service" class="adds-form">
            <input class="adds-checkbox" type="checkbox" id="online-service" name="online-service">
            <span class="personalized-checkbox">
                <span>✔</span>
            </span>
            <div class="adds-form-option-flex">
                <h3 class="blue1 font-m-b">Online service</h3>
                <span class="font-m-l gray1">Access to multiplayer games</span>
            </div>
            <span class="font-m-n blue2 price">+$20/yr</span>
        </label>

        <label for="larger-storage" class="adds-form">
            <input class="adds-checkbox" type="checkbox" id="larger-storage" name="larger-storage">
            <span class="personalized-checkbox">
                <span>✔</span>
            </span>
            <div class="adds-form-option-flex">
                <h3 class="blue1 font-m-b">Larger storage</h3>
                <span class="font-m-l gray1">Extra 1 TB of cloud save</span>
            </div>
            <span class="font-m-n blue2 price">+$20/yr</span>
        </label>

        <label for="profile" class="adds-form">
            <input class="adds-checkbox" type="checkbox" id="profile" name="profile">
            <span class="personalized-checkbox">
                <span>✔</span>
            </span>
            <div class="adds-form-option-flex">
                <h3 class="blue1 font-m-b">Customizable profile</h3>
                <span class="font-m-l gray1">Custom theme on your profile</span>
            </div>
            <span class="font-m-n blue2 price">+$20/yr</span>
        </label>
</form>`
        return content
    }
}