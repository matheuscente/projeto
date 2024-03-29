import * as functions from "./function/functions.js"
import {home} from "./pages/home.js"

const href = window.location.href;
const content = document.querySelector('#aplication')
const nextButton = document.querySelector('.form-submit')

window.addEventListener('load', () => {
    functions.showContent(window.location.hash)
    functions.submit()
    functions.alignNavigation();
    functions.changeBarBGColor() 
    if(window.location.hash == "#adds") {
        functions.alignCheckbox()
    }

})

window.addEventListener('hashchange', () => {
    functions.changeBarBGColor() 
    functions.showContent(window.location.hash)
    functions.alignNavigation()
    functions.submit()
})


window.addEventListener('resize', () => {
    functions.alignNavigation()
    if(window.location.hash == "#adds") {
        functions.alignCheckbox()
    }
})


nextButton.addEventListener('click', (event) => {
    functions.submit(event.target);
})

