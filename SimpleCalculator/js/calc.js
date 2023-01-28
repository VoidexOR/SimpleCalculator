var a = '';
var b = '';
var sign = '';
var finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0
}
document.querySelector('.c').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // not button
    if(!event.target.classList.contains('btn')) return;
    // "Clear all" button
    if(event.target.classList.contains('c')) return;
    
    out.textContent = ''
    // Getting pressed button
    const key = event.target.textContent;
    
    // if pressed 0-9
    if (digit.includes(key)) {
        a += key;
        console.log(a, b, sign);
    }
}