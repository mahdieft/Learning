'use strict';

const btnViewMore = document.getElementById('btn-view-more');
const divViewMore = document.getElementById('div-view-more');
const viewMoreBlogs = document.querySelectorAll('.blog-card-view-more');

btnViewMore.addEventListener('click', () => {
    viewMoreBlogs.forEach(blog => {
        blog.style.display = 'block';
        divViewMore.style.display = 'none';
    });
});
