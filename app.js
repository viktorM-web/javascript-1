const userName = 'Vasya Pupkina';

console.log(userName.includes('a'));//true
console.log(userName.startsWith('V'));//true
console.log(userName.endsWith('na'));//true

console.log(userName.toLowerCase());//vasya pupkina
console.log(userName.toUpperCase());//VASYA PUPKINA
console.log(userName.replace('V', 'W'));//Wasya Pupkina
console.log(userName.replace('P', 'Z'));//Vasya Zupkina

console.log(userName.replace('a', 'i'));//Visya Pupkina
console.log(userName.replaceAll('a', 'i'));//Visyi Pupkini
console.log(userName.replace(/a/g, 'i'));//Visyi Pupkini

const str = '	dfdfd dfdf \n';
console.log(str.trim());//dfdfd dfdf
