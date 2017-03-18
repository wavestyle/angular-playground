import {Component} from '@angular/core';
import {CourseService} from "./course.service";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>        
    `
})
export class CoursesComponent {
    title = "The title of courses page";
    courses;
    constructor(){
        this.courses = new CourseService().getCourses();
    }

/*    courses : string[];
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }*/
 }