import { Component, Input } from "@angular/core";
import { ContentBox } from "../../../../components/content_box.component";
import { AddButton } from "../../../../components/add_button/add_button.component";

@Component({
    selector: 'ingredients_box',
    templateUrl: './ingredients_box.component.html',
    styleUrl: './ingredients_box.component.scss',
    imports: [
        ContentBox,
        AddButton
    ]
})
export class IngredientsBox {
    @Input() edit_mode = false
    test_list: boolean[] = Array(10).fill(false);
}