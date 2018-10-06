import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class CompanyHistoryService {

    constructor(
        private commonService: CommonService,
    ) {

    }
    public getCompanyById(id: number) {
        id=2;
        return this.commonService.get('cu/' + id);
    }
}
