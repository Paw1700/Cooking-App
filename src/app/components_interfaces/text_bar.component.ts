import { Component, HostBinding, HostListener, Input } from "@angular/core";

@Component({
    selector: '',
    template: ''
})
export class TextBar {
    @Input({required: true}) text: string = ''
    @Input() block_scale_up_animation = false
    @HostBinding('style.transform') scale = 'scale(1)'
    @HostListener('click') clickAnimation() {
        this.scale = 'scale(0.9)'
        if (!this.block_scale_up_animation) {
            setTimeout(() =>{
                this.scale = 'scale(1)'
            }, 200)
        }
    }
}