'use strict';

const formColorPicker = document.getElementById('frm-color-picker');
const colorSeed = document.getElementById('seed');
const colorScheme = document.getElementById('scheme');
const colorContainer = document.getElementById('color-container');

const BASE_URL = 'https://www.thecolorapi.com/scheme?';
const DEFAULT_COLOR_COUNT = 5;
const DEFAULT_SEED = 'F55A5A';
const DEFAULT_SCHEME = 'monochrome';

const getColorScheme = (seed = DEFAULT_SEED, scheme = DEFAULT_SCHEME, count = DEFAULT_COLOR_COUNT) => {
    const url = `${BASE_URL}hex=${seed.replace('#', '')}&mode=${scheme.toLowerCase()}&count=${count}`;
    fetch(url)
        .then(response => response.json())
        .then(colorScheme => {
            renderColorScheme(colorScheme.colors);
        });
};

const createColorSectionHtml = (color) => {
    return `
        <section class="color-section" data-color-code=${color.hex.value}>
            <div class="color-stripe"><img src="${color.image.bare}" alt="${color.name.value}"></div>
            <div class="color-hex"><p>${color.hex.value}</p></div>
        </section>
    `;
};

const renderColorScheme = (colorScheme, container) => {
    let html = '';
    colorScheme.forEach(color => {
        html += createColorSectionHtml(color);
    });
    colorContainer.innerHTML = html;

    const colorSections = document.querySelectorAll('.color-section');
    colorSections.forEach(colorSection => {
        colorSection.addEventListener('click', e => {
            navigator.clipboard.writeText(e.target.parentNode.parentNode.dataset.colorCode);
        });
    });
};

formColorPicker.addEventListener('submit', (e) => {
    e.preventDefault();
    getColorScheme(colorSeed.value, colorScheme.value);
});

getColorScheme();
