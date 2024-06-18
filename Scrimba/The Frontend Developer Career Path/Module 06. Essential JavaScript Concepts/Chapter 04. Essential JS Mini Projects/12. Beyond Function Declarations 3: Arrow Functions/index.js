const getSpendAlert = amount => {
    if (amount > 50) {
        return `Warning! You just spent £${amount}!`;
    }
};

console.log(getSpendAlert(100));
