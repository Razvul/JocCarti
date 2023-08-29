function allowDrop(ev){
    if(ev.target != ev.currentTarget) // sa nu faca drop pe o alta carte
        return 
    ev.preventDefault() // ci-i asta?
}
function drag(ev){ // type = text, value = id
    ev.dataTransfer.setData("text", ev.target.id) // ci-i asta? sets the data type and the value of the dragged data
}//
function drop(ev){
    ev.preventDefault()//CAUTA
    var data = ev.dataTransfer.getData("text") //obtine id-ul elementului folosit ca argument/target?  CAUTA
    ev.target.appendChild(document.getElementById(data)) // foloseste id-ul elementului tinta? CAUTA
}
//document.getElementById("cimitir").appendChild(document.getElementById("a-inima"))

// 1. functie care muta un set intr-o alta destinatie   Rezolvat
// 1.1. div-urile sa tina elementele pe mai multe randuri   Rezolvat
// 2. 1. dar sa fie random  Rezolvat
// 3. de mutat toate cartile in paket, random Rezolvat

// 4. css grid si data attribute de cautat
// 5. de contruit "lupta"


const setComplet = document.getElementById("set-complet")

const cimitir1 = document.getElementById("player1-cimitir")
const cimitir2 = document.getElementById("player2-cimitir")

const cimitir = document.getElementById("cimitir")

const tableContainer = document.getElementById("table-container")

const table1 = document.getElementById("table1")
const table2 = document.getElementById("table2")

const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")

const player1Hand = document.getElementById("player1-hand")
const player2Hand = document.getElementById("player2-hand")

const scorPlayer1 = document.getElementById("scor-player1")
const scorPlayer2 = document.getElementById("scor-player2")

const finalScore = document.getElementById("final-score")
const drawCount = document.getElementById("draw")

const player1Sum = document.getElementById("player1-sum")
const player2Sum = document.getElementById("player2-sum")


function mutaSet(setId, destinatieId){
    const set = document.getElementById(setId)
    const destinatie = document.getElementById(destinatieId)

    let firstChild = set.firstChild
    destinatie.appendChild(firstChild)
}
//meta = informatii care nu sunt vizibile utilizatorilor

function mutaRandom(){
    let randomNumber = Math.ceil(Math.random() * setComplet.childElementCount)
     // selectez al n-lea copil din set
    // scot al n-lea copil din set
    paket.appendChild(setComplet.children[randomNumber-1])
    // randomNumber sa fie mai mic decat numarul de copii la un moment dat
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

function alegeCarti(){
    if(player1Hand.childElementCount === 0 || player2Hand.childElementCount === 0)
        return
    else if(table1.childElementCount === 1 && table2.childElementCount === 1)
        return
    else{
        let randomNumber1 = Math.ceil(Math.random() * player1Hand.childElementCount)
        let randomNumber2 = Math.ceil(Math.random() * player2Hand.childElementCount)
    
        tableContainer.children[1].children[0].appendChild(player1Hand.children[randomNumber1-1])
        tableContainer.children[1].children[1].appendChild(player2Hand.children[randomNumber2-1])
    }
}

let scor1 = 0
let scor2 = 0
let draws = 0
let suma1 = 0
let suma2 = 0


function comparaCarti(){
    if(table1.childElementCount === 0 || table2.childElementCount === 0) return

    else{
        const player1CurrentHand = table1.children[0]
        const player2CurrentHand = table2.children[0]
        
        if(+player1CurrentHand.dataset.number > +player2CurrentHand.dataset.number){
            player1.children[3].appendChild(player1CurrentHand) // winner card
            cimitir.appendChild(player2CurrentHand) // loser card

            scor1++
            scorPlayer1.textContent = scor1

            suma1 += Number(player1CurrentHand.dataset.number)
            player1Sum.textContent = `Suma totala este ${suma1}`
    
        }
        else if(+player1CurrentHand.dataset.number < +player2CurrentHand.dataset.number){
            player2.children[3].appendChild(player2CurrentHand)
            cimitir.appendChild(player1CurrentHand)

            scor2++
            scorPlayer2.textContent = scor2
            
            suma2 += Number(player2CurrentHand.dataset.number)
            player2Sum.textContent = `Suma totala este ${suma2}`
        }
        else{
            cimitir.appendChild(player1CurrentHand)
            cimitir.appendChild(player2CurrentHand)
            draws++
        }
    
        if(setComplet.childElementCount === 0 && player1Hand.childElementCount === 0 && player2Hand.childElementCount === 0){
            if(scor1 > scor2){
                finalScore.textContent = `Player 1 is the winner with ${scor1} points!`
            }
            else if(scor1 < scor2){
                finalScore.textContent = `Player 2 is the winner with ${scor2} points!`
            }
            else{
                finalScore.textContent = "We have a draw!"
            }
            drawCount.textContent = `Number of draws: ${draws}.`
        }
    }
}

function adunaCartile(){ // sa fie disabled in timpul jocului
    if(setComplet.childElementCount === 0){
        while(cimitir1.childElementCount){
            setComplet.appendChild(cimitir1.firstElementChild)
        }
        while(cimitir2.childElementCount){
            setComplet.appendChild(cimitir2.firstElementChild)
        }
        while(cimitir.childElementCount){
            setComplet.appendChild(cimitir.firstElementChild)
        }

        scor1 = scor2 = draws = suma1 = suma2 = 0

        scorPlayer1.textContent = scor1
        player1Sum.textContent = `Suma totala este ${suma1}`

        scorPlayer2.textContent = scor2
        player2Sum.textContent = `Suma totala este ${suma2}`

        drawCount.textContent = `Number of draws: ${draws}.`

        /*for(let i = 0; i < cimitir1.childElementCount; i++){
            setComplet.appendChild(cimitir1.firstElementChild)
        }
        for(let i = 0; i < cimitir2.childElementCount; i++){
            setComplet.appendChild(cimitir2.firstElementChild)
        }
        for(let i = 0; i < cimitir.childElementCount; i++){
            setComplet.appendChild(cimitir.firstElementChild)
        }*/
    }
    else    return
} // div-ul set-complet sa ramana static


/*
2 lion <-
1 lion ->
2 lion -<
1 lion ->
2 wildabeast <-
1 lion 1 wildabest ->
2 wildabeast <-
1 lion ->
2 lion <-
1 lion ->
2 lion <-
*/