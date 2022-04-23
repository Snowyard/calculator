const calculation = document.querySelector('.calculation'); 
let calcArray= new Array();

function toString(calcArray, text) {
    text = calcArray.toString();
    for(let i = 0; i < text.length; i++) {
        if(text[i]==',') {
            continue;
        } else {
            text += ;
        }
    }

    return text.textContent;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(parseInt(button.textContent)) {
            calcArray.push(parseInt(button.textContent));
            calculation.textContent = toString(calcArray, calculation);
            console.log(calcArray);
        } else {
            calcArray.push(button.textContent);
            calculation.textContent = toString(calcArray, calculation);
            console.log(calcArray);
        }
    });
})

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1/num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case add:

            break;

        case sub:

            break;

        case mult:

            break;

        case div:

            break;

        default:

            break;
    }
}