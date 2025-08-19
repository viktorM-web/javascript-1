const userName = 'Vasya aka Terminator 3000 Pupkina';

const words = userName.split(' ');
console.log(`${words[0]} ${words[words.length - 1]}`);//Vasya Pupkina

const name1 = userName.slice(0, userName.indexOf(' '))
	+ userName.slice(userName.lastIndexOf(' '));
console.log(name1);//Vasya Pupkina