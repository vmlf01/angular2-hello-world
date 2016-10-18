import { Component } from '@angular/core';

import { DataService } from '../../providers';
import { EventModel } from '../../models';

@Component({
    selector: 'home-container',
    template: `
        <event-details
            [title]="event.title"
            [images]="event.images"
            callToAction="HOW COOL IS THAT?"
            actionIcon="fa-comment"
            (actionSelect)="onActionSelect($event)"></event-details>
    `
})
export class HomeContainer {
    event: EventModel;

    constructor(dataService: DataService) {
        this.event = dataService.getEvent();
    }

    onActionSelect(event) {
        alert(`Let's do something with "${event}"!`);
    }
}
