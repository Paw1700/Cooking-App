import { Component } from "@angular/core";

@Component({
    selector: 'dummy_wide_bar',
    template: `<div class='GLOW'></div>`,
    styles: `
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(100% - 2rem);
            padding: 2rem 1rem;
            border-radius: .9rem;
            background-color: silver;
            background: linear-gradient(90deg,#0001 33%,#0005 50%,#0001 66%) #f2f2f2;
            background-size:300% 100%;
            animation: l1 1s infinite linear;
            @keyframes l1 {
            0% {background-position: right}
            }
        }
    `
})
export class DummyWideBar {

}