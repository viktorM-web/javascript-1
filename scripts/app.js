'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitId;

/* page */

const page = {
	menu: document.querySelector('.menu__list'),
	header: {
		h1: document.querySelector('.h1'),
		progressPercent: document.querySelector('.progress__percent'),
		progressCoverBar: document.querySelector('.progress__cover-bar'),
	},
	content: {
		daysContainer: document.getElementById('days'),
		nextDay: document.querySelector('.habbit__day')
	}
}

/* utils */

function loadData() {
	const habbitsString = localStorage.getItem(HABBIT_KEY);
	const habbitArray = JSON.parse(habbitsString);
	if (Array.isArray(habbitArray)) {
		habbits = habbitArray;
	}
}

function saveData() {
	localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* render */
function rerenderMenu(activeHabbit) {
	// document.querySelector('.menu__list').innerHTML = '';
	for (const habbit of habbits) {
		let existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
		if (!existed) {
			const element = document.createElement('button');
			element.setAttribute('menu-habbit-id', habbit.id);
			element.classList.add('menu__item');
			element.addEventListener('click', () => rerender(habbit.id));
			element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt=${habbit.name} />`;
			if (activeHabbit.id === habbit.id) {
				element.classList.add('menu__item_active');
			}
			page.menu.appendChild(element);
			continue;
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('menu__item_active');
		} else {
			existed.classList.remove('menu__item_active');
		}
	}
}

function rerenderHead(activeHabbit) {
	page.header.h1.innerText = activeHabbit.name;
	const progress = activeHabbit.days.length / activeHabbit.target > 1
		? 100
		: activeHabbit.days.length / activeHabbit.target * 100;
	page.header.progressPercent.innerText = progress.toFixed(0) + ' %';
	page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function rerenderDays(activeHabbit) {
	page.content.daysContainer.innerHTML = '';

	for (const index in activeHabbit.days) {
		const element = document.createElement('div');
		element.classList.add('habbit')
		element.innerHTML = `<div class="habbit__day">Day ${Number(index) + 1}</div>
						<div class="habbit__comment">
							${activeHabbit.days[index].comment}
						</div>
						<button class="habbit__delete" onclick="removeDay(${Number(index)})">
							<img name="numberDay" value="${Number(index) + 1}" src="./images/delete.svg" alt="Delete day ${Number(index) + 1} ">
						</button>`;
		page.content.daysContainer.appendChild(element);
	}
	page.content.nextDay.innerHTML = `Day ${activeHabbit.days.length + 1}`;
}

function rerender(activeHabbitId) {
	globalActiveHabbitId = activeHabbitId;
	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
	if (!activeHabbit) {
		return;
	}
	rerenderMenu(activeHabbit);
	rerenderHead(activeHabbit);
	rerenderDays(activeHabbit);
}

/* work with days */
function removeDay(index) {
	habbits.find(habbit => habbit.id === globalActiveHabbitId)
		.days.splice(index, 1);
	rerender(globalActiveHabbitId);
	saveData();
}


function addDays(event) {
	const form = event.target;
	event.preventDefault(form);
	const data = new FormData(event.target);
	const comment = data.get('comment');
	form['comment'].classList.remove('error');
	console.log(form);
	if (!comment) {
		form['comment'].classList.add('error');
		return;
	}
	habbits = habbits.map(habbit => {
		if (habbit.id === globalActiveHabbitId) {
			return {
				...habbit,
				days: habbit.days.concat([{ comment }])
			}
		}
		return habbit
	}
	);
	form['comment'].value = '';
	rerender(globalActiveHabbitId);
	saveData();
};

/* init */
(() => {
	loadData();
	rerender(habbits[0].id);
})()