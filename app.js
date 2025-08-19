const userFullName = 'Vasia Pupkin Ivanovich';
console.log(userFullName.split(' '));
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);//Vasia
console.log(familyName);//Pupkin
console.log(lastName);//Ivanovich

const arr = ['You', 'know', 'JS'];
console.log(arr.join(' '));//You know JS