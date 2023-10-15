console.log("js is ON");

//  1. Tworzenie div .calculator
let myCalculator = document.createElement("div")
myCalculator.className = "calculator"
document.body.appendChild(myCalculator)

//  2. Tworzenie div .screens
let screens = document.createElement("div")
screens.className = "screens"
myCalculator.appendChild(screens)

//  2.1 Tworzenie w  div .screens >>>>> .secondScreen
let secondScreenDiv = document.createElement("div")
secondScreenDiv.className = "second-screen"
secondScreenDiv.innerText = "0700"
screens.appendChild(secondScreenDiv)

//  2.2 Tworzenie w  div .screens >>>>> .main-screen
let mainScreenDiv = document.createElement("div")
mainScreenDiv.className = "main-screen"
mainScreenDiv.innerText = "11111111111111"
screens.appendChild(mainScreenDiv)


    


for ( let i = 1; i <= 18; i++) {
    let caculatorButton = document.createElement("button")
    myCalculator.appendChild(caculatorButton);
    caculatorButton.innerText = i;
    caculatorButton.className = "calc-nr"
    switch (i) {
        
        case 1: 
            caculatorButton.className = "clean-all column-dbl";
            caculatorButton.innerText = "AC";
            break;

        case 2:            
            caculatorButton.className = "del";
            caculatorButton.innerText = "Del";
            break;

        case 3: 
            caculatorButton.className = "operator";
            caculatorButton.innerText = "÷";
            break;

        case 4:            
            caculatorButton.innerText = "7";
            break;

        case 5:            
            caculatorButton.innerText = "8";
            break;

        case 6:            
            caculatorButton.innerText = "9";
            break;

        case 7:            
            caculatorButton.className = "operator";
            caculatorButton.innerText = "x";
            break;

        case 8:            
            caculatorButton.className = "calc-nr";
            caculatorButton.innerText = "4";
            break;

        case 9:            
            caculatorButton.innerText = "5";
            break;

        case 10:            
            caculatorButton.innerText = "6";
            break;

        case 11:            
            caculatorButton.className = "operator";
            caculatorButton.innerText = "-";
            break;

        case 12:            
            caculatorButton.innerText = "1";
            break;

        case 13:            
            caculatorButton.innerText = "2";
            break;

        case 14:            
            caculatorButton.innerText = "3";
            break;

        case 15:            
            caculatorButton.className = "operator";
            caculatorButton.innerText = "+";
            break;

        case 16:            
            caculatorButton.innerText = ",";
            break;

        case 17:
            caculatorButton.innerText = "0";
            break;

        case 18:
            caculatorButton.className = "equals column-dbl";
            caculatorButton.innerText = "=";
            break;
    
        default:
            break;
    }
}






// ----------------------------------------------------

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