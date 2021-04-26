import {user} from './user.js'

export class lector extends user{
	constructor(user, data){
		super();
		this.render(user, data);
	}

	renderBottomforLector(courses, markList){
		let coursesDiv = [];
		courses.forEach(function(course){
			let studentMark,
				lectorMark;

			if (course.score >= markList[0][0] && course.score <= markList[0][1]){
				lectorMark = `satisfactory`;
			}
			if (course.score >= markList[1][0] && course.score <= markList[1][1]){
				lectorMark = `good`;
			}
			if (course.score >= markList[2][0] && course.score <= markList[2][1]){
				lectorMark = `very-good`;
			}
			if (course.score >= markList[3][0] && course.score <= markList[3][1]){
				lectorMark = `excellent`;
			}if (course.studentsScore >= markList[0][0] && course.studentsScore <= markList[0][1]){
				studentMark = `satisfactory`;
			}
			if (course.studentsScore >= markList[1][0] && course.studentsScore <= markList[1][1]){
				studentMark = `good`;
			}
			if (course.studentsScore >= markList[2][0] && course.studentsScore <= markList[2][1]){
				studentMark = `very-good`;
			}
			if (course.studentsScore >= markList[3][0] && course.studentsScore <= markList[3][1]){
				studentMark = `excellent`;
			}

			coursesDiv.push(`<div class="user__courses--course lector">
								<p>Title:<b>${course.title}</b></p>
								<p>Lector's score:<span class="${lectorMark}">${lectorMark}</span></p>
								<p>Average student's score:<span class="${studentMark}">${studentMark}</span></p>
							</div>`
							);

		});

		return coursesDiv.join(``)
	}
}
