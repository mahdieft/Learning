const playerGuess = 9;
const correctAnswer = 6;

const message = playerGuess < correctAnswer ? 'Too low!'
                                            : playerGuess > correctAnswer ? 'Too high!'
                                                                          : 'Exactly right!';

console.log(message);
