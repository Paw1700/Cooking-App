import { Component, inject, OnInit } from "@angular/core";
import { SubCategoryBar } from "../../components/subcategory_bar/subcategory_bar.component";
import { RecipeListItem } from "../../components/recipe_list_item/recipe_list_item.component";
import { APP_SERVICE } from "../../app.service";
import { NgUnsubscriber } from "../../util/ngUnsubscriber";
import { takeUntil } from "rxjs";

@Component({
    selector: 'recipes_list_page',
    templateUrl: './recipes_list.page.html',
    styleUrl: './recipes_list.page.scss',
    imports: [
        SubCategoryBar,
        RecipeListItem
    ]
})
export class RecipesListPage extends NgUnsubscriber implements OnInit{
    private APP = inject(APP_SERVICE) 

    ngOnInit(): void {
        this.listenToNavBarClickState()
    }

    private listenToNavBarClickState() {
        this.APP.STATE.nav_bar_left_side_clicked.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( () => {
            this.goToHomePage()
        })
    }

    private goToHomePage() {
        this.APP.navigate('home')
    }
}