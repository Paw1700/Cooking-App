import { Component, Input } from "@angular/core";
import { AddButton } from "../../add_button/add_button.component";
import { BackArrow } from "../../back_arrow/back_arrow.component";
import { SettingsButton } from "../../settings_button/settings_button.component";
import { EditButton } from "../../edit_button.component";
import { SaveButton } from "../../save_button.component";

@Component({
    selector: 'nav_bar_icon',
    template: `
        @switch (icon_type) {
            @case ('add') {
                <add_button [height_in_rem]="1.75"  />
            }
            @case ('settings') {
                <settings_button [height_in_rem]="1.75" />
            }
            @case ('back') {
                <back_arrow [height_in_rem]="1.75" />
            }
            @case ('edit') {
                <edit_button [height_in_rem]="1.75" />
            }
            @case ('save') {
                <save_button [height_in_rem]="1.75" />
            }
        }
    `,
    imports: [
        AddButton,
        SettingsButton,
        BackArrow,
        EditButton,
        SaveButton
    ]
})
export class NavBarIcon {
    @Input({required: true}) icon_type: NavBarIconType | null = null
}

export type NavBarIconType = 'add' | 'settings' | 'back' | 'edit' | 'save';