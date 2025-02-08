import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category, SubCategory } from "../../../../models";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'sub_category_selector',
    templateUrl: './subcategory_selector.component.html',
    styleUrl: './subcategory_selector.component.scss',
    animations: [
        trigger('SELECTOR', [
            transition("void => *", [
                style({ height: 0 }),
                animate(".2s ease-in-out", style({ height: "*" }))
            ]),
            transition("* => void", [
                animate(".2s ease-in-out", style({ height: 0 }))
            ])
        ])
    ]
})
export class SubCategorySelector {
    @Input({ required: true }) selector_items: SubcategorySelectorItem[] = []
    @Output("selected_subcategory") selected_subcategory_emitter = new EventEmitter<SubCategory>()

    openess_state = false
    selected_category: Category | null = null
    selected_subcategory: SubCategory | null = null

    changeOpenessState(state?: boolean) {
        if (state) {
            this.openess_state = state
        } else {
            this.openess_state = !this.openess_state
        }
    }

    setSubcategory(category: Category, subcategory: SubCategory) {
        this.selected_category = category
        this.selected_subcategory = subcategory
        this.selected_subcategory_emitter.emit(subcategory)
        this.changeOpenessState(false)
    }
}

export type SubcategorySelectorItem = {
    category: Category,
    subcategories: SubCategory[]
}