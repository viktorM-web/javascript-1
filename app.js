const roles = ['user', 'admin', 'manager', 'superuser'];

const result = roles.slice(2);
console.log(roles);
console.log(result);//['manager', 'superuser']


const result2 = roles.slice(2, 3);
console.log(roles);
console.log(result2);//['manager']

const result3 = roles.slice(-1);
console.log(roles);
console.log(result3);//['superuser']

const result4 = roles.slice(1, -2);
console.log(roles);
console.log(result4);//['admin']

console.log(roles);//['user', 'admin', 'manager', 'superuser']

// const result5 = roles.splice(2);
// console.log(result5); // ['manager', 'superuser']
// console.log(roles); //['user', 'admin']

// const result5 = roles.splice(2, 1);
// console.log(result5); // ['manager']
// console.log(roles); //['user', 'admin', 'superuser']

// const result5 = roles.splice(-1);
// console.log(result5); // ['superuser']
// console.log(roles); //['user', 'admin', 'manager']

const result5 = roles.reverse();
console.log(result5);//['superuser', 'manager', 'admin', 'user']
console.log(roles); //['superuser', 'manager', 'admin', 'user']

const newRoles = ['sysadmin', 'developer'];
const result6 = roles.concat(newRoles);
console.log(result6);//['superuser', 'manager', 'admin', 'user', 'sysadmin', 'developer']
console.log(roles);
console.log(newRoles);