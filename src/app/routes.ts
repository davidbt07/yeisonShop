import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'details', component: DetailsComponent},
    {path: '', redirectTo: '/menu', pathMatch: 'full'}
]