import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class LabsService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getLabs() {
        return this.commonService.get('labs');
    }
}