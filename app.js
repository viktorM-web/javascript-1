'use strict';

// document.querySelector('.button').addEventListener('click', function () {
// 	const input = document.querySelector('.input').value;
// 	if (!input) {
// 		return;
// 	}
// 	document.querySelector('.panel').innerText = input;
// 	document.querySelector('.input').value = '';
// });

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	// document.querySelector('.notification').style.display = 'block';
	// document.querySelector('.notification').classList.add('notification_active');

	// document.querySelector('.notification').classList.remove('notification_disactive');

	console.log(document.querySelector('.notification').getAttribute('class'));
	document.querySelector('.notification').setAttribute('class', 'notification');
	document.querySelector('.notification').setAttribute('key', 1);
	document.querySelector('.notification').setAttribute('user-id', 1);
	console.log(Number(document.querySelector('.notification').getAttribute('user-id')));
};

function changeClick() {
	submitForm();
}

function submitByEnter(e) {
	if (e.code == 'Enter') {
		submitForm();
	}
};
// function submitByEnter() {
// 	document.querySelector('.input').addEventListener('keydown', (e) => {
// 		if (e.code == 'Enter') {
// 			submitForm();
// 		}
// 	});
// }

// console.log(document.querySelector('.one > span').innerText)
console.log(document.querySelectorAll('.one')[0].innerText)
// console.log(document.querySelector('.one ~ div').innerText)
console.log(document.querySelectorAll('.one')[1].innerText)

// console.log(document.querySelector('#two').innerText)
console.log(document.getElementById('two').innerText)
console.log(document.querySelector('[user-id="4"]').innerText)

