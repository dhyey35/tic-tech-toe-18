import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {
    UserAuthenticationService,
    UtilService,
} from '@shared';

declare var $: any;
declare var fontchange: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
    public reqModel: any;
    public rememberMe: boolean = true;
    public message: string = '';

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
    ) {

    }

    ngOnInit() {
        this.initModel();
    }

    initModel() {
        this.reqModel = {
            email: '',
            password: '',
        };
    }

    sendLoginRequest(form: any) {
        if (form.invalid) {
            this.utilService.showErrorToast("Please fill the form correctly");
            return;
        }
        if (this.reqModel.email === "abc@xyz.com" && this.reqModel.password === "123") {
            localStorage.setItem("isLoggedIn", "true");
            this.router.navigate(["/application"]);
        } else {
            this.utilService.showErrorToast("Email or Password are invalid");
        }
    }
}
