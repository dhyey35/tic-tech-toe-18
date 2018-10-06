import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable()
export class GalleryService {

    constructor(
        private commonService: CommonService,
    ) {

    }

    public getImages() {
        return this.commonService.get('images');
    }
}