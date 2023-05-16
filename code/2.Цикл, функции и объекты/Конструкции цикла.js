let numbers = [123,2342,3423534,231,23234,5,34];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (const number of numbers) {
    console.log(number);
}

let user = {
    name: "имя пользователя",
    age: 30,
    gender: "мужской",
    height: 170,
}

for (const property in user) {
    console.log(property, user[property]);
}