import { Component, inject, OnInit } from "@angular/core";
import { SectionTitle } from "./components/section_title.component";
import { IngredientsBox } from "./components/ingredients_box/ingredients_box.component";
import { StepsBox } from "./components/steps_box/steps.component";
import { APP_SERVICE } from "../../app.service";
import { NgUnsubscriber } from "../../util/ngUnsubscriber";
import { takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Photo, Recipe } from "../../models";
import { SubCategorySelector, SubcategorySelectorItem } from "./components/subcategory_selector/subcategory_selector.component";

@Component({
    selector: 'recipe_page',
    templateUrl: './recipe.page.html',
    styleUrl: './recipe.page.scss',
    imports: [
        SectionTitle,
        IngredientsBox,
        StepsBox,
        SubCategorySelector
    ]
})
export class RecipePage extends NgUnsubscriber implements OnInit {
    private APP = inject(APP_SERVICE)
    private ROUTE = inject(ActivatedRoute)

    edit_mode = false
    recipe: Recipe = {
        id: '',
        sub_category_id: '',
        name: '',
        photo_id: '',
        ingredients: [],
        steps: []
    }
    photo: Photo = {
        id: '',
        photo_string: ''
    }
    selector_items: SubcategorySelectorItem[] = []

    async ngOnInit() {
        this.edit_mode = this.ROUTE.snapshot.data['adding'] ? this.ROUTE.snapshot.data['adding'] : false;
        if (this.edit_mode) {
            // !!! FETCH DATA FROM ROUTE RESOLVED DATA
        }
        this.selector_items = await this.getSubcategorySelectorData()
        this.reactToNavBarBtnClicked()
    }

    private async getSubcategorySelectorData(): Promise<SubcategorySelectorItem[]> {
        const categories = await this.APP.STORAGE.getAllCategories()
        const subcategories = await this.APP.STORAGE.getAllSubcategories()
        return Promise.resolve(categories.map(category => {
            const filtered_subcategories = subcategories.filter(subcategory => subcategory.category_id == category.id)
            return {
                category: category,
                subcategories: filtered_subcategories
            }
        }))
    }

    private reactToNavBarBtnClicked() {
        this.APP.STATE.nav_bar_right_side_clicked.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( state => {
            this.toogleEditMode()
        })
        this.APP.STATE.nav_bar_left_side_clicked.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( state => {
            this.APP.navigate('recipes_list') // !!! NEED TO ADD RECIPE SUBCATEGORY ID
        })
    }

    private toogleEditMode() {
        this.edit_mode = !this.edit_mode
        if (this.edit_mode) {
            this.APP.APPERANCE.setNavBarIconOptions('back', null, 'save');
        } else {
            this.APP.APPERANCE.setNavBarIconOptions('back', null, 'edit');
        }
    }
}