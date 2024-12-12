import { Component, HostBinding, HostListener, Input } from "@angular/core";

@Component({
    selector: '',
    template: ``
})
export class Button {
    @Input() height_in_rem: number = 1
    @HostBinding('style.transform') scale = 'scale(1)'
    @HostBinding('style.height') get height() {
        return this.height_in_rem + 'rem'
    }
    @HostListener('click')
    clickAnimation() {
        this.scale = 'scale(0.9)'
        setTimeout(() => {
            this.scale = 'scale(1)'
        }, 200)
    } 
}