
import { Component, Input, OnInit} from '@angular/core';
import { Event} from './Event';
//import { Location} from './location';
@Component({
    templateUrl: '/app/events/eventsdetail.html',
    selector:'events-detail'
})
export class EventsDetailComponent {
    @Input()
    event: Event;
    //location:Location;
    

    //event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}};
    
}