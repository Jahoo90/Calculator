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

let calculate = () => {
    let calculation 
    if (!lastCalculation ||! actualCalculation) {
        return
    }
    let last = parseFloat(lastCalculation)
    let actual = parseFloat(actualCalculation)

    if(isNaN(last) || isNaN(actual)){
        return
    }

    switch (operation) {
        case "+":
            calculation = last + actual
            break;
        case "-":
            calculation = last - actual
            break;
        case "×":
            calculation = last * actual
            break;
        case "÷":
            calculation = last / actual
            if (actual === 0) {
                alert("ERROR!!!")
                return
            }
            break;
        default:
            return;
        }

    actualCalculation = calculation
    operation = undefined 
    lastCalculation = ""

}





let selectOperation = (operator) => {
    if (actualCalculation === "") {
        return
    }
    if (lastCalculation !==""){
        calculate()
    }
    operation = operator
    lastCalculation = actualCalculation
    actualCalculation = " "
}




//  1. funkcja wprowadzania tekstu do ekranu
const updateScore = () => {
    mainScreen.innerText = actualCalculation
    if (operation != null) {
        secondScreen.innerText = lastCalculation + operation
    }else {
        secondScreen.innerText = ''
    }
    
}

//  2. funkcja dodawania liczb do ekranu
let addNumber = (calcNr) => {
    if (calcNr === ",") {
        if (actualCalculation.includes(",")) {
            return;
        }
        calcNr = ","
    }
    actualCalculation = actualCalculation.toString() + calcNr.toString(); 
}

let deleteNr = () => {
    actualCalculation = actualCalculation.toString().slice(0, -1)
}

numbers.forEach((calcNr) => {
    calcNr.addEventListener("click", () => {
        addNumber(calcNr.innerText)
        updateScore()
    })
})

del.addEventListener('click', () => {
    deleteNr()
    updateScore()
})

let cleanAll = () => {
    actualCalculation = " "
}
clean.addEventListener('click', () =>{
    cleanAll()
    updateScore()
} )

let cleanScore = () => {
    actualCalculation = ""
    lastCalculation = ""
    operation = undefined
}

operators.forEach((operator) =>{
    operator.addEventListener('click', () => {
        selectOperation(operator.innerText)
        updateScore()
    })
})

equals.addEventListener("click", () => {
    calculate()
    updateScore()
    
})

clean.addEventListener('click', () => {
    cleanScore()
    updateScore()
})



