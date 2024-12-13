import { Component } from "@angular/core";

@Component({
    selector: 'ingredients',
    templateUrl: './ingredients.component.html',
    styleUrl: './ingredients.component.scss'
})
export class Ingredients {
    test_list: boolean[] = Array(10).fill(false);
}