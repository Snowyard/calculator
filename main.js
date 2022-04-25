// add button value to display and array
function appendElement(array, button) {
    let str ='';
    array.push(button);
    str = array.toString().split(',').join('');
    return str;
}

// ensure proper input
let calcArray = [];
const display = document.querySelector('.display'); 
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        if((button.textContent == '=') && calcArray.length != 0) {
            result.textContent = calculate(calcArray);
        }
        else if(Number(calcArray[calcArray.length-1]) || (calcArray.length == 0 && parseInt(button.textContent))) {
            display.textContent = appendElement(calcArray, button.textContent);
        } 
        else if(!Number(calcArray[calcArray.length-1]) && parseInt(button.textContent)) {
            display.textContent = '' + appendElement(calcArray, button.textContent);
        }
    })
})

let digits = [];
let numbers = [];
let operators = [];
// takes input, returns array of numbers, and array of operators
function calculate(calcArray) {
  let str = calcArray.toString().split(',').join('');

  console.log(calcArray);

  for(let i = 0; i < str.length; i++) {
  	digits.push(str[i])
  	if(str[i]=='+' || str[i]=='-' || 
       str[i]=='÷' || str[i]=='x' ||
       str[i]=='=') {
       operators.push(str[i]);
       digits.splice(digits.length-1,1); // removes operator
       numbers.push((digits.toString().split(',').join('')).slice(numbers.toString().split(',').join('').length));
    }
    else if(i == str.length - 1) {
       numbers.push((digits.toString().split(',').join('')).slice(numbers.toString().split(',').join('').length));
    }
  }

  /////////////////////////////////////////////////////

  const result = function(numbers, operators) {
    for(let i = 0; i < operators.length; i++) {
      if(operators[i]=='+') {
        numbers[0] = add(numbers[0],numbers[1]);
        numbers.splice(1,1);
        console.log(numbers);
      }
      else if(operators[i]=='-') {
    		numbers[0] = sub(numbers[0],numbers[1]);
 			  numbers.splice(1,1);
  		  console.log(numbers);
			}
      else if(operators[i]=='x') {
        numbers[0] = mult(numbers[0],numbers[1]);
        numbers.splice(1,1);
        console.log(numbers);
        }
      else {
        numbers[0] = div(numbers[0],numbers[1]);
        numbers.splice(1,1);
        console.log(numbers);
        }
    }
    return numbers;
  }
  return result(numbers, operators).toString().split(',').join('');
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function sub(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function mult(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function div(num1, num2) {
    return parseInt(num1)/parseInt(num2);
}