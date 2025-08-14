const users = ['Vasia', 'Masha', 'Katia', 'Ania'];

console.log(users);//['Vasia', 'Masha', 'Katia', 'Ania']
users.sort();
console.log(users);//['Ania', 'Katia', 'Masha', 'Vasia']

const operations = [100, -300, -100, 50, 50, 480];

console.log(operations);//[100, -300, -100, 50, 480]
operations.sort();
console.log(operations);//[-100, -300, 100, 480, 50]

operations.sort((a, b) => a - b);

console.log(operations);//[480, 100, 50, 50, -100, -300]