import { Component, OnInit } from '@angular/core';

import {
    UserAuthenticationService,
    UtilService,
    GalleryService,
} from '@shared';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    arrImg: GalleryClass[] = [];

    constructor(private galleryService: GalleryService) { }

    ngOnInit() {
        this.galleryService.getImages().subscribe(
            (data: GalleryClass[]) => {
                this.arrImg = data;
            },
            function (err) {
                console.log(err);
            },
            function () {

            }
        );
    }

}

export class GalleryClass {
    constructor(
        public img_id: number,
        public img_src: string,
        public fk_lab_id: number
    ) { }
}
