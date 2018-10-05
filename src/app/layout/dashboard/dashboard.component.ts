import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '@shared';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public logoutModalVisible: boolean = false;

    constructor(
        public utilService: UtilService,
        public router: Router,
    ) {
    }

    ngOnInit() {
    }

    showLogoutModal() {
        this.logoutModalVisible = true;
    }

    hideLogoutModal(action: boolean) {
        if(action) {
            /* If user clicks the Yes btn, action will be true */
            this.utilService.logout();
            this.router.navigate(['/login']);
        }
        this.logoutModalVisible = false;
    }
}
