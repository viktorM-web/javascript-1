const projectName = 'Site store';
const price = 2000;
const author = 'Vasilii Pupcin';

const template = author + ' order ' + projectName + ' by price ' + price;
console.log(template);

const template2 = `${author} order ${projectName} by price ${price}`;
console.log(template2);

const template3 = 'Project \n' + 'Price: ' + price + '$';
console.log(template3);

const template4 = `Project
Price: ${price}$`;

console.log(template4);