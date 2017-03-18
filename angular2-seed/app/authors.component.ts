import { Component } from 'angular2/core';
import { AuthorService } from "./author.service";

@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="#author of authors">
            {{author}}
        </li>
    </ul> 
    `
})

export class AuthorsComponent {
    title = "The title of the authors page";
    authors;
    constructor(){
        this.authors = new AuthorService().getAuthors(); 
    }
}