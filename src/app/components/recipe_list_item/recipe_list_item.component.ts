import { Component, Input } from "@angular/core";
import { Photo } from "../../models";

@Component({
    selector: 'recipe_list_item',
    templateUrl: './recipe_list_item.component.html',
    styleUrl: './recipe_list_item.component.scss'
})
export class RecipeListItem {
    @Input({ required: true }) item_data: RecipeListItemData = {
        id: '',
        photo_string: '',
        name: ''
    } 
}

export type RecipeListItemData = {
    id: string,
    photo_string: string
    name: string
}