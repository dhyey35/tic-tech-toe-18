import { Directive, ElementRef, HostListener } from '@angular/core';
import { LEFT_ARROW, RIGHT_ARROW, BACKSPACE, END, HOME, DELETE, TAB } from '@angular/cdk/keycodes';

@Directive({
    selector: '[telNumber]'
})
export class TelNumberDirective {
    // Allow decimal numbers. The \. is only allowed once to occur
    private regex: RegExp = new RegExp(/^[\+]?[(]?[0-9]{0,3}[)]?[-\s\.]?[0-9]*[-\s\.]?[0-9]*$/g);

    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home etc..
    // SHIFT - 16
    private specialKeys: Array<number> = [LEFT_ARROW, RIGHT_ARROW, BACKSPACE, END, HOME, DELETE, TAB, 16];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.keyCode) !== -1) {
            return;
        }

        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        let current: string = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        if(event.key) {
            let next: string = current.concat(event.key);
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
    }
}