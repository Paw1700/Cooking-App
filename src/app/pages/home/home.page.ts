import { Component, inject } from "@angular/core";
import { AddButton } from "../../components/add_button/add_button.component";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { APP_SERVICE } from "../../app.service";
import { WideBar } from "../../components/wide_bar.component";
import { SubBar } from "../../components/sub_bar.component";

@Component({
    selector: 'home_page',
    standalone: true,
    imports: [
    WideBar,
    SubBar,
    AddButton
],
    templateUrl: './home.page.html',
    styleUrl: './home.page.scss',
    animations: [
        trigger('SUBCATEGORIES', [
            state('true', style({
                height: '*'
            })),
            state('false', style({
                height: '0'
            })),
            transition('true <=> false', animate('0.2s ease-in-out')),
        ])
    ]
})
export class HomePage {
    private APP = inject(APP_SERVICE)

    open_sub = true

    close(){
        this.open_sub = !this.open_sub
    }

    navigateToCategory() {
        this.APP.navigate('recipes_list')
    }
}