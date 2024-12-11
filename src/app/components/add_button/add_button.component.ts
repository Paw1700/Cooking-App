import { Component, HostBinding, HostListener, Input } from "@angular/core";

@Component({
    selector: 'add_button',
    templateUrl: './add_button.component.html',
    styleUrl: './add_button.component.scss'
})
export class AddButton {
    @Input() description: string | null = null
    @HostBinding('style.transform') scale = 'scale(1)'
    @HostListener('click') 
    clickAnimation() {
        this.scale = 'scale(0.9)'
        setTimeout(() =>{
            this.scale = 'scale(1)'
        }, 200)
    }
}