import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class CompanyService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllCompany() {
        return this.commonService.get('companies');
    }
    public getCompanyById(id: number) {
        return this.commonService.get('companies/' + id);
    }
    public addCompany (company: any) {
        return this.commonService.post('companies' , company);
    }
}
