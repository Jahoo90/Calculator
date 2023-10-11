console.log("js is on");

let numbers = document.querySelectorAll(".nr")
let operators = document.querySelectorAll(".operator")
let clean = document.querySelector(".clean-all")
let del = document.querySelector(".del")
let equals = document.querySelector(".equals")
let secondScreen = document.querySelector(".second-screen")
const mainScreen = document.querySelector(".main-screen")

// ----------- CALCULATIONS --------------

let actualCalculation = ""
let lastCalculation = ""
let operation = undefined

//  1. funkcja wprowadzania tekstu do ekranu
const updateScore = () => {
    mainScreen.innerText = actualCalculation
    secondScreen.innerText = lastCalculation
}

//  2. funkcja dodawania liczb do ekranu
let addNumber = (nr) => {
    actualCalculation = actualCalculation.toString() +nr.toString() 
}

numbers.forEach((nr) => {
    nr.addEventListener('click', () => {
        addNumber(nr.innerText)
        updateScore()
    })
})