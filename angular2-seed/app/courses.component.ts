import { Component } from 'angular2/core';
import { CourseService } from "./course.service";

@Component({
    selector: 'courses',
    template: `
    <h2>courses</h2>
    {{title}}
    <ul>
     <li *ngFor="#course of courses">
         {{course}}
    </li>
    </ul>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
    title = "The title of courses page";
    //courses =  ["Course 1", "Course 2", "Course 3"];
    courses;
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}