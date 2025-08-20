const users = [
	{ name: 'Vasia', age: 30 },
	{ name: 'Katia', age: 18 },
	{ name: 'Anna', age: 40 },
	{ name: 'Petia', age: 25 }
];

console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));

const users2 = [
	{
		name: 'Vasia',
		surname: 'Pupkin',
		age: 30,
		skills: ['Development', 'DevOps']
	},
	{
		name: 'Katia',
		surname: 'Belova',
		age: 18,
		skills: ['Design']
	}
];

const newUsers = users2.map(user => {
	return {
		fullName: `${user.name} ${user.surname}`,
		skillNum: user.skills.length
	};
}
);

console.log(newUsers);