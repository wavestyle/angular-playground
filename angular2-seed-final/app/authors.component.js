"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var author_service_1 = require("./author.service");
var AuthorsComponent = (function () {
    function AuthorsComponent(authorService) {
        this.title = "The title of the authors page";
        this.authors = authorService.getAuthors();
    }
    return AuthorsComponent;
}());
AuthorsComponent = __decorate([
    core_1.Component({
        selector: 'authors',
        template: "\n        <h2>Authors</h2>\n        {{title}}\n        <ul>\n            <li *ngFor=\"let author of authors\">\n                {{ author }}\n            </li>\n        </ul> \n    "
    }),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorsComponent);
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authors.component.js.map