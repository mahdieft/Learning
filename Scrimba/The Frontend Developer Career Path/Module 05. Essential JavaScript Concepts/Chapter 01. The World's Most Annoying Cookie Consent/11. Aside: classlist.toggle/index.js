const sortBtn = document.getElementById('sort-btn');
const container = document.getElementById('container');

sortBtn.addEventListener('click', () => {
    container.classList.toggle('reverse');
});
