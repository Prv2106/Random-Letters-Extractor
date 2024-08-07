




let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let extracted = [];

function extractor(){
    let i = getRandomIntInRange(alphabet.length);
    console.log('numero estratto',i);
    console.log('Lunghezza array pirma estrazione',alphabet.length);
    console.log('Lettera estratta',alphabet[i]);

    extracted.push(alphabet[i]);
    extracted_letter.textContent = alphabet[i];
    alphabet.splice(i,1);
    console.log('Lunghezza array dopo estrazione',alphabet.length);

    show_extracted.textContent = extracted;
    show_remaining.textContent = alphabet;
    e_label.classList.remove('hidden');
    remaining.classList.remove('hidden');    

    if(alphabet.length === 0){
        b_label.classList.add('hidden');
        button.classList.add('hidden');
    }
    
}

function getRandomIntInRange(max) {
    return Math.floor(Math.random() * max);
}
  


function Restart(){
    if(alphabet.length === 0){
        b_label.classList.remove('hidden');
        button.classList.remove('hidden');
    }
    extracted_letter.textContent = '';
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    show_remaining.textContent = alphabet;
    e_label.classList.add('hidden');
    remaining.classList.add('hidden');
}



let button = document.querySelector('#Extractor');
button.addEventListener('click',extractor);
let e_label = document.querySelector("#Extracted_label");
let b_label = document.querySelector("#button_label");
let remaining = document.querySelector("#remaining");
let extracted_letter = document.querySelector('#extractedLetter');
let show_extracted = document.querySelector('#extractedLetters');
let show_remaining = document.querySelector('#remainingLetters');
show_remaining.textContent = alphabet;

let restart = document.querySelector('#Restart');
restart.addEventListener('click',Restart);