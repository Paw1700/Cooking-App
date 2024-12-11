import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage,
        data: {
            page_name: 'home'
        }
    }
];
