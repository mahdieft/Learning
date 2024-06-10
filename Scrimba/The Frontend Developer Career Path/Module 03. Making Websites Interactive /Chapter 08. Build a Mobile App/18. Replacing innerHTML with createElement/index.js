import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: '',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListEl = document.getElementById('shopping-list');

function clearInputField(inputField) {
    inputField.value = '';
}

function appendItemToShoppingList(item) {
    let itemID = item[0];
    let itemValue = item[1];

    let newEl = document.createElement('li');

    newEl.textContent = itemValue;

    shoppingListEl.append(newEl);
}

function clearShoppingListEl() {
    shoppingListEl.innerHTML = '';
}

onValue(shoppingListInDB, function (snapshot) {
    let itemsArray = Object.entries(snapshot.val());

    clearShoppingListEl();

    for (let i = 0; i < itemsArray.length; i++) {
        appendItemToShoppingList(itemsArray[i]);
    }
});

addButtonEl.addEventListener('click', function () {
    let inputValue = inputFieldEl.value;

    push(shoppingListInDB, inputValue);
    clearInputField(inputFieldEl);
});
