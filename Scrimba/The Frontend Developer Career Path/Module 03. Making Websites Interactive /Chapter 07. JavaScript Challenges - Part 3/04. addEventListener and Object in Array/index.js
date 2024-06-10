let data = [
    {
        player: 'Jane',
        score: 52,
    },
    {
        player: 'Mark',
        score: 41,
    },
];

const janeBtn = document.getElementById('jane-btn');

janeBtn.addEventListener('click', function () {
    console.log(data[0].score);
});
