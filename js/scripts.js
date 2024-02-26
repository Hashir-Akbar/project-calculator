const reset = document.querySelector('.reset');
const plusMinus = document.querySelector('.plus-minus');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiply = document.querySelector('.multiply');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const minus = document.querySelector('.minus');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const dot = document.querySelector('.dot');
const zero = document.querySelector('.zero');
const del = document.querySelector('.del');
const equal = document.querySelector('.equal');





class Calculator {
    constructor(firstInput, sign, secondInput) {
        this.firstInput = firstInput;
        this.sign = sign;
        this.secondInput = secondInput;
    }

    log(){
        console.log(this.firstInput, this.sign, this.secondInput);
    }
    add(){
        if(this.sign === '+'){
         return this.firstInput + this.secondInput;
        }
    }
    minus(){
        if(this.sign === '-'){
         return this.firstInput - this.secondInput;
        }
    }
    multiply(){
        if(this.sign === '*'){
         return this.firstInput * this.secondInput;
        }
    }
    divide(){
        if(this.sign === '/'){
         return this.firstInput / this.secondInput;
        }
    }
    percentage(){
        if(this.sign === '%'){
         return this.firstInput % this.secondInput;
        }
    }
  

}

let s = new Calculator(5, '+', 5);
console.log(s.add())