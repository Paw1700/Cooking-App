import { Component, HostBinding, Input } from "@angular/core";
import { Button } from "./button.component";

@Component({
    selector: '',
    template: ``
})
export class ButtonWithFixedHeight extends Button {
    @Input() height_in_rem: number = 1
    @HostBinding('style.height') get height() {
        return this.height_in_rem + 'rem'
    }
}