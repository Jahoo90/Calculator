console.log("js is on");

let numbers = document.querySelectorAll(".calc-nr")
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
let addNumber = (calcNr) => {
    actualCalculation = actualCalculation.toString() + calcNr.toString(); 
}

numbers.forEach((calcNr) => {
    calcNr.addEventListener("click", () => {
        addNumber(calcNr.innerText)
        updateScore()
    })
})
