"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var feed_component_1 = require("./feed.component");
var job_component_1 = require("./job.component");
var query_component_1 = require("./query.component");
var feed_service_1 = require("./feed.service");
var feed_filter_pipe_1 = require("./feed-filter.pipe");
var FeedModule = (function () {
    function FeedModule() {
    }
    return FeedModule;
}());
FeedModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forChild([
                { path: 'queries', component: query_component_1.QueryComponent },
                { path: 'jobs', component: job_component_1.JobComponent }
            ])
        ],
        exports: [
            feed_component_1.NewsFeedComponent
        ],
        declarations: [
            feed_component_1.NewsFeedComponent,
            job_component_1.JobComponent,
            query_component_1.QueryComponent,
            feed_filter_pipe_1.DescHtmlFilter,
            feed_filter_pipe_1.PublishedFilter,
            feed_filter_pipe_1.AuthorFilter
        ],
        providers: [
            feed_service_1.FeedService
        ]
    })
], FeedModule);
exports.FeedModule = FeedModule;
//# sourceMappingURL=feed.module.js.map