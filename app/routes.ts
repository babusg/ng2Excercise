import {Routes}  from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EditEventComponent} from './events/editEvent.component';
export const appRoutes:Routes= [
    {path:'events', component: EventsListComponent},
    {path: 'events/:id', component : EditEventComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'}
];



