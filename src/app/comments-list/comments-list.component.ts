import { Component, Input } from '@angular/core';

import { CommentModel } from '../models';

@Component({
    selector: 'comments-list',
    styleUrls: [
        './comments-list.style.css'
    ],
    templateUrl: './comments-list.template.html'
})
export class CommentsListComponent {
    @Input() comments: CommentModel[];
}
