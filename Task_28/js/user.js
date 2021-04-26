export class user{
	constructor(){
	}

	render(user, data){
		let mainDiv = document.createElement(`div`);
		mainDiv.classList.add(`user`);
		let topDiv = document.createElement(`div`);

		let image;
		for(let key in data.roles){
			if(key === user.role){
				image = data.roles[key];
			}
		}

		topDiv.classList.add(`user__info`);
		topDiv.innerHTML = `
	                <div class="user__info--data">
	                    <img src="${user.img}" alt="Jack Smith" height="50">
	                    <div class="user__naming">
	                        <p>Name: <b>${user.name}</b></p>
	                        <p>Age: <b>${user.age}</b></p>
	                    </div>
	                </div>
	                <div class="user__info--role ${user.role}">
	                    <img src="${image}" alt="${user.role}" height="25">
	                    <p>${user.role}</p>
	                </div>`;
	    mainDiv.append(topDiv);

	    if(Array.isArray(user.courses)){
	    	let bottomDiv = document.createElement(`div`);
	    	bottomDiv.classList.add(`user__courses`);
	    	if(user.role === `admin`){
	    		bottomDiv.innerHTML = this.renderBottomforAdmin(user.courses, data.gradation, user.role);
	    		bottomDiv.classList.add(`admin--info`);
	    	}else if(user.role === `lector`){
				bottomDiv.innerHTML = this.renderBottomforLector(user.courses, data.gradation, user.role);
				bottomDiv.classList.add(`admin--info`);
	    	}else{
	    		bottomDiv.innerHTML = this.renderBottom(user.courses, data.gradation, user.role);
	    	}
	    	mainDiv.append(bottomDiv);
	    }

		let table = document.querySelector(`.users`);
		table.append(mainDiv);
	}

	renderBottom(courses, markList, role){
		let coursesDiv = [];

		courses.forEach(function(course){
			let mark;
			if (course.mark >= markList[0][0] && course.mark <= markList[0][1]){
				mark = `satisfactory`;
			}
			if (course.mark >= markList[1][0] && course.mark <= markList[1][1]){
				mark = `good`;
			}
			if (course.mark >= markList[2][0] && course.mark <= markList[2][1]){
				mark = `very-good`;
			}
			if (course.mark >= markList[3][0] && course.mark <= markList[3][1]){
				mark = `excellent`;
			}
			coursesDiv.push(`<p class="user__courses--course ${role}">${course.title} <span class="${mark}">${mark}</span></p>`);
		});

		return coursesDiv.join(``)
	}
}
