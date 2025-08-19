const film = 'Star Wars';

console.log(film.padStart(20));//'           Star Wars'
console.log(film.padStart(20, '*'));//'***********Star Wars'
console.log(film.padStart(20).length);//20
console.log(film.padEnd(20));//'Star Wars           '
console.log(film.padEnd(20, '*'));//'Star Wars***********'
console.log(film.padEnd(20).length);//20
console.log(film.repeat(20));//Star WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar WarsStar Wars