const imgs = [
    'images/hip1.jpg',
    'images/hip2.jpg',
    'images/hip3.jpg',
];

const container = document.getElementById('container');

function renderImages() {
    let imgsDOM = '';
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
    }
    container.innerHTML = imgsDOM;
}

renderImages();
