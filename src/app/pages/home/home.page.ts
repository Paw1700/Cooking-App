import { Component, inject, OnInit } from "@angular/core";
import { AddButton } from "../../components/add_button/add_button.component";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { APP_SERVICE } from "../../app.service";
import { WideBar } from "../../components/wide_bar.component";
import { SubBar } from "../../components/sub_bar.component";
import { Category, SubCategory } from "../../models";
import { AddBox } from "../../components/add_box/add_box.component";
import { NgUnsubscriber } from "../../util/ngUnsubscriber";
import { takeUntil } from "rxjs";
import { DummyWideBar } from "../../components/dummy_wide_bar.component";

@Component({
    selector: 'home_page',
    standalone: true,
    imports: [
    WideBar,
    SubBar,
    AddButton,
    AddBox,
    DummyWideBar
],
    templateUrl: './home.page.html',
    styleUrl: './home.page.scss',
    animations: [
        trigger('SUBCATEGORIES', [
            state('true', style({
                height: '*'
            })),
            state('false', style({
                height: '0'
            })),
            transition('true <=> false', animate('0.2s ease-in-out')),
        ])
    ]
})
export class HomePage extends NgUnsubscriber implements OnInit {
    private APP = inject(APP_SERVICE)

    categories_list: {category: Category, subcategories: SubCategory[], open: boolean}[] | null = null
    show_add_box: boolean = false
    add_box_title: string = ''
    add_box_type: AddBoxTypes = 'category'
    open_category_list_index: number | null = null

    ngOnInit(): void {
        this.reactAddButton()
        setTimeout(() => {
            this.fetchCategories()
        }, 500) 
    }

    openSubcategories(index: number) {
        if (this.open_category_list_index !== null && this.open_category_list_index !== index) {
            this.categories_list![this.open_category_list_index].open = false
        }
        this.categories_list![index].open = !this.categories_list![index].open
        this.open_category_list_index = index
    }

    openAddBox(type: AddBoxTypes) {
        this.show_add_box = true
        this.add_box_type = type
        this.adaptAddBoxTitleToType()
    }

    async reactToAddBoxOutput(output: string | null) {
        if (output == null) {
            this.show_add_box = false
            return
        }
        if (this.add_box_type == 'category') {
            await this.saveNewCategory(output)
            await this.fetchCategories()
            this.show_add_box = false
        } else {
            await this.saveNewSubcategory(output, this.categories_list![this.open_category_list_index!].category.id)
            await this.fetchCategories()
            this.show_add_box = false
        }
    }

    private adaptAddBoxTitleToType() {
        if (this.add_box_type == 'category') {
            this.add_box_title = 'DODAJ KATEGORIE'
        } else {
            this.add_box_title = 'DODAJ PODKATEGORIE'
        }
    }

    private async fetchCategories() {
        try {
            const categories = await this.APP.STORAGE.getAllCategories()
            const subcategories = await this.APP.STORAGE.getAllSubcategories()
            this.categories_list = categories.map((category) => {
                return {
                    category,
                    subcategories: subcategories.filter(subcategory => subcategory.category_id == category.id),
                    open: false
                }
            })
        } catch (err) {
            // ! CREATE ERROR CODE !
            console.error('Error during get all categories!')
        }
    }

    private async saveNewCategory(category_name: string) {
        await this.APP.STORAGE.saveCategory({id: "", name: category_name})
        return Promise.resolve()
    }

    private async saveNewSubcategory(subcategory_name: string, category_id: string) {
        await this.APP.STORAGE.saveSubcategory({id: "", name: subcategory_name, category_id: category_id})
        return Promise.resolve()
    }

    private reactAddButton() {
        this.APP.STATE.nav_bar_center_side_clicked.pipe(takeUntil(this.ngUnsubscriber$)).subscribe( () => {
            this.openAddBox('category')
        })
    }
}

type AddBoxTypes = 'category' | 'subcategory'