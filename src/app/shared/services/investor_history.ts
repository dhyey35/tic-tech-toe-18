import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class InvestorHistoryService {

    constructor(
        private commonService: CommonService,
    ) {

    }
    public getInvestorId(id: number) {
        id=3;
        return this.commonService.get('iu/' + id);
    }
}
