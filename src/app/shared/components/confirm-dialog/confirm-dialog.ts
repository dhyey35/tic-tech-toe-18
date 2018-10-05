import { Component, OnInit, TemplateRef, ViewChild, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, NavigationEnd } from '@angular/router';
import { UtilService } from '../../services/utils.service';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.html',
})

export class ConfirmDialogComponent implements OnChanges {
    @Input() visible: boolean;
    @Input() title: string;
    @Input() message: string;

    @Output()
    getCallBack: EventEmitter<any> = new EventEmitter();

    public modalRef: BsModalRef;
    @ViewChild('confirmModal') modalTemplate: TemplateRef<any>;

    constructor(
        private modalService: BsModalService,
        public utilService: UtilService
    ) {
    }

    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class

        if (this.visible) {
            setTimeout(() => {
                this.openModal();
            }, 0);
        }
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