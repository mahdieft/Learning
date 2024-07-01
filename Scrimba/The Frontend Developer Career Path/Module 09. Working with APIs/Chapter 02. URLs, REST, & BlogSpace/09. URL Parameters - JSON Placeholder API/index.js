'use strict';

fetch('https://apis.scrimba.com/jsonplaceholder/posts/2/comments/1')
    .then(res => res.json())
    .then(data => console.log(data));
