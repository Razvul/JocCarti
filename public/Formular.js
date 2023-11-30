const inputNume = document.querySelector('#nume')
const inputParola = document.querySelector('#parola')
const inputGen = document.getElementsByName('gen')
const inputVarsta = document.querySelector('[type="number"]')
const butonSubmit = document.querySelector('[type="submit"]')
const butonEmail = document.querySelector('[type="email"]')

const infoUser = {}

function verificaUserName(name) {
    let rezultat = ''
    if (name.length <= 3) {
        rezultat = 'Numele utilizatorului este prea mic'
    }
    else {
        rezultat = 'Numele utilizatorului este destul de mare'
    }
    return rezultat
}

function verificaUserParola(parola) {
    let rezultat = ''
    let carcatereSpeciale = 0
    for (let i = 0; i < parola.length; i++) { // filter sa scot a..z A..Z 0..9
        if (!(parola[i] >= 'a' && parola[i] <= 'z') && !(parola[i] >= 'A' && parola[i] <= 'Z') && !(parola[i] >= '0' && parola[i] <= '9') && parola[i] != ' ') {
            carcatereSpeciale++
        }
    }

    if (parola.length <= 8) {
        rezultat += 'Parola este prea mica. '
    }
    else {
        rezultat += 'Parola este destul de lunga. '
    }

    if (carcatereSpeciale > 0) {
        rezultat += 'Parola contine caractere speciale. '
    }
    else {
        rezultat += 'Parola NU contine caractere speciale. '
    }
    return rezultat
}

function verificaUserVarsta(varsta) {
    let rezultat = ''
    if (varsta < 18) {
        rezultat = 'Esti prea mic pentru a juca.'
    }
    else if (varsta <= 50) {
        rezultat = 'Esti potrivit pentru a juca.'
    }
    else if (varsta <= 80) {
        rezultat = 'Esti prea batran pentru a juca.'
    }
    else {
        rezultat = 'De ce mai esti in viata?'
    }
    return rezultat
}

function verificaUserEmail(email) {
    let rezultat = ''
    let areArond = false
    let arePunct = false
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            areArond = true
        }
        if (email[i] === '.') {
            arePunct = true
        }
    }
    if (areArond && arePunct) {
        let emailArray = email.split('')
        let indexArond = emailArray.findIndex(elem => {
            return elem === '@'
        })
        let indexPunct = emailArray.findIndex(elem => {
            return elem === '.'
        })

        if (indexPunct - indexArond > 0) {
            rezultat += 'Adresa de email este corecta. '
        }
        else {
            rezultat += 'Adresa de email este gresita. '
        }
    }
    else {
        rezultat += 'Adresa de email este gresita. '
    }
    return rezultat
}

const inputList = document.querySelectorAll('input')

inputNume.addEventListener('input', (e) => {
    infoUser.nume = e.target.value
})
inputParola.addEventListener('input', (e) => {
    infoUser.parola = e.target.value
})
inputGen.forEach(el => {
    el.addEventListener('input', (e) => {
        infoUser.gen = e.target.value
    })
})
inputVarsta.addEventListener('input', (e) => {
    infoUser.varsta = e.target.value
})
butonEmail.addEventListener('input', (e) => {
    infoUser.email = e.target.value
})

const rezultatUser = document.getElementById('rezultat-user')
butonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    rezultatUser.innerHTML = ''
    console.log(infoUser)

    const nume = document.createElement('p')
    nume.textContent = verificaUserName(infoUser.nume)
    rezultatUser.appendChild(nume)

    const parola = document.createElement('p')
    parola.textContent = verificaUserParola(infoUser.parola)
    rezultatUser.appendChild(parola)

    const varsta = document.createElement('p')
    varsta.textContent = verificaUserVarsta(infoUser.varsta)
    rezultatUser.appendChild(varsta)

    const email = document.createElement('p')
    email.textContent = verificaUserEmail(infoUser.email)
    rezultatUser.appendChild(email)
})