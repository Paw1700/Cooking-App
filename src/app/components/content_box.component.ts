import { Component } from "@angular/core";

@Component({
    selector: 'content_box',
    template: `
        <ng-content></ng-content>
    `,
    styles: `
        :host {
            width: calc(100% - 2rem);
            padding-inline: 1rem;
            padding-block: 1rem;
            border-radius: .88rem;
            display: flex;
            flex-direction: column;
            gap: .73rem;
            align-items: center;
            justify-content: center;
            background-color: var(--app-box-bg);
        }
    `
})
export class ContentBox {}