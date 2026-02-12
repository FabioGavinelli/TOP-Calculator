let num1;
let num2;
let opertator;

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

    return num1 / num2;
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
        case `*`:
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