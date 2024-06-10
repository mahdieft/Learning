'use strict';

const home_score = document.getElementById('home-score');
const guest_score = document.getElementById('guest-score');
const score_buttons = document.querySelectorAll('.btn-add-score');

score_buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const button = event.target;
        switch (button.dataset.team) {
            case 'home':
                home_score.textContent = (parseInt(home_score.textContent) + parseInt(button.dataset.score)).toString();
                break;
            case 'guest':
                guest_score.textContent = (parseInt(guest_score.textContent) + parseInt(button.dataset.score)).toString();
                break;
        }
    });
});


const new_game = document.getElementById('new-game');
new_game.addEventListener('click', () => {
    home_score.textContent = '0';
    guest_score.textContent = '0';
});
