import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {HomeComponent} from '../pages/home/home.component';

const LAYOUT_ROUTES: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent }
    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
