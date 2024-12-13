import { Component } from "@angular/core";
import { SectionTitle } from "./components/section_title.component";
import { Ingredients } from "./components/ingredients/ingredients.component";
import { StepsBox } from "./components/steps_box/steps.component";

@Component({
    selector: 'recipe_page',
    templateUrl: './recipe.page.html',
    styleUrl: './recipe.page.scss',
    imports: [
        SectionTitle,
        Ingredients,
        StepsBox
    ]
})
export class RecipePage {
    
}