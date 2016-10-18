import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-details',
    styleUrls: [
        './event-details.style.css'
    ],
    // Instead of using @Input()/@Output() decorators,
    // we can also use the "inputs"/"outputs" properties
    // to specify our interface
    inputs: [
        'title',
        'callToAction'
    ],
    templateUrl: './event-details.template.html'
})
export class EventDetailsComponent {
    title: string;
    callToAction: string;
    @Input() actionIcon: string;
    @Input() images: string[];

    @Output() actionSelect = new EventEmitter<string>();

    // https://angular.io/styleguide#!#05-16
    // Angular 2 naming convention is to name events without prefix 'on',
    // and name the event handler with the event name prefixed by 'on'
    onClick(event) {
        event.preventDefault();
        // whatever we "emit" will be available to the event subscriber
        // as the "$event" parameter
        this.actionSelect.emit(this.title);
    }
}
