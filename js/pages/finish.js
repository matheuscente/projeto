import {page} from "./page.js"

export class finish extends page {
  constructor() {
    super()
}

    corpo() {
        let content = `
        <div class="cabecalho">
    <h1 class="font-g-b blue1">Finishing up</h1>
    <span class="font-m-l gray1"
      >Double-check everything looks OK before confirming.</span
    >
  </div>
  <div class="step-one form-column" action="#plan">
    <div class="bg">
      <div class="plan-selected">
        <div class="plan-selected-description">
          <div class="total-div">
            <h2 class="font-m-b blue1 plan-selected-title">Arcade</h2>
            <span class="font-m-b plan-time">(Monthly)</span>
          </div>
          <button class="btn-change font-m-l gray1">Change</button>
        </div>
        <span class="font-m-b blue1 plan-selected-price">$9/mo</span>
      </div>
      <div>
        <div class="plan-selected-adds">
          <span class="font-m-l gray1">Online service</span>
          <span class="font-m-n blue1">+$1/mo</span>
        </div>
        <div class="plan-selected-adds">
          <span class="font-m-l gray1">Larger storage</span>
          <span class="font-m-n blue1">+$2/mo</span>
        </div>
      </div>
    </div>
    <div class="total-plan">
      <div class="font-m-l gray1 total-div">
        <span>Total</span>
        <span>(per <span>month</span>)</span>
      </div>
      <span class="font-m-b blue2 total">+$12/mo</span>
    </div>
  </div>`
        return content
    }

    

}