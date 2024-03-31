export class clientDom {
    constructor(name, email, telefone) {
        this.name = name
        this.email = email
        this.telefone = telefone
    }

    setName() {
        const name = this.name.value
        sessionStorage.setItem('name', name)
    }

    setEmail() {
        const email = this.email.value
        sessionStorage.setItem('email', email)
    }

    setPhone() {
        const telefone = this.telefone.value
        sessionStorage.setItem('telefone', telefone)
    }

    getName() {
        return sessionStorage.getItem('name')
    }

    getEmail() {
        return sessionStorage.getItem('email')
    }

    getPhone() {
        return sessionStorage.getItem('telefone')
    }

}