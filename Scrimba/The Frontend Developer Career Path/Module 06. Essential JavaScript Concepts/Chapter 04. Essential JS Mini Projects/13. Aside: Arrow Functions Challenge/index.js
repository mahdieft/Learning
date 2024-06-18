const speedWarning = (speedLimit, speed) => {
    if (speed > speedLimit) {
        return `You are going at ${speed} mph!`;
    }
};

console.log(speedWarning(60, 40));
