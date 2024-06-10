let sentence = ['Hello', 'my', 'name', 'is', 'Mahdi'];
let greetingEl = document.getElementById('greeting-el');

// How do you keep the spaces between the words if I remove them from the array?
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + ' ';
}
