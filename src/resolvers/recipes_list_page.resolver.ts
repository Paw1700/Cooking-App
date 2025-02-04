import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Category, SubCategory } from "../app/models";
import { APP_SERVICE } from "../app/app.service";

@Injectable()
export class RECIPES_LIST_PAGE_RESOLVER implements Resolve<RecipeListPageResolvedData> {
    constructor(private APP: APP_SERVICE, private ROUTER: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<RecipeListPageResolvedData | RedirectCommand> {
        return new Promise(async (resolve) => {
            try {
                const sub_category_id = route.queryParamMap.get('sub_category_id')
                if (!sub_category_id) {
                    resolve(new RedirectCommand(this.ROUTER.parseUrl('/home')))
                    return
                }
                const subcategory = await this.APP.STORAGE.getSubcategory(sub_category_id)
                const category = await this.APP.STORAGE.getCategory(subcategory.category_id)
                const subcategories = await this.APP.STORAGE.getAllSubcategories()
                resolve({ category: category, subcategories: subcategories, active_sub_categorie_id: subcategory.id })
            } catch(err) {
                resolve(new RedirectCommand(this.ROUTER.parseUrl('/home')))
            }
        })
    }
}

export type RecipeListPageResolvedData = {
    category: Category,
    subcategories: SubCategory[],
    active_sub_categorie_id: string
}