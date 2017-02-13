import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FeedService } from './feed.service';

import { IFeed } from './feed';

@Component({
    templateUrl: 'app/modules/feed/feed.component.html',
    styleUrls: ['app/modules/feed/feed.component.css']
})

export class QueryComponent implements OnInit{
    feeds : IFeed;
    errorMsg: string = '';

    constructor(private _feedService: FeedService,
                private _route: ActivatedRoute,
                private _router: Router){}

    ngOnInit(): void {
        this._feedService.getFeeds(this._router.url)
                            .subscribe(
                                feeds => this.feeds = feeds,
                                error => this.errorMsg = <string>error);
    }

}