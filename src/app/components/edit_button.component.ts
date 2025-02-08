import { Component } from "@angular/core";
import { ButtonWithFixedHeight } from "../components_interfaces/button_with_fixed_height.component";

@Component({
    selector: 'edit_button',
    template: `<img src="/edit.webp" style.height="{{height_in_rem + 'rem'}}" />`,
    styles: `
        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: .6rem;
            transition: transform .2s ease-in-out;
            height: 1rem;

            img {
                height: 100%;
                object-fit: contain;
            }
        }
    `
})
export class EditButton extends ButtonWithFixedHeight {

}