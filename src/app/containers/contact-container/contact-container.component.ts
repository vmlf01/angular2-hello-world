import { Component } from '@angular/core';

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
        <div>Contact Container</div>
    `
})
export class ContactContainer {
}