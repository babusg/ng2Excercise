import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import{Event} from './Event'; 

@Component( {
    templateUrl:'/app/events/eventslist.html',
    selector:'events-list'
})

export class EventsListComponent  {
    //events: any[]; 
    events:Event[];
    //Events= new Event[];
    constructor(private eventService: EventService){
         this.events = eventService.getEvents(); 
    }
    
}