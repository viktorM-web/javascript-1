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
const panelText = 'Panel';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'button';
newElement.innerHTML = `<button class = "${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);



