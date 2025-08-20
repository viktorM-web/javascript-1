const user = {
	name: 'Vasia',
	surname: 'Pupkin',
	age: 24,
	skills: [
		'Programming',
		'Cooking'
	],
	eduBasic: 'School',
	eduPro: 'MFTI',
};

console.log(user.city);//undefined
console.log(user.skills);//['Programming', 'Cooking']
console.log(user['skills']);//['Programming', 'Cooking']
const level = 'Pro';
console.log(user['edu' + level]);//MFTI

user.city = 'Moscow';
user['city'] = 'Moscow';
console.log(user.city);//Moscow

user.age = 30;
user['age'] = 30;
console.log(user);
/*
{
"name": "Vasia",
	"surname": "Pupkin",
	"age": 30,
	"skills": [
		"Programming",
		"Cooking"
		],
	"eduBasic": "School",
	"eduPro": "MFTI",
	"city": "Moscow"
}
*/