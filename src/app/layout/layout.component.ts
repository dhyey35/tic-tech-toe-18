import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadEnd } from '@angular/router';
// import { SidebarComponent} from '@shared';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    public isShow: boolean = true;
    constructor(public router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(events => {
            if (events instanceof RouteConfigLoadEnd || events instanceof NavigationEnd) {
                if (this.router.url === '/application') {
                    this.router.navigate(['/application/dashboard']);
                }
            }
        });
    }



}
