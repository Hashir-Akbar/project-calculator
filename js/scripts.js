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

dot.addEventListener('click', () => {
    input.value += '.'
})
reset.addEventListener('click', () => { 
    input.value = '';
})
divide.addEventListener('click', () => {
    input.value += '/';
})
percentage.addEventListener('click', () => {
    input.value += '%';
})
multiply.addEventListener('click', () => {
    input.value += '*';
})
minus.addEventListener('click', () => { 
    input.value += '-';
})
plus.addEventListener('click', () => {  
    input.value += '+';
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
equal.addEventListener('click', () => {
    let result;
    const values = input.value.split(/([-+*/%])/); // Split input value by operators
    if (values.length === 3) {
        const firstInput = Number(values[0]);
        const sign = values[1];
        const secondInput = Number(values[2]);
        const s = new Calculator(firstInput, sign, secondInput);
        
        switch (sign) {
            case '+':
                result = s.add();
                break;
            case '-':
                result = s.minus();
                break;
            case '*':
                result = s.multiply();
                break;
            case '/':
                result = s.divide();
                break;
            case '%':
                result = s.percentage();
                break;
            default:
                result = "Invalid operation";
        }
    } else {
        result = "Invalid input";
    }
    input.value = result;
});


console.log(s.add());
