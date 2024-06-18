import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const cars = [
    {
        brand: 'Nissan',
        model: 'Leaf',
        price: 3000,
        uuid: '4fb2b6b7-c7ee-4c80-8de1-390e89f43d7f',
    },
    {
        brand: 'Toyota',
        model: 'Prius',
        price: 6000,
        uuid: '82a13f62-d239-46a2-a94f-020189338e1a',
    },
];

cars.push({
    brand: 'Tesla',
    model: 'Model S',
    price: '🤦‍♂️',
    uuid: uuidv4(),
});

console.log(cars);
