let num1 = null;
let num2 = null;
let operator = "";
let displaingResult = false;

function sum (num1, num2) {
    return num1 + num2;
}

function sub (num1, num2) {
    return num1 - num2;
}

function mul (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    if(num2 === 0)
        return "ERROR";

    return (num1 / num2).toFixed(2);
}

function operate(num1, num2, opertator){
    let result = null;

    switch(opertator){
        case `+`:
            result = sum(num1, num2);
            break;
        case `-`:
            result = sub(num1, num2);
            break;
        case `x`:
            result = mul(num1, num2);
            break;
        case `/`:
            result = div(num1, num2);
            break;
        default:
            result = `Operation (${opertator}) not valid`
            break;
    }

    return result;
}

let display = document.querySelector("#display");

let dotPressed = false;

let numberBtns = document.querySelectorAll(".num");
numberBtns.forEach((button) => {

    button.addEventListener("click", (event) => {
        if(displaingResult){
            display.value = "";
            displaingResult = false;
        }

        display.value += event.target.textContent;
    })

})

let dotBtn = document.querySelector(".dot");
dotBtn.addEventListener("click", (event) => {
    if(display.value.includes("."))
        return;

    display.value += event.target.textContent;
})

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    display.value = "";
    reset();
})

let operationBtns = document.querySelectorAll(".op");
operationBtns.forEach((button) => {

    button.addEventListener("click", (event) => {
        if(display.value === ""){
            operator = event.target.textContent;
            return;
        }

        if(num1 === null){
            num1 = parseFloat(display.value);
            display.value = "";
        }else{
            num2 = parseFloat(display.value);
            num1 = operate(num1, num2, operator);
            displaingResult = true;
            display.value = num1;
            num2 = null;
        }

        operator = event.target.textContent;
    })

})

let equalBtn = document.querySelector("#btnEqual");
equalBtn.addEventListener("click", (event) => {
    if(operator === ""){
        display.value = num1;
        return;
    }

    if(num2 === null){
        num2 = parseFloat(display.value);
    }

    if(num1 !== null && num2 !== null){
        display.value = operate(num1, num2, operator);
        displaingResult = true;
    }

    reset();
})

function reset() {
    num1 = null;
    num2 = null;
    operator = "";
}