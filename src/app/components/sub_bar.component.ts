import { Component } from "@angular/core";
import { Bar } from "../components_interfaces/text_bar.component";

@Component({
    selector: 'sub_bar',
    template: `
        <ng-content></ng-content>
    `,
    styles: `
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            padding-block: .6rem;
            border-radius: .6rem;
            background-color: var(--app-box-bg-secondary);
            transition: transform .2s ease-in-out;
        }
    `
})
export class SubBar extends Bar { }