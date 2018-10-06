import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
    UserAuthenticationService,
    UtilService,
    VolunteerService
    
} from '@shared';
import { Voluteerclass } from '../shared/classes/volunteer_class';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-be-volunteer-page',
    templateUrl: './be-volunteer.component.html',
    styleUrls: ['./be-volunteer.component.scss'],
})

export class BeVolunteerComponent implements OnInit {
    public reqModel: any;
    public rememberMe: boolean = true;
    public message: string = '';
    constructor(
        public router: Router,
        public route: ActivatedRoute,
        private userAuthenticationService: UserAuthenticationService,
        public utilService: UtilService,
        public vol:VolunteerService
    ){

    }
    ngOnInit() { 
        this.initModel();
    }
    
    initModel() {
        this.reqModel = {
            name: '',
            dob: '',
            skills: '',
            hq: '',
        };
    }
    sendLoginRequest(form: any) {
        if (form.invalid) {
            this.utilService.showErrorToast("Please fill the form correctly");
            return;
        }
         else {
             this.vol.addVolunteer(new Voluteerclass(parseInt(localStorage.getItem('fk_id')),0,null,null,null,this.reqModel.skills,this.reqModel.hq)).subscribe((data:Voluteerclass)=>{
                 console.log("Success");
             },()=>{
                this.utilService.showErrorToast("Can`t Submitted your request");
             },()=>{
                 console.log("Completed");
             });
            
        }
    }
}
