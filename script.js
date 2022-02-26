'use strict'
// btn
const checkBtn = document.querySelector('.check')
const btnAgain = document.querySelector('.again')

const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')
const message = document.querySelector('.message')
const labelScore = document.querySelector('.score')
const labelHighScore = document.querySelector('.highscore')
const bgGreen = document.querySelector('.container')

// random number between 1 to 20

const randomNum = Math.floor(Math.random()*20+1)

// score

let score = 20
let highScore = 0

// events
checkBtn.addEventListener('click', check )

btnAgain.addEventListener('click', again)

// function
function check() {
    const checkValue = +guessInput.value
    console.log(randomNum);
    if(checkValue) {
        if(randomNum == checkValue) {
            message.textContent = '🏆 You are Winner'
            bgGreen.style.background = 'green'
            number.textContent = randomNum
            // randomNum = Math.floor(Math.random()*20+1)
        } else if(randomNum >=checkValue) {
            message.textContent = '⬆️ Guess Higher Number'
            score--
        }
    } else if(randomNum <= checkValue) {
        message.textContent = '⬇️ Guess Lower Number'
        score--
    }
    labelScore.textContent = score
    labelHighScore.textContent = score
}

function again() {
    window.location.reload()
}
