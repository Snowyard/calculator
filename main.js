// ensure proper input
const display = document.querySelector('.display'); 
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');

let num1 = '';
let num2 = '';
let operator = '';
let i = 0;

let input = [];

function displayText(value) {
  if(value != '=')
    display.textContent += value + '';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;

    // array is empty and new input is a number
    if(input.length == 0 && Number(value)) {
      input.push(num1);
      input[i] += value;
      displayText(value);
    }
    // if last input is number and new input is number
    else if((Number(input[input.length-1]) && Number(value)) || value == '0') {
      input[i] += value;
      displayText(value);
    }
    // if last input is a number and new input is an operator
    else if(Number((input[input.length-1])) && (!Number(value))) {
      if(input.length == 3 && value == '=') {
          input.push(operator);
          i++;
          input[i] += value;
          operate(input[0], input[1], input[2]);
          input.push(num2);
    }
      else if(input.length == 3) {
          input.push(operator);
          i++;
          input[i] += value;
          operate(input[0], input[1], input[2]);
          input.push(num2);
      }
      else if(!input[2] && value != '=') {
          input.push(num2);
          i++;
          input[i] += value;
          displayText(value);
          i++;
          input.push(num2);
      } else {
          displayText(value);
      }
    }
    // if last input is operator and new input is number
    else if(!Number(input[input.length-1]) && (Number(value))) {
      input[i] += value;
      displayText(value);
    }

    console.log(input);
    
  })
})

function operate(num1, operator, num2) {
  let answer = '';

  if(operator == '+') {
    answer =  add(Number(num1), Number(num2));
  }
  else if(operator == '-') {
    answer =  sub(Number(num1), Number(num2));
  }
  else if(operator == 'x') {
    answer =  mult(Number(num1), Number(num2));
  }
  else if(operator == '÷') {
    answer =  div(Number(num1), Number(num2));
  }

  if(input[input.length-1] == '=') {
    display.textContent = answer;
    input = [answer];
    i = 1;
    result.textContent = answer;
    console.log('HI');

  } else {
    input = [answer, input[input.length-1]];
    console.log(input);
    i = 2;
    num2 = '';

  }

  display.textContent = `${input[0]}${input[1]}`
  result.textContent = answer;

  return 0;
}

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function sub(num1, num2) {
  return Number(num1) - Number(num2);
}

function mult(num1, num2) {
  return Number(num1) * Number(num2);
}

function div(num1, num2) {
  return Number(num1)/Number(num2);
}