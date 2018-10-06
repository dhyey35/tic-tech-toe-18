import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class UserService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getAllUsrs() {
        return this.commonService.get('userss');
    }
    public getUserbyId(id: number) {
        return this.commonService.get('userss/' + id);
    }
    public addUser (user: any) {
        return this.commonService.post('userss' , user);
    }
}
