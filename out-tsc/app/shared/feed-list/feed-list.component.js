var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var FeedListComponent = (function () {
    function FeedListComponent() {
        this.feedItems = [1, 2, 3];
    }
    FeedListComponent.prototype.ngOnInit = function () {
    };
    FeedListComponent = __decorate([
        Component({
            selector: 'app-feed-list',
            templateUrl: './feed-list.component.html',
            styleUrls: ['./feed-list.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], FeedListComponent);
    return FeedListComponent;
}());
//# sourceMappingURL=/Users/macbookpro/Projects/strizhapp/web/app/src/app/shared/feed-list/feed-list.component.js.map