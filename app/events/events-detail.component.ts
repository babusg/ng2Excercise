
import { Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Event} from './Event';
import {EventService} from '../services/event.service';
@Component({
    templateUrl: '/app/events/eventsdetail.html',
    selector:'events-detail'
})
export class EventsDetailComponent  {
    @Input()
    event: Event;
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute){

    }
    //location:Location;
    

    //event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}};
    
}