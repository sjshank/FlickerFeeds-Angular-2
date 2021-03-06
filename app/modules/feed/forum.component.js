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
var core_1 = require("@angular/core");
var feed_service_1 = require("./feed.service");
var NewsFeedComponent = (function () {
    function NewsFeedComponent(_newsFeedService) {
        this._newsFeedService = _newsFeedService;
        this.errorMsg = '';
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsFeedService.getNewsFeeds()
            .subscribe(function (feeds) { return _this.feeds = feeds; }, function (error) { return _this.errorMsg = error; });
    };
    return NewsFeedComponent;
}());
NewsFeedComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/modules/feed/feed.component.html',
        styleUrls: ['app/modules/feed/feed.component.css']
    }),
    __metadata("design:paramtypes", [feed_service_1.NewsFeedService])
], NewsFeedComponent);
exports.NewsFeedComponent = NewsFeedComponent;
//# sourceMappingURL=forum.component.js.map