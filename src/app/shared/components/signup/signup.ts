import { Component, OnInit, TemplateRef, ViewChild, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import {
    UserAuthenticationService,
    UtilService,
    
} from '../../services';
import { UserService } from '../../services/UserService';
import { Userclass } from '../../classes/user_calss';
declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnChanges {
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
        private userAuthenticationService: UserAuthenticationService,
        private user_Service:UserService
    ) {

    }

    ngOnChanges() {
        if(this.visible){
            setTimeout(()=>{
                this.openModal();
            },0);
        }
    }
    initModel() {
        this.reqModel = {
            email: '',
            password: '',
            name:'',
            contact:'',
            user_type:''
        };
    }

    sendLoginRequest(form: any) {
        if (form.invalid) {
            this.utilService.showErrorToast("Please fill the form correctly");
            return;
        } else {
            this.user_Service.addUser(new Userclass(null,this.reqModel.email,this.reqModel.password,this.reqModel.name,this.reqModel.contact,this.reqModel.user_type)).subscribe((data:Userclass)=>{
                    localStorage.setItem('email_id',data.email_id);
                    localStorage.setItem('fk_id',data.user_id.toString());
                    localStorage.setItem('user_type',data.user_type);
                    console.log("Success");
            },()=>{
                console.log("error");
                this.utilService.showErrorToast("Email or Password are invalid");
            },()=>{
                console.log("completed")
            });
           
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