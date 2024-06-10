const revealBtn = document.getElementById('reveal-btn');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

revealBtn.addEventListener('click', function () {
    answer.style.display = 'block';
    question.style.backgroundColor = '#68e1fd';
    question.style.color = '#1434A4';
    revealBtn.style.display = 'none';
});
