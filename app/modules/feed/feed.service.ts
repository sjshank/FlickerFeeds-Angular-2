import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IFeed } from './feed';
import { IJob } from './job';
import { FEED_CONST } from './feed.constant';
import { APP_CONST } from '../../app.constant';
import { HttpClient } from '../../app.config';

@Injectable()
export class FeedService {

    constructor(private _httpClient: HttpClient){}

    getFeeds(path : string): Observable<IFeed> {
        let url : string = '';
        if(path === '/queries')
            url = FEED_CONST.queriesURL;
        else
            url = FEED_CONST.feedsURL;

        return  this._httpClient.get(url)
                        .map((response: Response) => <IFeed[]> response.json().items)
                        .catch(this.handleError); 
    }

    getJobs(): Observable<IJob> {
        return  this._httpClient.get(FEED_CONST.jobsURL)
                        .map((response: Response) => <IJob[]> response.json().items)
                        .catch(this.handleError); 
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || APP_CONST.serviceErr);
    }
}