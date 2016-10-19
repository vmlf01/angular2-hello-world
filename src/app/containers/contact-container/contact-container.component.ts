import { Component, OnInit } from '@angular/core';

import { CommentsService } from '../../providers';
import { CommentModel } from '../../models';

@Component({
    selector: 'contact-container',
    styles: [
        `
            .contact-section {
                background-color: #f7ab24;
                background-image: url("assets/images/contact-bg.jpg");
            }

            .megaphone {
                position: absolute;
                left: 100px;
                top: 150px;
            }

            #contact .container {
                padding: 50px 0px 500px 200px;
            }
        `
    ],
    template: `
        <section id="contact">
            <div class="contact-section">
                <div class="megaphone">
                    <img class="img-responsive" src="assets/images/megaphone.png" alt="">
                </div>
                <div class="container">
                    <div class="row">
                        <contact-form
                            (formSubmit)="onFormSubmit($event)"></contact-form>
                    </div>

                    <div class="row">
                        <comments-list
                            [comments]="comments"></comments-list>
                    </div>
                </div>
            </div>


        </section>
        <!--/#contact-->
    `
})
export class ContactContainer implements OnInit {
    comments: CommentModel[];

    constructor(private commentsService: CommentsService) {
    }

    ngOnInit() {
        this.commentsService.getComments()
            .subscribe(
                data => this.comments = data,
                error => alert(error)
            );
    }

    onFormSubmit(formData: CommentModel) {
        this.commentsService.saveComment(formData)
            .subscribe(newComment => {
                // success callback
                alert('New comment saved');
                this.comments.push(newComment);
            }, error => {
                // error callback
                alert(error);
            });
    }
}
