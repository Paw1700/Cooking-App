import { Component } from "@angular/core";
import { Button } from "../../components_interfaces/button.component";
import { ButtonWithFixedHeight } from "../../components_interfaces/button_with_fixed_height.component";

@Component({
    selector: 'settings_button',
    templateUrl: './settings_button.component.html',
    styleUrl: './settings_button.component.scss'
})
export class SettingsButton extends ButtonWithFixedHeight {
    
}