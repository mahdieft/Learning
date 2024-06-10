'use strict';

const inputUnit = document.getElementById('unit');
const lengthParagraph = document.getElementById('length');
const volumeParagraph = document.getElementById('volume');
const massParagraph = document.getElementById('mass');
const errorMessageParagraph = document.querySelector('.error-message');

function validateInput() {
    return !isNaN(inputUnit.value);
}


function fixDecimalPoints(number) {
    return number.toFixed(2);
}

function convertLength(unit) {
    const meterToFeet = 3.28084;

    return {
        feet: fixDecimalPoints(unit * meterToFeet),
        meter: fixDecimalPoints(unit / meterToFeet),
    };
}

function convertVolume(unit) {
    const literToGallon = 0.264172;

    return {
        gallon: fixDecimalPoints(unit * literToGallon),
        liter: fixDecimalPoints(unit / literToGallon),
    };
}

function convertMass(unit) {
    const kiloToPound = 2.20462;

    return {
        pound: fixDecimalPoints(unit * kiloToPound),
        kilo: fixDecimalPoints(unit / kiloToPound),
    };
}

document.getElementById('convert').addEventListener('click', () => {
    if (!validateInput()) {
        errorMessageParagraph.style.display = 'block';
        return;
    }
    errorMessageParagraph.style.display = 'none';

    const unit = Number(inputUnit.value);

    const convertedLength = convertLength(unit);
    lengthParagraph.textContent = `${unit} meters = ${convertedLength['feet']} feet | ${unit} feet = ${convertedLength['meter']} meters`;

    const convertedVolume = convertVolume(unit);
    volumeParagraph.textContent = `${unit} liters = ${convertedVolume['gallon']} gallons | ${unit} gallons = ${convertedVolume['liter']} liters`;

    const convertedMass = convertMass(unit);
    massParagraph.textContent = `${unit} kilos = ${convertedMass['pound']} pounds | ${unit} pounds = ${convertedMass['kilo']} kilos`;
});
