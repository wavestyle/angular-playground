import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
    `
})
export class CoursesComponent {
    title = "The title of courses page";
    courses = ["Course 1", "Course 2", "Course 3"];
/*    courses : string[];
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }*/
 }