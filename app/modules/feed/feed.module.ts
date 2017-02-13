import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsFeedComponent }  from './feed.component';
import { JobComponent }  from './job.component';
import { QueryComponent }  from './query.component';
import { FeedService }  from './feed.service';
import { DescHtmlFilter, PublishedFilter, AuthorFilter } from './feed-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild([
        {path: 'queries', component: QueryComponent},
        {path: 'jobs', component: JobComponent}
    ])
  ],
  exports: [
    NewsFeedComponent
  ],
  declarations: [
    NewsFeedComponent,
    JobComponent,
    QueryComponent,
    DescHtmlFilter,
    PublishedFilter,
    AuthorFilter
  ],
  providers:[
    FeedService
  ]
})
export class FeedModule { }
