const age = '18';
console.log(age + 5);//185
console.log(Number(age) + 5);//23
console.log(age * 3);//54
const userName = 'Vasia';
console.log(Number(userName) + 5);//NaN
console.log(typeof NaN);//number
console.log(String(4) + 7);//47
console.log(Boolean('') + 10);//10
console.log(Boolean('dhgsfhsdgf') + 10);//11
console.log(true + 10);//11

const a = 2 + '10';
console.log(a - 10);//200

//False from other type

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number('fdff')));
console.log(Boolean(NaN));