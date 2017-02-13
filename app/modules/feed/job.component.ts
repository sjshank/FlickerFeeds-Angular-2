import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';

import { IJob } from './job';

@Component({
    templateUrl: 'app/modules/feed/feed.component.html',
    styleUrls: ['app/modules/feed/feed.component.css']
})

export class JobComponent implements OnInit{
    jobs : IJob;
    errorMsg: string = '';

    constructor(private _feedService: FeedService){}

    ngOnInit(): void {
        this._feedService.getJobs()
                            .subscribe(
                                jobs => this.jobs = jobs,
                                error => this.errorMsg = <string>error);
    }

}