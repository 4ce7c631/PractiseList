import {user} from './user.js'

export class student extends user{
	constructor(user, data){
		super();
		this.render(user, data);
	}

	hru(){
		console.log(`hru`);
	}
}