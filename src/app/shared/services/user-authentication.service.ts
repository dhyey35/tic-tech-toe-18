import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class UserAuthenticationService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public login(data: any) {
        return this.commonService.post('login', data);
    }
}