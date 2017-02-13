import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { FeedModule } from './modules/feed/feed.module';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './modules/feed/feed.component';
import { HttpClient } from './app.config';

@NgModule({
    imports:[
        BrowserModule,
        FooterModule,
        FeedModule,
        RouterModule.forRoot([
        { path: 'feeds', component: NewsFeedComponent },
        { path: '', redirectTo: 'feeds', pathMatch: 'full' },
        { path: '**', redirectTo: 'feeds', pathMatch: 'full' }
    ])
    ],
    declarations: [
        AppComponent
    ],
    providers:[
        HttpClient
    ],
    bootstrap:[
        AppComponent
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule{}