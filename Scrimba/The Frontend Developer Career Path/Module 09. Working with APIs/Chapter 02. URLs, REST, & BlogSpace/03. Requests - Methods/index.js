'use strict';

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
    .then(res => res.json())
    .then(data => console.log(data))
