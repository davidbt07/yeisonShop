import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'header', component: HeaderComponent},
    {path: '', redirectTo: '/menu', pathMatch: 'full'}
]