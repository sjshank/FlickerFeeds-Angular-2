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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var feed_constant_1 = require("./feed.constant");
var app_constant_1 = require("../../app.constant");
var app_config_1 = require("../../app.config");
var FeedService = (function () {
    function FeedService(_httpClient) {
        this._httpClient = _httpClient;
    }
    FeedService.prototype.getFeeds = function (path) {
        var url = '';
        if (path === '/queries')
            url = feed_constant_1.FEED_CONST.queriesURL;
        else
            url = feed_constant_1.FEED_CONST.feedsURL;
        return this._httpClient.get(url)
            .map(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    FeedService.prototype.getJobs = function () {
        return this._httpClient.get(feed_constant_1.FEED_CONST.jobsURL)
            .map(function (response) { return response.json().items; })
            .catch(this.handleError);
    };
    FeedService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || app_constant_1.APP_CONST.serviceErr);
    };
    return FeedService;
}());
FeedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_config_1.HttpClient])
], FeedService);
exports.FeedService = FeedService;
//# sourceMappingURL=feed.service.js.map