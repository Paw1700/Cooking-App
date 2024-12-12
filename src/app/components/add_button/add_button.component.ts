import { Component, Input } from "@angular/core";
import { ButtonWithFixedHeight } from "../../components_interfaces/button_with_fixed_height.component";

@Component({
    selector: 'add_button',
    templateUrl: './add_button.component.html',
    styleUrl: './add_button.component.scss'
})
export class AddButton extends ButtonWithFixedHeight {
    @Input() description: string | null = null
}