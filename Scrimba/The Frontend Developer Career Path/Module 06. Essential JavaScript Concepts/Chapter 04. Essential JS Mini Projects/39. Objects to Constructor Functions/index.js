function Gamer(name) {
    this.name = name;
    this.score = 0;
    this.incrementScore = function () {
        this.score++;
    };
}

const dave = new Gamer('Dave');
const sarah = new Gamer('Sarah');
const kerry = new Gamer('Kerry');
dave.incrementScore();
sarah.incrementScore();
sarah.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
console.log(dave);
console.log(sarah);
console.log(kerry);




