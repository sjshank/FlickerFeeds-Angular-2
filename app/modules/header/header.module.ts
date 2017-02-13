import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NewsFeedComponent } from '../feed/feed.component';

import { HeaderComponent }  from './header.component';

@NgModule({
  imports: [
    BrowserModule,
    
  ],
  exports:[
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule { }
