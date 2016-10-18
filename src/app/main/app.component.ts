/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { DataService } from '../providers';
import { EventModel } from '../models';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
    <app-logo></app-logo>
    <event-details
      [title]="event.title"
      [images]="event.images"
      callToAction="HOW COOL IS THAT?"
      actionIcon="fa-comment"></event-details>
  `
})
export class AppComponent {
    event: EventModel;

    constructor(dataService: DataService) {
        this.event = dataService.getEvent();
    }
}
