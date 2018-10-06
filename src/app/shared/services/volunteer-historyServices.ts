import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class volunteerhistoryService {

    constructor(
        private commonService: CommonService
    ) {

    }

    
    public getVolunteerHistory(id: number) {
        return this.commonService.get('vl/' + id);
    }
}

