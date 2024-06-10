'use strict';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?', '/'];

const useDigitsCheckBox = document.getElementById('digits');
const useSymbolsCheckBox = document.getElementById('symbols');
const passwordLengthInput = document.getElementById('length');
const errorMessageParagraph = document.querySelector('.error');
const password1Paragraph = document.getElementById('password_1');
const password2Paragraph = document.getElementById('password_2');
const passwordCopiedMessageParagraph = document.querySelector('.password-copied-message');

function validatePasswordLength() {
    return !(!passwordLengthInput.value ||
        isNaN(passwordLengthInput.value) ||
        passwordLengthInput.value < 6 ||
        passwordLengthInput.value > 20);
}

function getCharactersToUse() {
    let charactersToUse = [...letters];

    if (useDigitsCheckBox.checked) {
        charactersToUse.push(...digits);
    }

    if (useSymbolsCheckBox.checked) {
        charactersToUse.push(...symbols);
    }

    return charactersToUse;
}

function generatePassword(charactersToUse) {
    let password = [];
    let usedCharacters = [];
    let randomCharacter;

    for (let i = 1; i <= passwordLengthInput.value; i++) {
        do {
            randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
        } while (usedCharacters.includes(randomCharacter));

        usedCharacters.push(randomCharacter);
        password.push(randomCharacter);
    }

    return password;
}


document.getElementById('generate-password').addEventListener('click', () => {
    const charactersToUse = getCharactersToUse();

    if (!validatePasswordLength()) {
        errorMessageParagraph.style.display = 'block';
        return;
    }

    errorMessageParagraph.style.display = 'none';

    password1Paragraph.textContent = generatePassword(charactersToUse).join('');
    password2Paragraph.textContent = generatePassword(charactersToUse).join('');
});

document.querySelectorAll('p.password').forEach((paragraph) => {
    paragraph.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.textContent);

        passwordCopiedMessageParagraph.style.display = 'block';

        setTimeout(() => {
            passwordCopiedMessageParagraph.style.display = 'none';
        }, 3000);
    });
});
