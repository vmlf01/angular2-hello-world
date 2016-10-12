import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-details',
    styleUrls: [
        './event-details.style.css'
    ],
    templateUrl: './event-details.template.html'
})
export class EventDetailsComponent {
    @Input() title: string;
    @Input() callToAction: string;
    @Input() actionIcon: string;
    @Input() image: string;

    onClick(event) {
        event.preventDefault();
        alert('Action clicked!');
        console.log('event', event);
    }
}
