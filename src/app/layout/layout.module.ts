import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgModule} from '@angular/core';
import {LayoutRouting} from './layout.routing';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {BsDatepickerModule, ButtonsModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {LayoutComponent} from './layout.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './header/search/search.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NavigationTriggerComponent} from './header/navigation-trigger/navigation-trigger.component';
import {Globals} from '../statics/globals';
import {SharedModule} from '../shared/shared.module';
import {Select2Module} from 'ng2-select2';
import {Broadcaster} from '../../assets/js/broadcaster';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AlertService} from '../services/alert.service';
import {ValidationService} from '../services/validation.service';
import {CountdownTimerModule} from 'ngx-countdown-timer';
import {LimitToPipe} from '../pipes/limit-to.pipe';
import {GrowlComponent} from '../components/growl/growl.component';
import {HomeComponent} from '../pages/home/home.component';


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SearchComponent,
        NavigationComponent,
        NavigationTriggerComponent,
        LimitToPipe,
        GrowlComponent,
        HomeComponent
    ],
    providers: [
        Globals,
        Broadcaster,
        AlertService,
        ValidationService
    ],
    imports: [
        CommonModule,
        LayoutRouting,
        FormsModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        ButtonsModule.forRoot(),
        PerfectScrollbarModule,
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        Select2Module,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        CountdownTimerModule,
    ],
    entryComponents: [
    ]
})

export class LayoutModule {
}
