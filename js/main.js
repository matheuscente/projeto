import {body} from "../js/classes/body.js"
import {page} from "../js/pages/page.js"
import {home} from "../js/pages/home.js"
import {adds} from "../js/pages/adds.js"
import {plan} from "../js/pages/plan.js"
import {finish} from "../js/pages/finish.js"
import {pageList} from "../js/classes/pageList.js"
import {navigation} from "../js/classes/navigation.js"
import {clientDom} from "../js/classes/clientDom.js"
import {client} from "../js/classes/backClasses/client.js"


const listaPaginas = new pageList(document.querySelectorAll('.button-list'))
const index = new body(window.location.hash, listaPaginas)
const navegacao = new navigation(document.querySelector('.navigation'), document.querySelector('.form-submit'), document.querySelector('.back'))
const clienteDom = new clientDom()
const cliente = new client()

let pagina = new page()

window.addEventListener('load', () => {
    index.addHash()
    index.mudarConteudo(navegacao, pagina)
    navegacao.nextPage(index.identificador)
    navegacao.backPage(index.identificador)
    listaPaginas.trocarBG(index.identificador)
    if(index.identificador == '#home') {
        clienteDom.name = document.getElementById('name')
        clienteDom.email = document.getElementById('email')
        clienteDom.telefone = document.getElementById('phone')
        if(clienteDom.getName() || clienteDom.getEmail() || clienteDom.getPhone()) {
            clienteDom.name.value = clienteDom.getName()
            clienteDom.email.value = clienteDom.getEmail()
            clienteDom.telefone.value = clienteDom.getPhone()
        }
    }
    else if(index.identificador == '#plan') {
        pagina = new plan()
        pagina.name = document.querySelectorAll('.plan-title')
        pagina.freeMonth = document.querySelectorAll('.free-month')
        pagina.preco = document.querySelectorAll('.plan-price')
        pagina.timePlan.addEventListener('click', () => {
            pagina.showPrice(pagina.timePlan)
        })

    }
    
        
})

window.addEventListener('hashchange', () => {
    index.identificador = window.location.hash
    index.mudarConteudo(navegacao, pagina)
    listaPaginas.trocarBG(index.identificador)
    navegacao.nextPage(index.identificador)
    navegacao.backPage(index.identificador)
    if(index.identificador == '#home') {
        clienteDom.name = document.getElementById('name')
        clienteDom.email = document.getElementById('email')
        clienteDom.telefone = document.getElementById('phone')
        if(clienteDom.getName()) {
            clienteDom.name.value = clienteDom.getName()

        }

        if(clienteDom.getEmail()) {
            clienteDom.email.value = clienteDom.getEmail()

        }

        if(clienteDom.getPhone()) {
            clienteDom.Phone.value = clienteDom.getPhone()

        }
        clienteDom.name.addEventListener('input', () => {
            clienteDom.setName()
        })

        clienteDom.email.addEventListener('input', () => {
            clienteDom.setEmail()
        })

        clienteDom.telefone.addEventListener('input', () => {
            clienteDom.setPhone()
        })
    } else if(index.identificador == '#plan') {
        pagina = new plan()
        pagina.showPrice()
        

    }

    if(clienteDom.getName() || clienteDom.getEmail() || clienteDom.getPhone()) {
        clienteDom.name.value = clienteDom.getName()
        clienteDom.email.value = clienteDom.getEmail()
        clienteDom.telefone.value = clienteDom.getPhone()
    }


})

navegacao.btnNext.addEventListener('click', () => {
    const required  = document.querySelectorAll('.required-input')
   if(!clienteDom.name.value) {
    required[0].classList.remove('none')
   } 
    navegacao.nextPage(index.identificador)
    index.mudarConteudo(navegacao, pagina)
})

navegacao.btnBack.addEventListener('click', () => {
    index.mudarConteudo(navegacao)
    navegacao.backPage(index.identificador)
})



    


