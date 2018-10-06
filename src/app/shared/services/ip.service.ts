import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestMethod } from '@angular/http';

@Injectable()
export class IPService {

    constructor(
        private http: Http,
    ) {

    }

    public getLatLng() {
        return this.http.get('https://ipapi.co/json/')
                .map(res => res.json());
    }
}