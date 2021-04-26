import {student} from './student.js';
import {admin} from './admin.js';
import {lector} from './lector.js';

async function getInfo(){

	let response = await fetch(`./data.json`),
			data = await response.json();
	let users = data.users;
	delete data.users;

	users.forEach(function(user){
		switch(user.role){
			case `student`:
					let new_student = new student(user, data);
					break;
			case `admin`:
					let new_admin = new admin(user, data);
					break;
			case `lector`:
					let new_lector = new lector(user, data);
					break;
		}
	});
}

getInfo();