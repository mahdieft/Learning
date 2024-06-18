function checkUsername(userName) {
    if (userName) {
        console.log(userName);
    } else {
        console.log('I execute');
        throw new Error('No username provided');
    }
}

checkUsername();
