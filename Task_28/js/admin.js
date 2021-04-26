import {user} from './user.js'

export class admin extends user{
	constructor(user, data){
		super();
		this.render(user, data);
	}

	renderBottomforAdmin(courses, markList){
		let coursesDiv = [];
		courses.forEach(function(course){
			let mark;
			if (course.score >= markList[0][0] && course.score <= markList[0][1]){
				mark = `satisfactory`;
			}
			if (course.score >= markList[1][0] && course.score <= markList[1][1]){
				mark = `good`;
			}
			if (course.score >= markList[2][0] && course.score <= markList[2][1]){
				mark = `very-good`;
			}
			if (course.score >= markList[3][0] && course.score <= markList[3][1]){
				mark = `excellent`;
			}
			
			coursesDiv.push(`<div class="user__courses--course admin">
								<p>Title:<b>${course.title}</b></p>
								<p>Admin's score:<span class="${mark}">${mark}</span></p>
								<p>Lector:<b>${course.lector}</b></p>
							</div>`
							);

		});

		return coursesDiv.join(``)
	}
}