import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
declare var apiUrls;

@Injectable()
export class CommonService {

    constructor(private http: Http) {
    }

    private getUrlSearchParams(object): URLSearchParams {
        let urlSearchParams = new URLSearchParams();
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                urlSearchParams.set(key, object[key])
            }
        }
        return urlSearchParams;
    }

    private _commonHeaders = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    });

    get(url: string, params?: any): Observable<object> {
        let userHeaders = this.setHeader();
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.appendAll(this.getUrlSearchParams(params));
        if (userHeaders) {
            return this.http.get(apiUrls.dotNet + url + urlSearchParams.toString(), { headers: userHeaders })
                .map(res => res.json());
        }
        return this.http.get(apiUrls.dotNet + url + urlSearchParams.toString(), { headers: this._commonHeaders })
            .map(res => res.json());
    };

    post(url: string, data: any): Observable<object> {
        let userHeaders = this.setHeader();
        if (userHeaders) {
            return this.http.post(apiUrls.dotNet + url, data, { headers: userHeaders })
                .map(res => res.json());
        } else {
            return this.http.post(apiUrls.dotNet + url, data, { headers: this._commonHeaders })
                .map(res => res.json());
        }
    };

    postWithFormData(url: string, data: FormData): Observable<any> {
        let hdrs = new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        })
        return this.http.post(apiUrls.dotNet + url, data, { headers: hdrs })
            .map(res => res.json());
    };

    put(url: string, data?: any): Observable<object> {
        let userHeaders = this.setHeader();
        if (userHeaders) {
            return this.http.put(apiUrls.dotNet + url, data, { headers: userHeaders }).map(res => res.json())
        } else {
            return this.http.put(apiUrls.dotNet + url, data, { headers: this._commonHeaders }).map(res => res.json())
        }
    };

    putWithFormData(url: string, data: FormData): Observable<any> {
        let hdrs = new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        })
        return this.http.put(apiUrls.dotNet + url, data, { headers: hdrs })
            .map(res => res.json());
    };

    delete(url: string, data?: any): Observable<object> {
        let userHeaders = this.setHeader();
        if (userHeaders) {
            return this.http.delete(apiUrls.dotNet + url, { headers: userHeaders })
        } else {
            return this.http.delete(apiUrls.dotNet + url, { headers: this._commonHeaders })
        }
    };

    // set authentication tocken
    setHeader() {
        if (localStorage.getItem('access_token')) {
            let _userIdHeaders = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            });
            return _userIdHeaders;
        } else {
            return null;
        }
    }

}