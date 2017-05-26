import { Component, OnInit } from '@angular/core';

import{EventService} from '../services/event.service';

@Component({
    selector: 'edit-event',
    templateUrl: './editevent.html',
    styleUrls: ['']
})
export class NameComponent implements OnInit {
    constructor(private eventService: EventService) { }

    ngOnInit() { }
}