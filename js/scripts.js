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

const input = document.querySelector('.input')



seven.addEventListener('click', () => {
    input.value += 7;
})
eight.addEventListener('click', () => { 
    input.value += 8;   
})
nine.addEventListener('click', () => {
    input.value += 9;
})

del.addEventListener('click', () => {   
    input.value = input.value.slice(0, -1);
})
six.addEventListener('click' , () => {
       input.value += 6;
})
five.addEventListener('click', ()=>{
    input.value += 5
})
four.addEventListener('click', () => {
    input.value += 4
})
three.addEventListener('click' , () =>{
    input.value += 3
})
two.addEventListener('click', () =>{
    input.value += 2
})
one.addEventListener('click', () => {
    input.value += 1
})
zero.addEventListener('click', ()=>{
    input.value += 0
})




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