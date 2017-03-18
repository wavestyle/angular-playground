/*import {Component} from '@angular/core';
// import {CourseService} from "./course.service";
// to be added import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let #course of courses">
                {{course}}
            </li>
        </ul>
    `
})
//to be moved  ,directives: [AutoGrowDirective]
// to be added ,providers: [CourseService]

export class CoursesComponent {
    title = "The title of courses page";
    courses = ["Course 1", "Course 2", "Course 3"];
/*    courses : string[];
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }*/
/* }*/