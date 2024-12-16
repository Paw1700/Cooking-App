import { Component } from "@angular/core";
import { SectionTitle } from "./components/section_title.component";
import { IngredientsBox } from "./components/ingredients_box/ingredients_box.component";
import { StepsBox } from "./components/steps_box/steps.component";

@Component({
    selector: 'recipe_page',
    templateUrl: './recipe.page.html',
    styleUrl: './recipe.page.scss',
    imports: [
        SectionTitle,
        IngredientsBox,
        StepsBox
    ]
})
export class RecipePage {
    edit_mode = false
}