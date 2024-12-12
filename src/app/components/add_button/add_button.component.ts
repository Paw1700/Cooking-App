import { Component, Input } from "@angular/core";
import { Button } from "../../components_interfaces/button.component";

@Component({
    selector: 'add_button',
    templateUrl: './add_button.component.html',
    styleUrl: './add_button.component.scss'
})
export class AddButton extends Button {
    @Input() description: string | null = null
}