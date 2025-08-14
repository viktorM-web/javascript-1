const prices = [[2, 4], [3, 4], [[10, 20], [40, 50]]];

let res = prices.flat();//prices.flat(1)
console.log(res);//[2 ,4 ,3, 4, Array(2), Array(2)]

res = prices.flat(2);
console.log(res);//[2 ,4 ,3, 4, 10, 20, 40, 50]

let res2 = prices.flatMap(el => el.concat(1));
console.log(res2);//[2 ,4, 1, 3, 4, 1, Array(2), Array(2), 1]