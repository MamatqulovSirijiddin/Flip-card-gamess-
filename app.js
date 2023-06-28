let cards = document.querySelectorAll('.card')

function randomCard(){
    cards.forEach(card => {
        card.style.order = parseInt(Math.random() * cards.length)
    })
}
randomCard()

cards.forEach(card=> {
    card.addEventListener('click', flipCard)
})

let firstCard = null
let secondCard = null
let counter = 0


function flipCard() {

    counter++
    if ( counter > 2){
        counter = 1
    }
if(counter<=2){
    this.classList.add('flip')
    if(counter==1){
        firstCard = this
    }
    if(counter==2 && firstCard != this){
        secondCard = this
    }
}
if (secondCard) {
    if(firstCard.dataset.id == secondCard.dataset.id){
        counter = 0
        firstCard = null
        secondCard = null
        }
        else{
           setTimeout(unFlipCard, 1000)
        }

function unFlipCard(){
firstCard.classList.remove('flip')
secondCard.classList.remove('flip')
counter = 0
firstCard = null
secondCard = null
}
}
    
}
