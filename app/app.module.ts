import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component'; 
import {appRoutes} from './routes';

//import {EventsAppComponent} from './events-app.component'
import { EventsDetailComponent } from './events/events-detail.component';
import {EventsListComponent } from './events/events-list.component';
import {Location} from './events/location';
import {Event} from './events/Event';
import {EventService} from './services/event.service';
import {NavigationComponent} from './nav/nav.component';

@NgModule({
    imports:[BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers:[EventService],
    declarations: [AppComponent, NavigationComponent,  EventsListComponent, EventsDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}
