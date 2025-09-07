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


