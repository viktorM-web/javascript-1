const userName = 'Vasya Pupkina';

console.log(userName);//'Vasya Pupkina'
console.log(userName[0] + userName[6]);//'VP'
console.log(userName.charAt(6));//'P'

console.log(userName.length);//13
console.log(userName.indexOf('u'));//7
console.log(userName.indexOf('upk'));//7
console.log(userName.indexOf('upp'));//-1

console.log(userName.lastIndexOf('a'));//12

console.log(userName.slice(5));//'Pupkina'
console.log(userName.slice(7, 9));//up'