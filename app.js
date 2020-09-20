const output1 = document.querySelector('.screen .output1');
const output2 = document.querySelector('.screen .output2');
const output3 = document.querySelector('.screen .output3');
const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('#clear');

// Displaying the Operators (+ - * /);
operators.forEach(operator =>{
    operator.addEventListener('click',()=>{
         output2.innerText = operator.value;
        })
    });

// Displaying Numbers on the screen.
numbers.forEach(number =>{
    number.addEventListener('click',()=>{
        if(output2.innerText !== ''){
            output3.innerText += (+number.value);
        }else{
            output1.innerText += (+number.value);   
           }
    })
});

// Deleting the numbers from the screen.
clear.addEventListener('click', ()=>{
    output1.innerText = '';
    output2.innerText = '';
    output3.innerText = '';
});
// Geting the result of the operations.
function result(){
    if(output2.innerText === '+'){
        output1.innerText = +(output1.innerText) + +(output3.innerText);
        output2.innerText = '';
        output3.innerText = '';
    }else if(output2.innerText === '-'){
        output1.innerText = +(output1.innerText) - +(output3.innerText);
        output2.innerText = '';
        output3.innerText = '';
    }else if(output2.innerText === '*'){
        output1.innerText = +(output1.innerText) * +(output3.innerText);
        output2.innerText = '';
        output3.innerText = '';
    }else{
        output1.innerText = +(output1.innerText) / +(output3.innerText);
        output2.innerText = '';
        output3.innerText = '';
    }
}