import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class UserCompanyService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllUserCompany() {
        return this.commonService.get('uc');
    }
    public getUserCompanyById(id: number) {
        return this.commonService.get('uc/' + id);
    }

}

