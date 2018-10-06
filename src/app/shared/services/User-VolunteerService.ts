import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class UserVolunteerService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllUserVolunteer() {
        return this.commonService.get('uv');
    }
    public getUserVolunteerById(id: number) {
        return this.commonService.get('uv/' + id);
    }

}

