const isAdmin = false;
const canWrite = true;

console.log(`System file ${isAdmin && canWrite}`);
console.log(`Usual file ${isAdmin || canWrite}`);
console.log(`Invert administrator access ${!isAdmin}`);

const isEdited = true;
const isSupperAdmin = false;

console.log(`System file with editing ${isAdmin && canWrite && (!isEdited || isSupperAdmin)}`);