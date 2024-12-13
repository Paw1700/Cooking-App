import { Component } from "@angular/core";
import { ContentBox } from "../../../../components/content_box.component";

@Component({
    selector: 'ingredients_box',
    templateUrl: './ingredients_box.component.html',
    styleUrl: './ingredients_box.component.scss',
    imports: [
        ContentBox
    ]
})
export class IngredientsBox {
    test_list: boolean[] = Array(10).fill(false);
}