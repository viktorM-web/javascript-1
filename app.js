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
	return tasks.splice(index, 1)
}

function prioritize(task) {
	const result = remove(task);
	if (result) {
		tasks.unshift(result[0]);
	}
}

add('Task2');
add('Task3');
console.log(tasks);

remove('Task2');
console.log(tasks);

prioritize('Task3');
console.log(tasks);