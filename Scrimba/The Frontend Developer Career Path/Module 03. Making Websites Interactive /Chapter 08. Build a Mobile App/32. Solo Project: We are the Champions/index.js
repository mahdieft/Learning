'use strict';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: 'https://scrimba-playground-mahdi-default-rtdb.firebaseio.com/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const championsInDB = ref(database, 'Champions');

const endorsementEl = document.getElementById('endorsement');
const fromEl = document.getElementById('from');
const toEl = document.getElementById('to');
const endorsementsDiv = document.getElementById('endorsements');

const errorEl = {
    endorsementError: document.getElementById('endorsement_error'),
    fromError: document.getElementById('from_error'),
    toError: document.getElementById('to_error'),
};

function validateForm() {
    const error = {};
    if (endorsementEl.value === '') {
        error.endorsementError = true;
    }

    if (fromEl.value === '') {
        error.fromError = true;
    }

    if (toEl.value === '') {
        error.toError = true;
    }

    return error;
}

function displayErrors(errors) {
    for (let element of Object.keys(errors)) {
        errorEl[element].style.display = 'block';
    }
}

function clearErrors() {
    for (let element of Object.keys(errorEl)) {
        errorEl[element].style.display = 'none';
    }
}

function storeInDB() {
    const dataToStore = {
        endorsement: endorsementEl.value,
        from: fromEl.value,
        to: toEl.value,
        likes: Math.floor(Math.random() * 100) + 1,
    };
    push(championsInDB, dataToStore);
}

function clearInputFields() {
    endorsementEl.value = '';
    fromEl.value = '';
    toEl.value = '';
}

document.getElementById('publish').addEventListener('click', () => {
    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
        displayErrors(errors);
        return;
    }

    clearErrors();
    storeInDB();
    clearInputFields();
});

onValue(championsInDB, (snapshot) => {
    if (!snapshot.exists()) {
        return;
    }
    let divContent = '';
    Object.values(snapshot.val()).forEach((endorsement) => {
        divContent = `
        <div class="card">
            <h3>To ${endorsement.to}</h3>
            <p>${endorsement.endorsement}</p>
            <div class="signature">
                <h3>From ${endorsement.from}</h3>
                <p class="heart"><span id="like">🖤</span>&nbsp;<span id="count">${endorsement.likes}</span></p>
            </div>
        </div>
       ` + divContent;
    });
    endorsementsDiv.innerHTML = divContent;
});
