import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

@Injectable()

export class UserService {
    url_getAll = 'https://edtechbackend.herokuapp.com/userss';
    url_byId = 'https://edtechbackend.herokuapp.com/userss/1';


    constructor(private _http: HttpClient) {}
    getAllUsers() {
        return this._http.get(this.url_getAll);
    }
}
