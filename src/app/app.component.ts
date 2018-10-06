import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { UtilService, IPService } from '@shared';

declare var google: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private router: Router,
        public utilService: UtilService,
        public iPService: IPService,
    ) {

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        console.log(localStorage.getItem('email_id'));
    }
    
    
}
