import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'appDropdown'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toogleOpen() {
        this.isOpen = !this.isOpen;
    }
}
