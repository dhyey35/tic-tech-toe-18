import { Injectable, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Headers, Response, URLSearchParams, RequestMethod } from '@angular/http';
import * as _ from 'lodash';
import { CommonService } from "./common.service";
import { ToastrService } from 'ngx-toastr';

declare var apiUrls: any;
declare var $: any;
declare var unescape: any;

@Injectable()
export class UtilService {
	/* Common config for ngx-bootstrap datepicker */
	private _bsDatepickerConfig: any = {
		showWeekNumbers: false,
		containerClass: "theme-dark-blue",
		dateInputFormat: 'DD/MM/YYYY'
	}

	/* Config for application wide pagination */
	private _pgPerPage: number = 10;
	private _OwnershipPerPage: number = 50;
	private _pgMaxSize: number = 5;
	private _pgBoundaryLinks: boolean = true;
	private _pgRotate: boolean = false;

	private _urlRegex: RegExp = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
	private _emailRegex: string = "[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
	private _telephoneRegex: string = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]+$";
	public isLoggedIn: boolean = false;

	constructor(
		private http: Http,
		private location: Location,
		private commonService: CommonService,
		public router: Router,
		public toastrService: ToastrService,		
	) {
	}

	/**
	 * 
	 * @param msg displayed below title
	 * @param title displayed on top of toast
	 * @param options visit https://www.npmjs.com/package/ngx-toastr#options
	 */
	public showSuccessToast(msg: string, title: string = 'Success', options: any = { timeOut: 3000 }) {
		return this.toastrService.success(msg, title, options);
	}

	public showErrorToast(msg: string = 'Something went wrong. Please try again later...', title: string = 'Error', options: any = { timeOut: 3000 }) {
		return this.toastrService.error(msg, title, options);
	}

	
	/* Use in html for back buttons */
	public goBack() {
		this.location.back();
	}

	public logout() {
		localStorage.removeItem("isLoggedIn");
		this.isLoggedIn = false;
	}

	/* All getters for private variables should be kept at bottom to avoid cluttering the file */
	get urlRegex(): RegExp {
		return this._urlRegex;
	}

	get pgPerPage(): number {
		return this._pgPerPage;
	}

	get OwnershipPerPage(): number {
		return this._OwnershipPerPage;
	}

	get pgMaxSize(): number {
		return this._pgMaxSize;
	}

	get pgBoundaryLinks(): boolean {
		return this._pgBoundaryLinks;
	}

	get pgRotate(): boolean {
		return this._pgRotate;
	}

	get bsDatepickerConfig(): any {
		return this._bsDatepickerConfig;
	}

	get emailRegex(): string {
		return this._emailRegex;
	}

	get telephoneRegex(): string {
		return this._telephoneRegex;
	}
}
