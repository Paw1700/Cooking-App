import { Component } from "@angular/core";
import { ButtonWithFixedHeight } from "../components_interfaces/button_with_fixed_height.component";

@Component({
    selector: 'save_button',
    template: `<p>ZAPISZ</p>`,
    styles: `
        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: .6rem;
            transition: transform .2s ease-in-out;
            height: 1rem;

            p {
                height: 100%;
                background-color: var(--app-accent);
                padding-inline: 1rem;
                padding-block: .25rem;
                border-radius: .5rem;
                font-size: 1.17rem;
                font-weight: 700;
                color: white;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
        }
    `
})
export class SaveButton extends ButtonWithFixedHeight {

}