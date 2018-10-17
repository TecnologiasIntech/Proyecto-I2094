import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {ScheduleComponent} from './pages/schedule/schedule.component';

const LAYOUT_ROUTES: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'agenda', pathMatch: 'full' },
        { path: 'agenda', component: ScheduleComponent },
        { path: 'clientes', component: ScheduleComponent },
        { path: 'servicios', component: ScheduleComponent },
        { path: 'productos', component: ScheduleComponent },
        { path: 'turnos', component: ScheduleComponent }
    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
