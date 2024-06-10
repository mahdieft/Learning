const filmInput = document.getElementById('film-input');
const addBtn = document.getElementById('add-btn');
const filmList = document.getElementById('film-list');

addBtn.addEventListener('click', () => {
    const newFilm = document.createElement('div');
    newFilm.classList.add('film-item');
    newFilm.textContent = filmInput.value;
    filmList.appendChild(newFilm);
    filmInput.value = '';
});
