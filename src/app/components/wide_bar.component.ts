import { Component } from "@angular/core";
import { Bar } from "../components_interfaces/text_bar.component";

@Component({
    selector: 'wide_bar',
    template: `
        <ng-content></ng-content>
    `,
    styles: `
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(100% - 2rem);
            padding: 1rem 1rem;
            border-radius: .9rem;
            background-color: var(--app-box-bg);
            transition: transform .2s ease-in-out;
        }    
    `
})
export class WideBar extends Bar { }