import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { RecipesListPage } from './pages/recipes_list/recipes_list.page';
import { RecipePage } from './pages/recipe/recipe.page';
import { RECIPES_LIST_PAGE_RESOLVER } from '../resolvers/recipes_list_page.resolver';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: HomePage,
        data: {
            page_name: 'home'
        }
    },
    {
        path: 'recipes_list',
        pathMatch: 'full',
        component: RecipesListPage,
        data: {
            page_name: 'recipes_list'
        },
        resolve: {
            page_data: RECIPES_LIST_PAGE_RESOLVER
        }
    },
    {
        path: 'recipe',
        pathMatch: 'full',
        component: RecipePage,
        data: {
            page_name: 'recipe',
            adding: false
        }
    },
    {
        path: 'add_recipe',
        pathMatch: 'full',
        component: RecipePage,
        data: {
            page_name: 'recipe',
            adding: true
        }
    },
    {
        path: "**",
        redirectTo: 'home'
    }
];
