import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({ selector: '[validate]' })

export class ValidateDirective {
    @Input() validate: any;
    @Input() validateClass: string;

    constructor(
        private renderer: Renderer2,
        private el: ElementRef
    ) {

    }

    /* To remove red border after change in value */
    @HostListener('keyup')
    setValidationClass() {
        this.validateAllFields();
    }

    /* To remove red border after change in value */
    @HostListener('change')
    changeValidationClass() {
        this.validateAllFields();
    }

    /* To show red border */
    @HostListener('submit', ['$event'])
    formSubmitted($event: any) {
        $event.preventDefault();
        this.validateAllFields(true);
    }

    @HostListener('reset', ['$event'])
    formReset($event: any) {
        this.validateAllFields(false, true);
    }

    validateAllFields(submit: boolean = false, reset: boolean = false) {
        const allElms: any = this.el.nativeElement.elements;

        /* We want to scroll the page up and focus on first element with error */
        let firstErr = true;

        for (let i = 0; i < allElms.length; i++) {
            if (this.validate.submitted && !allElms[i].validity.valid && !reset) {
                if (firstErr && submit) {
                    allElms[i].focus();
                }
                firstErr = false;
                this.renderer.addClass(allElms[i], this.validateClass ? this.validateClass : 'red-border');
            } else if ((this.validate.submitted && allElms[i].validity.valid) || reset) {
                this.renderer.removeClass(allElms[i], this.validateClass ? this.validateClass : 'red-border');
            }
        }
    }
}