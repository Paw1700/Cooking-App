import { Component } from "@angular/core";
import { AddButton } from "../add_button/add_button.component";
import { SettingsButton } from "../settings_button/settings_button.component";
import { BackArrow } from "../back_arrow/back_arrow.component";

@Component({
    selector: 'nav_bar',
    templateUrl: './nav_bar.component.html',
    styleUrl: './nav_bar.component.scss',
    imports: [
        AddButton,
        SettingsButton,
        BackArrow
    ]
})
export class NavBar {

}