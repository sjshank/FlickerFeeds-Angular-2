"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var footer_module_1 = require("./modules/footer/footer.module");
var feed_module_1 = require("./modules/feed/feed.module");
var app_component_1 = require("./app.component");
var feed_component_1 = require("./modules/feed/feed.component");
var app_config_1 = require("./app.config");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            footer_module_1.FooterModule,
            feed_module_1.FeedModule,
            router_1.RouterModule.forRoot([
                { path: 'feeds', component: feed_component_1.NewsFeedComponent },
                { path: '', redirectTo: 'feeds', pathMatch: 'full' },
                { path: '**', redirectTo: 'feeds', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [
            app_config_1.HttpClient
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        schemas: [
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map