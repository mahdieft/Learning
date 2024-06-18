const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

const adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);

const children = ages.filter(function (age) {
    return age < 18;
});

console.log(children);
