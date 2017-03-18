import {Component} from '@angular/core';
import { CoursesComponent } from "./courses.component";

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <courses></courses>
  `
})
export class AppComponent { }
