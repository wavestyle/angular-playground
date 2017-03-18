"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CoursesComponent = (function () {
    function CoursesComponent() {
        this.title = "The title of courses page";
        this.courses = ["Course 1", "Course 2", "Course 3"];
        /*    courses : string[];
            constructor(courseService: CourseService){
                this.courses = courseService.getCourses();
            }*/
    }
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'courses',
        template: "\n        <h2>Courses</h2>\n    "
    })
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map