const usersArray = [
    {
        userName: 'Tom',
        password: '123456',
    },
];

const userObj = usersArray[0];

userObj.userName = 'Wayne';

console.log(usersArray);
console.log(userObj);
