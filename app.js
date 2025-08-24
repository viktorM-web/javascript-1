'use strict'

const user = {
	login: 'Audi@google.com',
	password: 'A3$$TYH'
};

function removePassword(reset) {
	if (reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
}

const resetUserPessword = removePassword.bind(user, true);
resetUserPessword();
console.log(user);