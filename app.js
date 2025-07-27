const isAdmin = false;
const canWrite = true;

console.log(`System file ${isAdmin && canWrite}`);
console.log(`Usual file ${isAdmin || canWrite}`);
console.log(`Invert administrator access ${!isAdmin}`);

const isEdited = true;
const isSupperAdmin = false;

console.log(`System file with editing ${isAdmin && canWrite && (!isEdited || isSupperAdmin)}`);

console.log('Vasia' || 'Oleg');//Vasia
console.log(false || 'Oleg');//Oleg
console.log('Vasia' || false);//Vasia
console.log(false || false);//false

console.log('Vasia' && 'Oleg');//Oleg
console.log(false && 'Oleg');//false
console.log('Vasia' && false);//false
console.log(false && false);//false

let a;
console.log(a || 'Petia');//Petia
a = 'Marina';
console.log(a || 'Petia');//Marina

const isAdmin1 = true;
console.log(isAdmin1 && 'File.mp4');//File.mp4

let username = '';
console.log(username || 'Default Username');//Default Username
console.log(username ?? 'Default Username');//""

let age = 0;
console.log(age || 18);//18
console.log(age ?? 18);//0