import { Component } from "@angular/core";

@Component({
    selector: 'section_title',
    template: `
    <ng-content></ng-content>
    `,
    styles: [
        `
        :host {
            width: 100%;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--app-secondary);
            letter-spacing: .6rem;
        }
        `
    ]
})
export class SectionTitle {

}