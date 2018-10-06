import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class InvestorService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllInvestor() {
        return this.commonService.get('investor');
    }
    public getInvestorById(id: number) {
        return this.commonService.get('investor/' + id);
    }
    public addInvestor (investors: any) {
        return this.commonService.post('investor' , investors);
    }
}

