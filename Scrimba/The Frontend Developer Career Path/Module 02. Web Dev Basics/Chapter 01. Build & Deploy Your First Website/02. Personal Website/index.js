// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre('fantasy');

// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit('blueberry');

// light, dark
favouriteMode('light');

// sharp, soft, round
favouriteEdgeStyle('round');

function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value);
}

function favouriteEdgeStyle(style) {
    setProp('--image', 'var(--' + style + ')');
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp('--font', 'var(--' + font + ')');
    }
}

function favouriteMode(mode) {
    if (mode === 'light' || !mode) {
        setProp('--background', 'var(--light)');
        setProp('--text', 'var(--dark)');
    } else if (mode === 'dark') {
        setProp('--background', 'var(--dark)');
        setProp('--text', 'var(--light)');
    }
}

function favouriteFruit(theme) {
    if (theme === 'pastel') {
        setProp('--light', '#F2F6C3');
        setProp('--dark', '#68C4AF');
    } else if (theme === 'muted') {
        setProp('--light', '#4C5B64');
        setProp('--dark', '#45241C');
    } else if (theme === 'love') {
        setProp('--light', '#F06836');
        setProp('--dark', '#BA0001');
    } else if (theme === 'sky') {
        setProp('--light', '#99CCFF');
        setProp('--dark', '#3366FF');
    } else if (theme === 'forrest') {
        setProp('--light', '#91B247');
        setProp('--dark', '#597C2B');
    } else if (theme === 'shiny') {
        setProp('--light', '#2E9AFE');
        setProp('--dark', '#02197C');
    } else if (theme === 'banana') {
        setProp('--light', '#FBEC5D');
        setProp('--dark', '#6B3E26');
    } else if (theme === 'watermelon') {
        setProp('--light', '#75B855');
        setProp('--dark', '#AD3838');
    } else if (theme === 'tomato') {
        setProp('--light', '#D62E2E');
        setProp('--dark', '#600000');
    } else if (theme === 'avocado') {
        setProp('--light', '#6B8C21');
        setProp('--dark', '#704012');
    } else if (theme === 'orange') {
        setProp('--light', '#FFCA16');
        setProp('--dark', '#F97300');
    } else if (theme === 'blueberry') {
        setProp('--light', '#41A8F9');
        setProp('--dark', '#064490');
    } else {
        setProp('--light', '#F5F5F5');
        setProp('--dark', '#222222');
    }
}
