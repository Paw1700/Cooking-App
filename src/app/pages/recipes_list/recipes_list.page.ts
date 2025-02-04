import { Component, inject, OnInit } from "@angular/core";
import { SubCategoryBar } from "../../components/subcategory_bar/subcategory_bar.component";
import { RecipeListItemData, RecipeListItem } from "../../components/recipe_list_item/recipe_list_item.component";
import { APP_SERVICE } from "../../app.service";
import { NgUnsubscriber } from "../../util/ngUnsubscriber";
import { takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Category, SubCategory } from "../../models";

@Component({
    selector: 'recipes_list_page',
    templateUrl: './recipes_list.page.html',
    styleUrl: './recipes_list.page.scss',
    imports: [
        SubCategoryBar,
        RecipeListItem
    ]
})
export class RecipesListPage extends NgUnsubscriber implements OnInit {
    private APP = inject(APP_SERVICE)
    private ROUTE = inject(ActivatedRoute)

    selected_sub_categories: string[] = []
    category!: Category
    sub_categories: SubCategory[] = []
    recipies: RecipeListItemData[] = []

    async ngOnInit(): Promise<void> {
        this.readResolverData()
        this.listenToNavBarClickState()
        this.recipies = await this.getRecipies()
    }

    reactToSubcategoryChange(subcat_id: string, state: boolean) {
        if (state) {
            this.selected_sub_categories.push(subcat_id)
        } else {
            this.selected_sub_categories = this.selected_sub_categories.filter(id => id != subcat_id)
        }
        this.getRecipies()
    }

    private readResolverData() {
        this.ROUTE.data.pipe(takeUntil(this.ngUnsubscriber$)).subscribe(data => {
            this.selected_sub_categories.push(data['page_data'].active_sub_categorie_id)
            this.category = data['page_data'].category
            this.sub_categories = data['page_data'].subcategories
        })
    }

    private listenToNavBarClickState() {
        this.APP.STATE.nav_bar_left_side_clicked.pipe(takeUntil(this.ngUnsubscriber$)).subscribe(() => {
            this.goToHomePage()
        })
    }

    private goToHomePage() {
        this.APP.navigate('home')
    }

    private async getRecipies(): Promise<RecipeListItemData[]> {
        const all_recipies = await this.APP.STORAGE.getAllRecipies()
        const recipies = all_recipies.filter(recipie => this.selected_sub_categories.includes(recipie.sub_category_id))
        const photos = await this.APP.STORAGE.getAllPhotos()
        return recipies.map<RecipeListItemData>(recipe => {
            const photo = photos.find(photo => photo.id == recipe.id)
            return {
                id: recipe.id,
                photo_string: photo ? photo.photo_string : '',
                name: recipe.name
            }
        })
}
}