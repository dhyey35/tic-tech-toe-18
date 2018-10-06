import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class UserInvestorService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllUserInvestor() {
        return this.commonService.get('ui');
    }
    public getUserInvestorById(id: number) {
        return this.commonService.get('ui/' + id);
    }

}

