let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let extracted = [];

function extractor() {
    let i = getRandomIntInRange(alphabet.length);
    console.log('numero estratto', i);
    console.log('Lunghezza array prima estrazione', alphabet.length);
    console.log('Lettera estratta', alphabet[i]);

    extracted.push(alphabet[i]);
    extracted_letter.textContent = alphabet[i];
    letterBox.classList.add('show');
    
    alphabet.splice(i, 1);
    console.log('Lunghezza array dopo estrazione', alphabet.length);

    document.querySelector('#remainingLetters span').textContent = alphabet.join(', ');
    document.querySelector('#extractedLetters span').textContent = extracted.join(', ');
    
    e_label.classList.remove('hidden');
    show_extracted.classList.remove('hidden');

    if (alphabet.length === 0) {
        b_label.textContent = "Premi Restart per ricominciare";
        button.classList.add('hidden');
        show_remaining.classList.add('hidden');
    }
}

function getRandomIntInRange(max) {
    return Math.floor(Math.random() * max);
}

function Restart() {
    if (alphabet.length === 0) {
        b_label.textContent = "Estrai una lettera";
        button.classList.remove('hidden');
        show_remaining.classList.remove('hidden');

    }
    extracted_letter.textContent = '';
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    document.querySelector('#remainingLetters span').textContent = alphabet.join(', ');
    e_label.classList.add('hidden');
    show_extracted.classList.add('hidden');
    extracted = [];
    letterBox.classList.remove('hidden');
    letterBox.classList.remove('show');
}

let button = document.querySelector('#Extractor');
button.addEventListener('click', extractor);
let e_label = document.querySelector("#Extracted_label");
let b_label = document.querySelector("#button_label");
let remaining = document.querySelector("#remaining");

let extracted_letter = document.querySelector('#extractedLetter');
let show_extracted = document.querySelector('#extractedLetters');
let show_remaining = document.querySelector('#remainingLetters');
document.querySelector('#remainingLetters span').textContent = alphabet.join(', ');

let letterBox = document.querySelector('#letterBox');
let restart = document.querySelector('#Restart');
restart.addEventListener('click', Restart);