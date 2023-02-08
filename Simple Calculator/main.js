let a = ''; 
let b = ''; 
let sign = ''; 
let finish  = false;

let fn = '';
let sn = '';
let s = '';

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%'];

const out = document.querySelector('.calc-screen p');
const out2 = document.querySelector('.calc-screen p1');

function clearAll () {
    a = '';
    b = ''; 
    sign = ''; 
    finish = false;
    out.textContent = 0;
    out2.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

    if(!event.target.classList.contains('btn')) return;

    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;


    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            fn += key;
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b += key;
            sn += key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            sn += key;
            out.textContent = b;
        }
        console.table(a, b , sign);
        return;
    }

    
     if (action.includes(key)) {
        sign = key;
        s = key;
        out.textContent = sign;
        console.table(a, b , sign);
        return;
    }

    
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = '>:С';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "%":
                a = a % b;
                break
    }
            
        finish = true;
        out.textContent = 0;
        out2.textContent = a;
          const newP = document.createElement("p2");

          const newContent = document.createTextNode(`${fn} ${s} ${sn} = ${a}`);
          newP.appendChild(newContent);
          const otstup = document.createElement("br");
          newP.appendChild(otstup);
          const currentDiv = document.getElementById("hs").appendChild(newP);
          console.table(a, b , sign);
          a = '';
          sign = '';
          b = '';
          fn = '';
          sn = '';
          sign = '';
    }

}