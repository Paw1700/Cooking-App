import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { RecipesListPage } from './pages/recipes_list/recipes_list.page';

export const routes: Routes = [
    {
        path: '',
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
        }
    }
];
