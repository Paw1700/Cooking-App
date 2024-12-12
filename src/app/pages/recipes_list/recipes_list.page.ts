import { Component } from "@angular/core";
import { SubCategoryBar } from "../../components/subcategory_bar/subcategory_bar.component";
import { RecipeListItem } from "../../components/recipe_list_item/recipe_list_item.component";

@Component({
    selector: 'recipes_list_page',
    templateUrl: './recipes_list.page.html',
    styleUrl: './recipes_list.page.scss',
    imports: [
        SubCategoryBar,
        RecipeListItem
    ]
})
export class RecipesListPage {
    
}