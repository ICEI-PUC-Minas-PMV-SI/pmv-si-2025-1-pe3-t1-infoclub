const words = [
    { word: "PHISHING", hint: "• É uma forma a qual os golpistas tentam enganar pessoas para que divulguem informações pessoais, como senhas, números de cartão de crédito ou dados bancários." },
    { word: "CATFISH", hint: "• É utilizado como uma fraude online na qual uma pessoa cria uma identidade falsa na internet para enganar outras pessoas, geralmente para relacionamentos românticos ou interpessoais." },
    { word: "WHATSAPP", hint: "• Envolve a clonagem de contas e a disseminação de mensagens falsas para enganar as pessoas e obter acesso a informações." },
    { word: "GOPIX", hint: "• É a criação de falsos anúncios em plataformas de compra e venda online." }
];

let selectedWord = "";
let selectedHint = "";
let correctLetters = [];
let wrongLetters = [];
let attempts = 6;

const wordContainer = document.querySelector('.word-container');
const hintElement = document.querySelector('.hint');
const wrongLettersElement = document.getElementById('wrong-letters');
const letterInput = document.getElementById('letter-input');
const submitButton = document.getElementById('submit-letter');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const restartButton = document.getElementById('restart');
const closeButton = document.querySelector('.close');
const hangmanImage = document.getElementById('hangman-image');

function startGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    selectedHint = words[randomIndex].hint;
    correctLetters = [];
    wrongLetters = [];
    attempts = 6;

    hintElement.textContent = `: ${selectedHint}`;
    hintElement.style.fontSize = '30px';
    wrongLettersElement.textContent = '';
    hangmanImage.src = `../../../assets/component/hangman0.png`;
    displayWord();
    popup.style.display = 'none';
}

function displayWord() {
    wordContainer.innerHTML = selectedWord
        .split('')
        .map(letter => (correctLetters.includes(letter) ? letter : '_'))
        .join(' ');
}

function updateWrongLetters() {
    wrongLettersElement.textContent = wrongLetters.join(', ');
}

function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'flex';
}

function checkGameOver() {
    const wordFromDisplay = wordContainer.textContent.replace(/\s/g, '');
    if (wordFromDisplay === selectedWord) {
        showPopup('Parabéns! Você ganhou!');
    } else if (attempts === 0) {
        showPopup(`Você perdeu! A palavra era: ${selectedWord}`);
    }
}

submitButton.addEventListener('click', () => {
    const letter = letterInput.value.toUpperCase();
    if (letter && !correctLetters.includes(letter) && !wrongLetters.includes(letter)) {
        if (selectedWord.includes(letter)) {
            correctLetters.push(letter);
            displayWord();
        } else {
            wrongLetters.push(letter);
            attempts--;
            hangmanImage.src = `../../../assets/component/hangman${6 - attempts}.png`;
            updateWrongLetters();
        }
    }
    letterInput.value = '';
    checkGameOver();
});

restartButton.addEventListener('click', startGame);

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

startGame();
