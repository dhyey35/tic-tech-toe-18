import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class VolunteerService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllVolunteer() {
        return this.commonService.get('volunteers');
    }
    public getVolunteerById(id: number) {
        return this.commonService.get('volunteers/' + id);
    }
    public addVolunteer (volunteer: any) {
        return this.commonService.post('volunteers' , volunteer);
    }
}

