import { Component, OnInit, TemplateRef, ViewChild, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { Userclass } from '../../classes/user_calss';
import {
    UserAuthenticationService,
    UtilService,
} from '../../services';
declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'login-signup',
    templateUrl: './login-signup.component.html'
})
export class LoginSignupComponent implements OnChanges {
    @Input() visible: boolean;
    @Input() title: string;
    @Input() message: string;
    public reqModel: any;
    public rememberMe: boolean = true;
    public mess: string = '';
    @Output()
    getCallBack: EventEmitter<any> = new EventEmitter();

    public modalRef: BsModalRef;
    @ViewChild('confirmModal') modalTemplate: TemplateRef<any>;

    constructor(
        private modalService: BsModalService,
        public utilService: UtilService,
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService
    ) {

    }

    ngOnChanges() {
        if (this.visible) {
            setTimeout(() => {
                this.openModal();
            }, 0);
        }
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
<<<<<<< HEAD
        else {
            this.userAuthenticationService.login
                (new Userclass(null, this.reqModel.email, this.reqModel.password, null, null, null)).subscribe((data: Userclass[]) => {
                    (console.log(data));
                    localStorage.setItem('fk_id', data[0].user_id);
                    localStorage.setItem('email_id', data[0].email_id);
                    localStorage.setItem('user_type', data[0].user_type);
                }, () => {
                    this.utilService.showErrorToast("Email or Password are invalid");
                }, () => {
                    console.log("Completed");
                });

=======
         else {
             this.userAuthenticationService.login
             (new Userclass(null,this.reqModel.email,this.reqModel.password,null,null,null)).subscribe((data:Userclass[])=>{
                    if(!data.length) {
                        return this.utilService.showErrorToast("Email or Password are invalid");
                    }
                    localStorage.setItem('fk_id',data[0].user_id);
                    localStorage.setItem('email_id',data[0].email_id);
                    localStorage.setItem('user_type',data[0].user_type);
             },()=>{
                this.utilService.showErrorToast("Email or Password are invalid");     
             },()=>{
                 console.log("Completed");
             });
            
>>>>>>> 13da6b39bd7481b1849ca0befde30d41a647a8fc
        }
    }
    ngOnInit() {
        this.initModel();
    }
    public openModal() {
        this.modalRef = this.modalService.show(this.modalTemplate, {
            ignoreBackdropClick: true,
            keyboard: false,
        });
    }

    public closeModalWithAction() {
        this.getCallBack.emit(true)
        this.modalRef.hide();
    }

    public simpleHide() {
        this.getCallBack.emit(false)
        this.modalRef.hide();
    }
}