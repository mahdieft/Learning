import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import {
    getDatabase,
    ref,
    push,
} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const firebaseConfig = {
    databaseURL: '',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, 'birthdays');

const birthdayInputField = document.getElementById('birthday-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function () {
    push(referenceInDB, birthdayInputField.value);
    birthdayInputField.value = '';
});
