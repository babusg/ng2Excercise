import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Event} from './Event';
import{EventService} from '../services/event.service';

@Component({
    selector: 'edit-event',
    templateUrl: '/app/events/editevent.html',
    styleUrls: ['']
})
export class EditEventComponent implements OnInit {
    event:Event;
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId']);
     }
}