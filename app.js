const users = ['Anna', 'Vika', 'Katia'];
console.log(users);
users[2] = 'Kristina';
console.log(users);
users[4] = 'Nikita';
console.log(users);//['Anna', 'Vika', 'Kristina', empty, 'Nikita']

const arrayLength = users.push('Evgenii');
console.log(users);
console.log(arrayLength);

console.log(users.unshift('Vasia'));
console.log(users);

const lastElement = users.pop();
console.log(lastElement);
console.log(users);

const firstElement = users.shift();
console.log(firstElement);
console.log(users);