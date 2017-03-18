import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";
import { CourseService } from "./course.service";
import { AuthorsComponent } from "./authors.component";
import { AuthorService } from "./author.service";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    CoursesComponent,
    AuthorsComponent
  ],
  providers: [ 
    CourseService,
    AuthorService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
