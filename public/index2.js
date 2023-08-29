function allowDrop(ev){
    ev.preventDefault() 
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id)
    setTimeout(() => {
        table.classList.add("dragging") // new line
    }, 10)
}// vreau sa pot face drag peste o carte care se afla deja pe masa
function drop(ev){
    ev.preventDefault()
    var data = ev.dataTransfer.getData("text")
    ev.target.appendChild(document.getElementById(data))
    table.classList.remove('dragging') // new line

    // sa pun tot de jos intr-o functie?
    updateStatus()
}

const setComplet = document.getElementById("set-complet")
const table = document.getElementById('table')

const player1Hand = document.getElementById("player1-hand")
const player2Hand = document.getElementById("player2-hand")

const info = document.getElementById("info")
const infoCarte = document.getElementById("info-carte")
const infoMacaua = document.getElementById("info-macaua")

function schimbaNumar(textInput){
    let result
    if(Number(textInput) > 1 && Number(textInput) < 11){
        result = textInput
    }
    else {
        switch(textInput){
            case "1": result = "A"; break
            case "11": result = "J"; break
            case "12": result = "Q"; break
            case "13": result = "K"; break
        }
    }
    return result
}

function schimbaTipul(clasa){
    let result

    switch(clasa){
        case "heart": result = "inima"; break
        case "spide": result = "frunza"; break
        case "diamond": result = "romb"; break
        case "clover": result = "trefla"; break
        default: return
    }
    return result
}

function reguliMacaua(carte){
    let result
    switch(carte){
        case "1": result = "Urmatorul jucator sta o tura!"; break
        case "2": result = "Urmatorul jucator trage 2 carti!"; break
        case "3": result = "Urmatorul jucator trage 3 carti!"; break
        case "4": result = "Jucatorul anuleaza toate efectele acumulate!"; break
        case "7": result = "Jucatorul schimba tipul cartii!"; break
        default: result = "Aceasta carte nu face nimic!"; break
    }
    return result
}

function updateStatus(){
    let numarAfisat = table.lastChild.dataset.number
    numarAfisat = schimbaNumar(numarAfisat)

    let clasaAfisata = table.lastChild.firstElementChild.className
    clasaAfisata = schimbaTipul(clasaAfisata)

    info.innerHTML = `In pachet mai sunt ${setComplet.childElementCount} carti! <br>
    Pe masa sunt ${table.childElementCount} carti!`
    infoCarte.textContent = `Ultima carte de pe masa este un ${numarAfisat} de ${clasaAfisata}`

    infoMacaua.textContent = `${reguliMacaua(table.lastChild.dataset.number)}`
}

function alegeCarte(){
    let randomNumber = Math.ceil(Math.random() * setComplet.childElementCount)
    table.appendChild(setComplet.children[randomNumber - 1])

    // sa pun tot de jos intr-o functie?
    updateStatus()
}

function umpleMana(){ // functia sa verifice daca ambele maine sunt pline inainte sa imparta cartile
    let i = 0
    while(player2Hand.childElementCount < 5 && player1Hand.childElementCount <= 5){
        let randomNumber = Math.ceil(Math.random() * setComplet.childElementCount)
        if(i % 2 == 0){
            player1Hand.appendChild(setComplet.children[randomNumber-1])
        }
        else{
            player2Hand.appendChild(setComplet.children[randomNumber-1])
        }
        i++
    }
}

// list = [A,J,Q,K]
// if(1 || 11|| 12 || 13) => [A, J, Q, K]