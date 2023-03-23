const { faker } = require('@faker-js/faker');
const fs = require('fs');

//set Tieng viet
faker.locale = 'vi'

//ramdom data
const createRamdom = (n) => {
    if (n <= 0) return [];
    const userList = [];
    Array.from(new Array(n)).forEach(() => {
        const user = {
            id: faker.datatype.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.datatype.number(100),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            jobTitle: faker.name.jobTitle(),
            company: faker.company.name(),
            website: faker.internet.url(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
            creditCardNumber: faker.finance.creditCardNumber(),
            creditCardIssuer: faker.finance.creditCardIssuer(),
            expirationDate: faker.finance.currencyCode(),
            cvv: faker.finance.creditCardCVV(),
            bitcoinAddress: faker.finance.bitcoinAddress(),
            routingNumber: faker.finance.routingNumber(),
            favoriteColor: faker.internet.color(),
            favoriteFood: faker.image.food(),
            favoriteMovie: faker.internet.color(),
            favoriteBook: faker.internet.color(),
            favoriteSong: faker.internet.color(),
            favoriteSport: faker.internet.color(),
            favoriteAnimal: faker.internet.color(),
            favoriteQuote: faker.internet.color(),
            aboutMe: faker.internet.color(),
            hobbies: faker.internet.color()
        };
        userList.push(user);
    });
    return userList;
}
(() => {
    const userList = createRamdom(1000);
    const db = {
        users: userList,
    };
    fs.writeFile('db.json', JSON.stringify(db), () => {
        console.log('Successfully created db.json');
    })
})();