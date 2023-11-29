const inputNume = document.querySelector('#nume')
const inputParola = document.querySelector('#parola')
const inputGen = document.getElementsByName('gen')
const inputVarsta = document.querySelector('[type="number"]')
const butonSubmit = document.querySelector('[type="submit"]')
const butonEmail = document.querySelector('[type="email"]')


// const input = document.querySelectorAll("input")

// inputNume.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// console.log(input)

const infoUser = {}

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

butonSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(infoUser)
})
