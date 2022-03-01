'use strict'
// btn
const checkBtn = document.querySelector('.check')
const btnAgain = document.querySelector('.again')

const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')
const message = document.querySelector('.message')
const scoreEL = document.querySelector('.score')
const highScoreEl = document.querySelector('.highscore')

// random number between 1 to 20

let randomNum = Math.floor(Math.random()*20+1)
console.log(randomNum );
// score

let score = 20
let highScore = 0
let lowestScore = 0

// events
checkBtn.addEventListener('click', check)

btnAgain.addEventListener('click', again)

// function
function check() {
    const inputValue = +guessInput.value  
    
    if(inputValue) {
        if(inputValue == randomNum) {
            number.textContent = randomNum
            message.textContent = '🏆 You are Winner'
            document.body.style.background = 'green'
            randomNum = Math.floor(Math.random()*20+1)  
            console.log(randomNum);
            
            if(highScore < score) {
                highScore = score
                highScoreEl.textContent = highScore
            }
        } else {
            score--
            scoreEL.textContent = score
            document.body.style.background = '#222'
            message.textContent = '⬆️ Guess Higher Number'
        }

    } 
}

function again() {
    message.textContent = 'Start guessing ...'
    document.body.style.background = '#222'
    number.textContent = '?'
    randomNum = Math.floor(Math.random()*20+1)
    guessInput.value = ''
    score = 20
    scoreEL.textContent = '20'
    console.log(randomNum);
}
