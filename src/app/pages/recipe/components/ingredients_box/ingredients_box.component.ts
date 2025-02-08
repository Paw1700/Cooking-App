import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ContentBox } from "../../../../components/content_box.component";
import { AddButton } from "../../../../components/add_button/add_button.component";
import { Ingredient } from "../../../../models";

@Component({
    selector: 'ingredients_box',
    templateUrl: './ingredients_box.component.html',
    styleUrl: './ingredients_box.component.scss',
    imports: [
        ContentBox,
        AddButton
    ],
})
export class IngredientsBox {
    @Input({required: true}) edit_mode = false
    @Input()ingredients_list: Ingredient[] = []

    @Output("updated_ingredients_list") updated_ingredients_list_emitter = new EventEmitter<Ingredient[]>()

    addIngredient() {
        this.ingredients_list.push({
            name: '',
            amount: ''
        })
    }

    changeIngredientData(index: number, type: 'name' | 'amount', event: Event) {
        const value = (event.target as HTMLInputElement).value
        if (type === 'name') {
            this.ingredients_list[index].name = value ? value : ''
        } else {
            this.ingredients_list[index].amount = value ? value : ''
        }
        this.updateIngredientsList()
    }

    private updateIngredientsList() {
        this.updated_ingredients_list_emitter.emit(this.ingredients_list)
    }
}

