const tasks = ['Task1'];

function add(newTask) {
	tasks.push(newTask);
}

function remove(task) {
	const index = tasks.indexOf(task);
	if (index === -1) {
		console.log(`${task} not found in to ${tasks}`)
		return;
	}
	tasks.splice(index, 1)
}

function prioritize(task) {
	const index = tasks.indexOf(task);
	if (index === -1) {
		console.log(`${task} not found in to ${tasks}`)
		return;
	}
	const taskFromList = tasks[index];
	tasks.splice(index, 1);
	tasks.unshift(taskFromList);
}

add('Task2');
add('Task3');
console.log(tasks);

remove('Task4');
console.log(tasks);

prioritize('Task5');
console.log(tasks);