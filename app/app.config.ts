import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class HttpClient {
  constructor(private http: Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers:Headers) {
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  }

  get(url: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}