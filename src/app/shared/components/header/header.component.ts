import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService } from '../../services';

declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    public logoutModalVisible: boolean = false;
    public SignUpModalVisible: boolean = false;
    constructor(
       
        public utilService: UtilService,
        public router: Router,
    ) {

    }

    ngOnInit() {}
    
    showLogInModal() {
        this.logoutModalVisible = true;
    }
    showSignUpModal(){
        this.SignUpModalVisible=true;
    }

    hideLogoutModal(action: boolean) {
        if(action) {
            /* If user clicks the Yes btn, action will be true */
            this.utilService.logout();
            this.router.navigate(['/login']);
        }
        this.logoutModalVisible = false;
    }
    hideSignoutModal(action: boolean){
        this.SignUpModalVisible=false;
    }
}