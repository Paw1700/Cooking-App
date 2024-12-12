import { Component, HostBinding, HostListener, Input } from "@angular/core";

@Component({
    selector: '',
    template: ``
})
export class Button {
    @HostBinding('style.transform') scale = 'scale(1)'
    @HostListener('click')
    clickAnimation() {
        this.scale = 'scale(0.9)'
        setTimeout(() => {
            this.scale = 'scale(1)'
        }, 200)
    } 
}